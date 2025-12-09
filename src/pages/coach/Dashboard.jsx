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
     <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
  Coach Dashboard
</h1>


      {/* COACH CARD */}
     <div className="bg-white p-4 rounded shadow mb-6">
  <h2 className="text-lg lg:text-xl font-semibold">
    Welcome, {coach.name}
  </h2>

  <div className="text-sm lg:text-base space-y-1 mt-2">
    <p>Email: {coach.email}</p>
    <p>School: {schoolName}</p>
  </div>
</div>


      {/* ASSIGNED CLASSES */}
     <div className="bg-white p-4 lg:p-6 rounded shadow mb-6">
  <h2 className="text-lg lg:text-xl font-semibold mb-3">
    Assigned Classes
  </h2>

  {assignedClasses.length === 0 ? (
    <p>No classes assigned.</p>
  ) : (
    <ul className="space-y-3">
      {assignedClasses.map((cls) => (
        <li
          key={cls._id}
          className="flex flex-col lg:flex-row justify-between gap-2 border p-3 rounded"
        >
          <span className="font-medium">{cls.className}</span>

          <a
            href={`/coach/attendance/add/${cls._id}`}
            className="bg-blue-600 text-white px-3 py-2 text-sm rounded text-center"
          >
            Take Attendance
          </a>
        </li>
      ))}
    </ul>
  )}
</div>


      {/* ATTENDANCE HISTORY */}
      <div className="bg-white p-4 lg:p-6 rounded shadow">
  <h2 className="text-lg lg:text-xl font-semibold mb-3">
    Your Attendance History
  </h2>

  {attendanceHistory.length === 0 ? (
    <p>No attendance history.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Class</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Present</th>
            <th className="border p-2">School</th>
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
              <td className="border p-2">
                {a.schoolId?.name || a.schoolName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

    </CoachLayout>
  );
}
