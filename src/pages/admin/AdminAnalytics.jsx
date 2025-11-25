// src/pages/admin/AdminAnalytics.jsx
import React, { useEffect, useMemo, useState } from "react";
import API from "../../api/axiosInstance";
import dayjs from "dayjs";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AdminLayout from "../../layouts/AdminLayout";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF7A7A", "#AA66FF", "#FF66C4", "#6C9EFF"];

function Card({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  );
}

/**
 * AdminAnalytics
 * - Shows KPIs and 4 charts (monthly line, coaches bar, program pie, school bar)
 * - Exports chart data to CSV or Excel (buttons under each chart as requested)
 */
export default function AdminAnalytics() {
  const [records, setRecords] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        // Get all required data in parallel
        const [attRes, coachRes, schoolRes] = await Promise.all([
          API.get("/attendance"),
          API.get("/coaches/all"),
          API.get("/schools"),
        ]);
        setRecords(Array.isArray(attRes.data) ? attRes.data : []);
        setCoaches(Array.isArray(coachRes.data) ? coachRes.data : []);
        setSchools(Array.isArray(schoolRes.data) ? schoolRes.data : []);
      } catch (e) {
        console.error("Analytics load error:", e);
        setError("Failed to load analytics data");
        setRecords([]);
        setCoaches([]);
        setSchools([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // -------------------- Aggregations --------------------
  const totals = useMemo(() => {
    const totalRecords = records.length;
    const totalPresent = records.reduce((s, r) => s + (Number(r.attendance) || 0), 0);
    const totalStrength = records.reduce((s, r) => s + (Number(r.strength) || 0), 0);
    const avgPresent = totalRecords ? Math.round((totalPresent / totalRecords) * 100) / 100 : 0;
    return { totalRecords, totalPresent, totalStrength, avgPresent };
  }, [records]);

  // last 12 months monthly aggregation
  const monthlyData = useMemo(() => {
    const map = new Map();
    const now = dayjs();
    // pre-populate last 12 months keys to keep consistent order
    for (let i = 11; i >= 0; i--) {
      const key = now.subtract(i, "month").format("YYYY-MM");
      map.set(key, { month: dayjs(key + "-01").format("MMM YYYY"), present: 0, records: 0 });
    }
    for (const r of records) {
      const dateStr = r.date || r.createdAt;
      if (!dateStr) continue;
      const k = dayjs(dateStr).format("YYYY-MM");
      if (!map.has(k)) {
        map.set(k, { month: dayjs(k + "-01").format("MMM YYYY"), present: 0, records: 0 });
      }
      const e = map.get(k);
      e.present += Number(r.attendance) || 0;
      e.records += 1;
      map.set(k, e);
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([, v]) => v);
  }, [records]);

  // attendance aggregated per coach
  const coachData = useMemo(() => {
    const agg = {};
    for (const r of records) {
      const coachObj = r.coachId;
      const coachId = (coachObj && (coachObj._id || coachObj)) || "unknown";
      const coachName = (coachObj && (coachObj.name || coachObj)) || "Unknown";
      if (!agg[coachId]) agg[coachId] = { name: coachName, present: 0, records: 0 };
      agg[coachId].present += Number(r.attendance) || 0;
      agg[coachId].records += 1;
    }
    return Object.values(agg).sort((a, b) => b.present - a.present).slice(0, 12);
  }, [records]);

  // program distribution by present
  const programData = useMemo(() => {
    const map = {};
    for (const r of records) {
      const p = r.program || "Unknown";
      if (!map[p]) map[p] = { program: p, present: 0, count: 0 };
      map[p].present += Number(r.attendance) || 0;
      map[p].count += 1;
    }
    return Object.values(map).sort((a, b) => b.present - a.present);
  }, [records]);

  // school-wise attendance
  const schoolData = useMemo(() => {
    const map = {};
    for (const r of records) {
      const sObj = r.schoolId;
      const sid = (sObj && (sObj._id || sObj)) || "unknown";
      const sname = (sObj && (sObj.name || sObj)) || "Unknown";
      if (!map[sid]) map[sid] = { name: sname, present: 0, records: 0 };
      map[sid].present += Number(r.attendance) || 0;
      map[sid].records += 1;
    }
    return Object.values(map).sort((a, b) => b.present - a.present).slice(0, 12);
  }, [records]);

  // -------------------- Export helpers --------------------
  const exportArrayToCSV = (header = [], rows = [], filename = "export.csv") => {
    const lines = [];
    lines.push(header.join(","));
    for (const row of rows) {
      // escape quotes in each cell and wrap cells that contain comma or quote or newline
      const safe = row.map((cell) => {
        if (cell === null || cell === undefined) return "";
        const s = String(cell);
        const needsQuotes = s.includes(",") || s.includes('"') || s.includes("\n");
        const escaped = s.replace(/"/g, '""');
        return needsQuotes ? `"${escaped}"` : escaped;
      });
      lines.push(safe.join(","));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

  const exportArrayToExcel = (sheetName = "Sheet1", header = [], rows = [], filename = "export.xlsx") => {
    // construct worksheet as array of arrays: first header then rows
    const aoa = [header, ...rows];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(aoa);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), filename);
  };

  // export monthly chart data
  const exportMonthlyCSV = () => {
    const header = ["Month", "Present", "Records"];
    const rows = monthlyData.map((d) => [d.month, d.present, d.records]);
    exportArrayToCSV(header, rows, `monthly_attendance_${dayjs().format("YYYYMMDD_HHmm")}.csv`);
  };
  const exportMonthlyExcel = () => {
    const header = ["Month", "Present", "Records"];
    const rows = monthlyData.map((d) => [d.month, d.present, d.records]);
    exportArrayToExcel("Monthly", header, rows, `monthly_attendance_${dayjs().format("YYYYMMDD_HHmm")}.xlsx`);
  };

  // export coach chart data
  const exportCoachCSV = () => {
    const header = ["Coach", "Present", "Records"];
    const rows = coachData.map((d) => [d.name, d.present, d.records]);
    exportArrayToCSV(header, rows, `coach_attendance_${dayjs().format("YYYYMMDD_HHmm")}.csv`);
  };
  const exportCoachExcel = () => {
    const header = ["Coach", "Present", "Records"];
    const rows = coachData.map((d) => [d.name, d.present, d.records]);
    exportArrayToExcel("Coaches", header, rows, `coach_attendance_${dayjs().format("YYYYMMDD_HHmm")}.xlsx`);
  };

  // export program chart data
  const exportProgramCSV = () => {
    const header = ["Program", "Present", "Count"];
    const rows = programData.map((d) => [d.program, d.present, d.count]);
    exportArrayToCSV(header, rows, `program_distribution_${dayjs().format("YYYYMMDD_HHmm")}.csv`);
  };
  const exportProgramExcel = () => {
    const header = ["Program", "Present", "Count"];
    const rows = programData.map((d) => [d.program, d.present, d.count]);
    exportArrayToExcel("Program", header, rows, `program_distribution_${dayjs().format("YYYYMMDD_HHmm")}.xlsx`);
  };

  // export school chart data
  const exportSchoolCSV = () => {
    const header = ["School", "Present", "Records"];
    const rows = schoolData.map((d) => [d.name, d.present, d.records]);
    exportArrayToCSV(header, rows, `school_attendance_${dayjs().format("YYYYMMDD_HHmm")}.csv`);
  };
  const exportSchoolExcel = () => {
    const header = ["School", "Present", "Records"];
    const rows = schoolData.map((d) => [d.name, d.present, d.records]);
    exportArrayToExcel("Schools", header, rows, `school_attendance_${dayjs().format("YYYYMMDD_HHmm")}.xlsx`);
  };

  // -------------------- Render --------------------
  if (loading) {
    return <div className="p-6">Loading analytics...</div>;
  }
  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Attendance Analytics</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Total Records" value={totals.totalRecords} />
          <Card title="Total Present (sum)" value={totals.totalPresent} />
          <Card title="Total Strength (sum)" value={totals.totalStrength} />
          <Card title="Avg Present per Record" value={totals.avgPresent} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly line chart */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold mb-2">Monthly Attendance (last 12 months)</h3>
            </div>
            {monthlyData.length === 0 ? (
              <div>No data</div>
            ) : (
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="present" stroke="#0088FE" strokeWidth={2} dot />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* export buttons (bottom) */}
            <div className="mt-3 flex gap-2">
              <button onClick={exportMonthlyCSV} className="px-3 py-1 bg-blue-600 text-white rounded">CSV</button>
              <button onClick={exportMonthlyExcel} className="px-3 py-1 bg-green-600 text-white rounded">Excel</button>
            </div>
          </div>

          {/* Coach bar chart */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Top Coaches by Present Count</h3>
            {coachData.length === 0 ? (
              <div>No data</div>
            ) : (
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={coachData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="present" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            <div className="mt-3 flex gap-2">
              <button onClick={exportCoachCSV} className="px-3 py-1 bg-blue-600 text-white rounded">CSV</button>
              <button onClick={exportCoachExcel} className="px-3 py-1 bg-green-600 text-white rounded">Excel</button>
            </div>
          </div>

          {/* Program pie */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Program Distribution (by Present)</h3>
            {programData.length === 0 ? (
              <div>No data</div>
            ) : (
              <div style={{ width: "100%", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={programData}
                      dataKey="present"
                      nameKey="program"
                      outerRadius={100}
                      innerRadius={45}
                      label={(entry) => `${entry.program} (${Math.round(entry.present)})`}
                    >
                      {programData.map((_, i) => (
                        <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            <div className="mt-3 flex gap-2">
              <button onClick={exportProgramCSV} className="px-3 py-1 bg-blue-600 text-white rounded">CSV</button>
              <button onClick={exportProgramExcel} className="px-3 py-1 bg-green-600 text-white rounded">Excel</button>
            </div>
          </div>

          {/* School bar chart */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">School-wise Attendance</h3>
            {schoolData.length === 0 ? (
              <div>No data</div>
            ) : (
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={schoolData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="present" fill="#FFBB28" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            <div className="mt-3 flex gap-2">
              <button onClick={exportSchoolCSV} className="px-3 py-1 bg-blue-600 text-white rounded">CSV</button>
              <button onClick={exportSchoolExcel} className="px-3 py-1 bg-green-600 text-white rounded">Excel</button>
            </div>
          </div>
        </div>

        {/* reference lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Top Coaches (by present)</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {coachData.length === 0 ? <li>No data</li> : coachData.map((c, idx) => (
                <li key={idx}>
                  <div className="flex justify-between">
                    <div>{c.name}</div>
                    <div className="font-semibold">{c.present}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Program Summary</h3>
            <ul className="space-y-2">
              {programData.length === 0 ? <li>No data</li> : programData.map((p, idx) => (
                <li key={idx} className="flex justify-between">
                  <div>{p.program}</div>
                  <div className="font-semibold">{p.present}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
