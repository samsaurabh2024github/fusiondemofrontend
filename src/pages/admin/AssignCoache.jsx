import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance";

export default function AssignCoachClass() {
  const [schools, setSchools] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [classes, setClasses] = useState([]);
  const [assigned, setAssigned] = useState([]);

  const [form, setForm] = useState({
    schoolId: "",
    coachId: "",
    classId: ""
  });

  // ===============================
  // FETCH SCHOOLS
  // ===============================
  const fetchSchools = async () => {
    try {
      const res = await API.get("/schools");
      setSchools(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching schools");
    }
  };

  // ===============================
  // FETCH COACHES BY SCHOOL
  // (IMPORTANT FILTER FIXED)
  // ===============================
const fetchCoaches = async () => {
  if (!form.schoolId) return;

  try {
    const res = await API.get("/coaches/all");

    // SUPPORT BOTH POSSIBLE STRUCTURES:
    // school: ObjectId  OR  school: [ { _id, name } ]
    const filtered = res.data.filter((c) => {
      if (Array.isArray(c.school)) {
        return c.school.some((s) => String(s._id) === String(form.schoolId));
      }

      return String(c.school?._id || c.school) === String(form.schoolId);
    });

    setCoaches(filtered);

  } catch (error) {
    console.log(error);
    alert("Error fetching coaches");
  }
};


  // ===============================
  // FETCH CLASSES BY SCHOOL
  // ===============================
  const fetchClasses = async () => {
    if (!form.schoolId) return;

    try {
      const res = await API.get(`/admin/class?schoolId=${form.schoolId}`);
      setClasses(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching classes");
    }
  };

  // ===============================
  // FETCH ASSIGNED CLASSES
  // ===============================
  const fetchAssigned = async () => {
    if (!form.coachId) return;

    try {
      const res = await API.get(`/assign?coachId=${form.coachId}`);
      setAssigned(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching assigned classes");
    }
  };

  // ===============================
  // ASSIGN CLASS TO COACH
  // ===============================
  const assignClass = async (e) => {
    e.preventDefault();

    if (!form.schoolId || !form.coachId || !form.classId) {
      alert("All fields are required");
      return;
    }

    try {
      await API.post("/assign/coach-class", form);
      alert("Class assigned successfully!");
      fetchAssigned();
    } catch (error) {
      console.log(error);
      alert("Error assigning class");
    }
  };

  // ===============================
  // REMOVE CLASS ASSIGNMENT
  // ===============================
  const removeAssignment = async (classId) => {
    if (!confirm("Remove this class?")) return;

    try {
      await API.delete(`/assign/${classId}`);
      fetchAssigned();
    } catch (error) {
      console.log(error);
      alert("Error removing class");
    }
  };

  // ===============================
  // USE EFFECTS
  // ===============================
  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    fetchCoaches();
    fetchClasses();
  }, [form.schoolId]);

  useEffect(() => {
    fetchAssigned();
  }, [form.coachId]);

  // ===============================
  // UI
  // ===============================
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Assign Class to Coach</h1>

      {/* FORM */}
      <form
        onSubmit={assignClass}
        className="bg-white p-6 rounded shadow w-full md:w-1/2 mb-10"
      >
        <h2 className="text-xl font-semibold mb-4">Assign Class</h2>

        {/* SCHOOL DROPDOWN */}
        <select
          className="border p-3 w-full rounded mb-3"
          value={form.schoolId}
          onChange={(e) => setForm({ ...form, schoolId: e.target.value })}
        >
          <option value="">Select School</option>
          {schools.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* COACH DROPDOWN */}
        <select
          className="border p-3 w-full rounded mb-3"
          value={form.coachId}
          onChange={(e) => setForm({ ...form, coachId: e.target.value })}
        >
          <option value="">Select Coach</option>
          {coaches.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name} ({c.email})
            </option>
          ))}
        </select>

        {/* CLASS DROPDOWN */}
        <select
          className="border p-3 w-full rounded mb-3"
          value={form.classId}
          onChange={(e) => setForm({ ...form, classId: e.target.value })}
        >
          <option value="">Select Class</option>
          {classes.map((cl) => (
            <option key={cl._id} value={cl._id}>
              {cl.className}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Assign Class
        </button>
      </form>

      {/* ASSIGNED CLASSES */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Assigned Classes</h2>

        {assigned.length === 0 ? (
          <p>No classes assigned to this coach</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Class Name</th>
                <th className="border p-2">Remove</th>
              </tr>
            </thead>

            <tbody>
              {assigned.map((cl) => (
                <tr key={cl._id} className="text-center">
                  <td className="border p-2">{cl.className}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => removeAssignment(cl._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
}
