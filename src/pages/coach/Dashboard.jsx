import { useEffect, useState } from "react";
import API from "../../api/axiosInstance";
import CoachLayout from "../../layouts/CoachLayout";

export default function CoachDashboard() {
  const [coach, setCoach] = useState(null);
  const [assignedClasses, setAssignedClasses] = useState([]);
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  const loadDashboard = async () => {
    try {
      // 1️⃣ GET COACH PROFILE (from token)
      const res = await API.get("/coaches/profile");
      const user = res.data.user;
      const coachId = user._id;

      // 2️⃣ GET FULL COACH DATA
      const all = await API.get("/coaches/all");
      const fullCoach = all.data.find((c) => c.email === user.email);

      setCoach(fullCoach);

      // 3️⃣ ASSIGNED CLASSES
      const assigned = await API.get(`/assign?coachId=${fullCoach._id}`);
      setAssignedClasses(assigned.data);

      // 4️⃣ ATTENDANCE HISTORY  
      const att = await API.get(`/attendance?teacherId=${fullCoach._id}`);
      setAttendanceHistory(att.data);

    } catch (err) {
      console.error(err);
      alert("Failed to load Coach Dashboard");
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (!coach) return <CoachLayout>Loading...</CoachLayout>;

  const schoolName =
    Array.isArray(coach.school) && coach.school.length > 0
      ? coach.school[0].name
      : "Not Assigned";

  return (
    <CoachLayout>
      <h1 className="text-3xl font-bold mb-4">Coach Dashboard</h1>

      {/* COACH CARD */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Welcome, {coach.name}</h2>
        <p>Email: {coach.email}</p>
        <p>School: {schoolName}</p>
      </div>

      {/* ASSIGNED CLASSES */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Assigned Classes</h2>

        {assignedClasses.length === 0 ? (
          <p>No classes assigned.</p>
        ) : (
          <ul className="space-y-2">
            {assignedClasses.map((cls) => (
              <li key={cls._id} className="flex justify-between border p-3 rounded">
                <span>{cls.className}</span>

                <a
                  href={`/coach/attendance/add/${cls._id}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Take Attendance
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ATTENDANCE HISTORY */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Your Attendance History</h2>

        {attendanceHistory.length === 0 ? (
          <p>No attendance history.</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Class</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Present</th>
              </tr>
            </thead>
         <tbody>
  {attendanceHistory.map((a) => (
    <tr key={a._id} className="text-center">
      <td className="border p-2">
        {a.classId?.className || a.className}
      </td>
      <td className="border p-2">{a.date}</td>
      <td className="border p-2">{a.attendance}</td>
    </tr>
  ))}
</tbody>

          </table>
        )}
      </div>
    </CoachLayout>
  );
}
