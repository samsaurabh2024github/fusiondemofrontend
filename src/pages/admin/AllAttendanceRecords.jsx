// src/pages/admin/AllAttendanceRecords.jsx
import React, { useEffect, useMemo, useState } from "react";
import API from "../../api/axiosInstance";
import dayjs from "dayjs";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";   // FIXED ✔
import AdminLayout from "../../layouts/AdminLayout";

function Badge({ children }) {
  return (
    <span className="inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">
      {children}
    </span>
  );
}

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-md shadow-xl w-11/12 md:w-2/3 lg:w-1/2 overflow-auto max-h-[85vh]">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="px-3 py-1 bg-red-600 text-white rounded">
            Close
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default function AllAttendanceRecords() {
  const [records, setRecords] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);

  const [filterCoach, setFilterCoach] = useState("");
  const [filterSchool, setFilterSchool] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [filterProgram, setFilterProgram] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState({ key: "date", dir: "desc" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* -------------------------------------------------------
      Load initial data
  ------------------------------------------------------- */
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const attRes = await API.get("/attendance");
        setRecords(attRes.data || []);

        const cRes = await API.get("/coaches/all");
        setCoaches(cRes.data || []);

        const sRes = await API.get("/schools");
        setSchools(sRes.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load attendance data.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!filterSchool) return setClasses([]);
    (async () => {
      try {
        const res = await API.get(`/admin/class?schoolId=${filterSchool}`);
        setClasses(res.data || []);
      } catch (err) {
        console.error(err);
        setClasses([]);
      }
    })();
  }, [filterSchool]);

  /* -------------------------------------------------------
      Filtering, Sorting, Searching
  ------------------------------------------------------- */
  const filtered = useMemo(() => {
    let data = [...records];

    if (filterFrom) data = data.filter(r => r.date >= filterFrom);
    if (filterTo) data = data.filter(r => r.date <= filterTo);

    if (filterCoach)
      data = data.filter(r => (r.coachId?._id || r.coachId) === filterCoach);

    if (filterSchool)
      data = data.filter(r => (r.schoolId?._id || r.schoolId) === filterSchool);

    if (filterClass)
      data = data.filter(r =>
        (r.classId?._id || r.classId || r.className) === filterClass
      );

    if (filterProgram)
      data = data.filter(r => r.program === filterProgram);

    if (filterPeriod)
      data = data.filter(r => r.period === filterPeriod);

    if (search.trim()) {
      const s = search.toLowerCase();
      data = data.filter(r =>
        (r.coachId?.name || "").toLowerCase().includes(s) ||
        (r.schoolId?.name || "").toLowerCase().includes(s) ||
        (r.className || "").toLowerCase().includes(s) ||
        (r.activity || "").toLowerCase().includes(s)
      );
    }

    data.sort((a, b) => {
      let va = a[sort.key] ?? "";
      let vb = b[sort.key] ?? "";

      if (sort.key === "coach") {
        va = a.coachId?.name ?? "";
        vb = b.coachId?.name ?? "";
      }
      if (sort.key === "school") {
        va = a.schoolId?.name ?? "";
        vb = b.schoolId?.name ?? "";
      }
      if (sort.key === "class") {
        va = a.className ?? "";
        vb = b.className ?? "";
      }

      const result = String(va).localeCompare(String(vb));
      return sort.dir === "asc" ? result : -result;
    });

    return data;
  }, [
    records, filterCoach, filterSchool, filterClass,
    filterProgram, filterPeriod, filterFrom, filterTo,
    search, sort
  ]);

  /* pagination */
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  /* -------------------------------------------------------
      CSV Export
  ------------------------------------------------------- */
  const exportCSV = () => {
    if (!filtered.length) return alert("No data to export.");

    const header = [
      "Date", "Coach", "School", "Class", "Present",
      "Absent", "Strength", "Program", "Period",
      "Section", "Activity", "Reason"
    ];

    const rows = filtered.map(r => [
      r.date ?? "",
      r.coachId?.name ?? "",
      r.schoolId?.name ?? "",
      r.className || r.classId?.className || "",   // FIXED ✔
      r.attendance ?? "",
      r.absent ?? "",
      r.strength ?? "",
      r.program ?? "",
      r.period ?? "",
      r.section ?? "",
      (r.activity || "").replace(/"/g, '""'),
      (r.reason || "").replace(/"/g, '""')
    ]);

    const csv = [header, ...rows].map(e => e.join(",")).join("\n");
    saveAs(new Blob([csv], { type: "text/csv" }), "attendance.csv");
  };

  /* -------------------------------------------------------
      Excel Export
  ------------------------------------------------------- */
  const exportExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filtered);
    XLSX.utils.book_append_sheet(wb, ws, "Attendance");
    XLSX.writeFile(wb, "attendance.xlsx");
  };

  /* -------------------------------------------------------
      PDF Export (FIXED)
  ------------------------------------------------------- */
  const exportPDF = () => {
    const doc = new jsPDF("landscape");

    const table = filtered.map(r => [
      r.date,
      r.coachId?.name,
      r.schoolId?.name,
      r.className || r.classId?.className || "—",    // FIXED ✔
      r.attendance,
      r.absent,
      r.program
    ]);

    doc.text("Attendance Report", 14, 15);

    autoTable(doc, {     // FIXED ✔
      startY: 20,
      head: [["Date", "Coach", "School", "Class", "Present", "Absent", "Program"]],
      body: table
    });

    doc.save("attendance.pdf");
  };

  const toggleSort = key =>
    setSort(prev => prev.key === key
      ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
      : { key, dir: "asc" });

  const openDetails = r => {
    setSelectedRecord(r);
    setModalOpen(true);
  };

  /* -------------------------------------------------------
      UI Rendering
  ------------------------------------------------------- */
  return (
    <AdminLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Attendance Records</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <FilterSelect
            label="Coach"
            value={filterCoach}
            onChange={setFilterCoach}
            options={coaches.map(c => ({ id: c._id, name: c.name }))}
          />

          <FilterSelect
            label="School"
            value={filterSchool}
            onChange={setFilterSchool}
            options={schools.map(s => ({ id: s._id, name: s.name }))}
          />

          <FilterSelect
            label="Class"
            value={filterClass}
            onChange={setFilterClass}
            options={classes.map(c => ({ id: c._id, name: c.className }))}
          />

          <FilterSelect
            label="Program"
            value={filterProgram}
            onChange={setFilterProgram}
            options={["FSPE", "SBPE-L1", "SBPE-L2", "PAPE-L1", "PAPE-L2"].map(p => ({ id: p, name: p }))}
          />

          <FilterSelect
            label="Period"
            value={filterPeriod}
            onChange={setFilterPeriod}
            options={["1", "2", "3", "4", "5", "1-5", "ALL", "NA"].map(p => ({ id: p, name: p }))}
          />

          <div>
            <label className="text-sm">Date Range</label>
            <div className="flex gap-2">
              <input type="date" className="border p-2 rounded w-1/2" value={filterFrom} onChange={e => setFilterFrom(e.target.value)} />
              <input type="date" className="border p-2 rounded w-1/2" value={filterTo} onChange={e => setFilterTo(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Search + Export */}
        <div className="flex justify-between mt-4 flex-wrap gap-3">
          <div className="flex gap-2 items-center">
            <input
              placeholder="Search..."
              className="border p-2 rounded w-72"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button
              className="bg-gray-200 px-3 py-1 rounded"
              onClick={() => {
                setFilterCoach("");
                setFilterSchool("");
                setFilterClass("");
                setFilterProgram("");
                setFilterPeriod("");
                setFilterFrom("");
                setFilterTo("");
                setSearch("");
              }}>
              Reset
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <Badge>{filtered.length} rows</Badge>
            <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={exportCSV}>CSV</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={exportExcel}>Excel</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={exportPDF}>PDF</button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <Th title="Date" sortKey="date" sort={sort} toggleSort={toggleSort} />
              <Th title="Coach" sortKey="coach" sort={sort} toggleSort={toggleSort} />
              <Th title="School" sortKey="school" sort={sort} toggleSort={toggleSort} />
              <Th title="Class" sortKey="class" sort={sort} toggleSort={toggleSort} />
              <Th title="Present" sortKey="attendance" sort={sort} toggleSort={toggleSort} />
              <Th title="Absent" sortKey="absent" sort={sort} toggleSort={toggleSort} />
              <Th title="Program" sortKey="program" sort={sort} toggleSort={toggleSort} />
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.length === 0 && (
              <tr><td className="p-4 text-center" colSpan="8">No records found</td></tr>
            )}

            {paginated.map(r => (
              <tr key={r._id} className="border-t hover:bg-gray-50">
                <td className="p-2 border">{r.date}</td>
                <td className="p-2 border">{r.coachId?.name}</td>
                <td className="p-2 border">{r.schoolId?.name}</td>

                {/* FIXED class name column */}
                <td className="p-2 border">
                  {r.className || r.classId?.className || "—"}
                </td>

                <td className="p-2 border text-center">{r.attendance}</td>
                <td className="p-2 border text-center">{r.absent}</td>
                <td className="p-2 border">{r.program}</td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => openDetails(r)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span>Page</span>
          <select
            value={page}
            onChange={e => setPage(Number(e.target.value))}
            className="border p-1 rounded"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <span>of {totalPages}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Page size</span>
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="border p-1 rounded"
          >
            {[5, 10, 20, 50, 100].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Attendance Details">
        {selectedRecord ? (
          <div className="space-y-2">
            <Row label="Date" value={selectedRecord.date} />
            <Row label="Coach" value={selectedRecord.coachId?.name} />
            <Row label="School" value={selectedRecord.schoolId?.name} />
            <Row label="Class" value={selectedRecord.className || selectedRecord.classId?.className} />
            <Row label="Period" value={selectedRecord.period} />
            <Row label="Program" value={selectedRecord.program} />
            <Row label="Section" value={selectedRecord.section} />
            <Row label="Strength" value={selectedRecord.strength} />
            <Row label="Present" value={selectedRecord.attendance} />
            <Row label="Absent" value={selectedRecord.absent} />
            <Row label="Activity" value={selectedRecord.activity} />
            <Row label="Reason" value={selectedRecord.reason} />
            <Row label="Created At" value={dayjs(selectedRecord.createdAt).format("YYYY-MM-DD HH:mm")} />
          </div>
        ) : (
          <p>No record selected.</p>
        )}
      </Modal>

      {loading && <div className="fixed bottom-4 right-4 bg-white px-4 py-2 rounded shadow">Loading...</div>}
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
    </AdminLayout>
  );
}

/* -------------------------------------------------------
  Reusable Components
------------------------------------------------------- */
function Row({ label, value }) {
  return (
    <div className="flex gap-3">
      <div className="w-40 font-semibold">{label}</div>
      <div className="flex-1">{value || "—"}</div>
    </div>
  );
}

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border p-2 rounded mt-1"
      >
        <option value="">All</option>
        {options.map(o => (
          <option key={o.id} value={o.id}>{o.name}</option>
        ))}
      </select>
    </div>
  );
}

function Th({ title, sortKey, sort, toggleSort }) {
  return (
    <th
      className="p-2 border cursor-pointer"
      onClick={() => toggleSort(sortKey)}
    >
      <div className="flex items-center gap-1">
        {title}
        {sort.key === sortKey && (
          sort.dir === "asc" ? "▲" : "▼"
        )}
      </div>
    </th>
  );
}
