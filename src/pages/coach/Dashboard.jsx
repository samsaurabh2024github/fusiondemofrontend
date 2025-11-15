import { useEffect, useState } from "react";
import API from "../../api/axiosInstance";

export default function CoachDashboard() {
  const [coach, setCoach] = useState(null);
  const [assignedClasses, setAssignedClasses] = useState([]);
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  // 1. Fetch coach profile (from token)
  const fetchCoachProfile = async () => {
    try {
      const res = await API.get("/coaches/profile");
      setCoach(res.data.user);
   
      // After loading coach, load assigned classes
     fetchAssignedClasses(res.data.user._id);
fetchAttendanceHistory(res.data.user._id);


    } catch (error) {
      console.log(error);
      alert("Failed to load coach profile");
    }
  };

  // 2. Fetch assigned classes
  const fetchAssignedClasses = async (teacherId) => {
    try {
      const res = await API.get(`/assign?teacherId=${teacherId}`);
      setAssignedClasses(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching assigned classes");
    }
  };

  // 3. Fetch attendance history
  const fetchAttendanceHistory = async (teacherId) => {
    try {
      const res = await API.get(`/attendance?teacherId=${teacherId}`);
      setAttendanceHistory(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching attendance");
    }
  };

  useEffect(() => {
    fetchCoachProfile();
  }, []);

  if (!coach) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Coach Dashboard</h1>

      {/* Profile */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">Welcome, {coach.name}</h2>
        <p className="text-gray-600">Role: Coach</p>
        <p className="text-gray-600">Email: {coach.email}</p>
      </div>

      {/* Assigned Classes */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Assigned Classes</h2>

        {assignedClasses.length === 0 ? (
          <p>No classes assigned.</p>
        ) : (
          <ul className="space-y-2">
            {assignedClasses.map((cls) => (
              <li
                key={cls._id}
                className="p-3 border rounded flex justify-between items-center"
              >
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

      {/* Attendance History */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Your Attendance History</h2>

        {attendanceHistory.length === 0 ? (
          <p>No attendance records yet.</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Class</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Present</th>
              </tr>
            </thead>
            <tbody>
              {attendanceHistory.map((entry) => (
                <tr key={entry._id} className="text-center">
                  <td className="border p-2">{entry.classId}</td>
                  <td className="border p-2">{entry.date}</td>
                  <td className="border p-2">{entry.totalPresent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
