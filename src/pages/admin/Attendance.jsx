import { useEffect, useState } from "react";
import API from "../../api/axiosInstance";
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminAttendance() {
  const [attendance, setAttendance] = useState([]);

  const loadAttendance = async () => {
    try {
      const res = await API.get("/attendance");
      setAttendance(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load attendance");
    }
  };

  useEffect(() => {
    loadAttendance();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">All Attendance Records</h1>

      {attendance.length === 0 ? (
        <p>No attendance found.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Coach</th>
              <th className="p-2 border">School</th>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Present</th>
              <th className="p-2 border">Absent</th>
              <th className="p-2 border">Program</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((a) => (
              <tr key={a._id} className="text-center">
                <td className="border p-2">{a.date}</td>
                <td className="border p-2">{a.coachId?.name}</td>
                <td className="border p-2">{a.schoolId?.name}</td>
                <td className="border p-2">{a.classId?.className}</td>
                <td className="border p-2">{a.attendance}</td>
                <td className="border p-2">{a.absent}</td>
                <td className="border p-2">{a.program}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
