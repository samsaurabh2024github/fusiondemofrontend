import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance";

export default function Teachers() {
  const [schools, setSchools] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [form, setForm] = useState({
    schoolId: "",
    name: "",
    sports: ""
  });

  const [loading, setLoading] = useState(false);

  // Fetch all schools
  const fetchSchools = async () => {
    try {
      const res = await API.get("/schools");
      setSchools(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching schools");
    }
  };

  // Fetch teachers by school
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

  // Add teacher
  const addTeacher = async (e) => {
    e.preventDefault();

    if (!form.schoolId || !form.name || !form.sports) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      await API.post("/teacher/add", form);
      alert("Teacher added");
      setForm({ ...form, name: "", sports: "" });
      fetchTeachers();
    } catch (error) {
      console.log(error);
      alert("Error adding teacher");
    }

    setLoading(false);
  };

  // Delete teacher
  const deleteTeacher = async (id) => {
    if (!confirm("Delete this teacher?")) return;

    try {
      await API.delete(`/teacher/${id}`);
      fetchTeachers();
    } catch (error) {
      console.log(error);
      alert("Error deleting teacher");
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    fetchTeachers();
  }, [form.schoolId]);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Teachers</h1>

      {/* Add Teacher Form */}
      <form
        onSubmit={addTeacher}
        className="bg-white p-6 rounded shadow mb-10 w-full md:w-1/2"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Teacher</h2>

        {/* Select School */}
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

        {/* Teacher Name */}
        <input
          type="text"
          placeholder="Teacher Name"
          className="border p-3 w-full rounded mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Sports */}
        <input
          type="text"
          placeholder="Sports (e.g., Football, Cricket)"
          className="border p-3 w-full rounded mb-3"
          value={form.sports}
          onChange={(e) => setForm({ ...form, sports: e.target.value })}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Adding..." : "Add Teacher"}
        </button>
      </form>

      {/* Teacher List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Teachers</h2>

        {!form.schoolId ? (
          <p>Select a school to view teachers</p>
        ) : teachers.length === 0 ? (
          <p>No teachers found for this school</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Sports</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((t) => (
                <tr key={t._id} className="text-center">
                  <td className="border p-2">{t.name}</td>
                  <td className="border p-2">{t.sports}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteTeacher(t._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
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
