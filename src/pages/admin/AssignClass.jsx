import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance";

export default function AssignClass() {
  const [schools, setSchools] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const [form, setForm] = useState({
    schoolId: "",
    teacherId: "",
    classId: ""
  });

  // Fetch schools
  const fetchSchools = async () => {
    try {
      const res = await API.get("/schools");
      setSchools(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching schools");
    }
  };

  // Fetch teachers based on school
  const fetchTeachers = async () => {
    if (!form.schoolId) return;
    try {
      const res = await API.get(`/teacher?schoolId=${form.schoolId}`);
      setTeachers(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching teachers");
    }
  };

  // Fetch classes based on school
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

  // Fetch current assignments of selected teacher
  const fetchAssignments = async () => {
    if (!form.teacherId) return;

    try {
      const res = await API.get(`/assign?teacherId=${form.teacherId}`);
      setAssignments(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching class assignments");
    }
  };

  // Handle Assign
  const assignClassHandler = async (e) => {
    e.preventDefault();

    if (!form.schoolId || !form.teacherId || !form.classId) {
      alert("All fields are required");
      return;
    }

    try {
      await API.post("/assign/assign-class", form);
      alert("Class assigned successfully");
      fetchAssignments();
    } catch (error) {
      console.log(error);
      alert("Error assigning class");
    }
  };

  // Remove assignment
  const removeAssignment = async (id) => {
    if (!confirm("Remove this class from teacher?")) return;

    try {
      await API.delete(`/assign/${id}`);
      fetchAssignments();
    } catch (error) {
      console.log(error);
      alert("Error removing assignment");
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    fetchTeachers();
    fetchClasses();
  }, [form.schoolId]);

  useEffect(() => {
    fetchAssignments();
  }, [form.teacherId]);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Assign Teacher to Class</h1>

      {/* Assignment Form */}
      <form className="bg-white p-6 rounded shadow w-full md:w-1/2 mb-10" onSubmit={assignClassHandler}>
        <h2 className="text-xl font-semibold mb-4">Assign Class</h2>

        {/* Select School */}
        <select
          className="border p-3 w-full rounded mb-3"
          value={form.schoolId}
          onChange={(e) => setForm({ ...form, schoolId: e.target.value })}
        >
          <option value="">Select School</option>
          {schools.map((s) => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>

        {/* Select Teacher */}
        <select
          className="border p-3 w-full rounded mb-3"
          value={form.teacherId}
          onChange={(e) => setForm({ ...form, teacherId: e.target.value })}
        >
          <option value="">Select Teacher</option>
          {teachers.map((t) => (
            <option key={t._id} value={t._id}>{t.name}</option>
          ))}
        </select>

        {/* Select Class */}
        <select
          className="border p-3 w-full rounded mb-3"
          value={form.classId}
          onChange={(e) => setForm({ ...form, classId: e.target.value })}
        >
          <option value="">Select Class</option>
          {classes.map((c) => (
            <option key={c._id} value={c._id}>{c.className}</option>
          ))}
        </select>

        {/* Assign Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Assign Class
        </button>
      </form>

      {/* Assigned Class List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Assigned Classes</h2>

        {assignments.length === 0 ? (
          <p>No classes assigned to this teacher yet</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Class</th>
                <th className="border p-2">Remove</th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="border p-2">{item.className}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => removeAssignment(item._id)}
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
