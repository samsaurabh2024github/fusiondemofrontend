import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance";

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const [schools, setSchools] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    schoolId: ""
  });

  const [loading, setLoading] = useState(false);

  // Fetch all schools
  const fetchSchools = async () => {
    try {
      const res = await API.get("/schools");
      setSchools(res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching schools");
    }
  };

  // Fetch all coaches
  const fetchCoaches = async () => {
    try {
      const res = await API.get("/coaches/all");
      setCoaches(res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching coaches");
    }
  };

  // Add new coach
  const addCoach = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Name, email, and password are required");
      return;
    }

    setLoading(true);

    try {
      await API.post("/coaches/add", {
        ...form,
        role: "coach"
      });

      alert("Coach added successfully");

      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        schoolId: ""
      });

      fetchCoaches();

    } catch (err) {
      console.log(err);
      alert("Error adding coach");
    }

    setLoading(false);
  };

  // Assign school to coach
  const assignSchool = async (coachId, schoolId) => {
    try {
      await API.post("/coaches/assign", {
        coachId,
        schoolId,
      });

      alert("School assigned successfully");
      fetchCoaches();

    } catch (err) {
      console.log(err);
      alert("Error assigning school");
    }
  };

  // Delete coach
  const deleteCoach = async (id) => {
    if (!confirm("Delete this coach?")) return;

    try {
      await API.delete(`/auth/delete/${id}`);
      fetchCoaches();
    } catch (err) {
      console.log(err);
      alert("Error deleting coach");
    }
  };

  useEffect(() => {
    fetchSchools();
    fetchCoaches();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Coaches</h1>

      {/* Add Coach */}
      <form onSubmit={addCoach} className="bg-white p-6 rounded shadow mb-10 w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Add New Coach</h2>

        <input
          type="text"
          placeholder="Coach Name"
          className="border p-3 w-full rounded mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded mb-3"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="text"
          placeholder="Phone (optional)"
          className="border p-3 w-full rounded mb-3"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Adding..." : "Add Coach"}
        </button>
      </form>

      {/* Coach List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Coaches</h2>

        {coaches.length === 0 ? (
          <p>No coaches found</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">School</th>
                <th className="border p-2">Assign School</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {coaches.map((c) => (
                <tr key={c._id} className="text-center">
                  <td className="border p-2">{c.name}</td>
                  <td className="border p-2">{c.email}</td>
                  <td className="border p-2">
                    {c.school ? c.school.name : "Not Assigned"}
                  </td>

                  <td className="border p-2">
                    <select
                      className="border p-2 rounded"
                      onChange={(e) => assignSchool(c._id, e.target.value)}
                    >
                      <option value="">Select School</option>
                      {schools.map((s) => (
                        <option key={s._id} value={s._id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="border p-2">
                    <button
                      onClick={() => deleteCoach(c._id)}
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
