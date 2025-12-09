import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance";

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Fetch schools
  const fetchSchools = async () => {
    try {
      const res = await API.get("/schools");
      setSchools(res.data);
    } catch (err) {
      alert("Failed to load schools");
    }
  };

  // Fetch coaches
  const fetchCoaches = async () => {
    try {
      const res = await API.get("/coaches/all");
      setCoaches(res.data);
    } catch {
      alert("Failed to load coaches");
    }
  };

  useEffect(() => {
    fetchSchools();
    fetchCoaches();
  }, []);

  // Add coach
  const addCoach = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return alert("Name, email & password required");
    }

    setLoading(true);

    try {
      await API.post("/coaches/add", { ...form, role: "coach" });
      alert("Coach added");
      setForm({ name: "", email: "", password: "", phone: "" });
      fetchCoaches();
    } catch {
      alert("Failed to add coach");
    }

    setLoading(false);
  };

  const assignSchool = async (coachId, schoolId) => {
    if (!schoolId) return;
    try {
      await API.post("/coaches/assign", { coachId, schoolId });
      fetchCoaches();
    } catch {
      alert("Assignment failed");
    }
  };

  const deleteCoach = async (id) => {
    if (!window.confirm("Delete coach?")) return;
    try {
      await API.delete(`/auth/delete/${id}`);
      fetchCoaches();
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl lg:text-3xl mt-12 sm:mt-10 lg:mt-0 font-bold mb-6">
        Manage Coaches
      </h1>

      {/* ADD COACH */}
      <form
        onSubmit={addCoach}
        className="bg-white p-4 rounded shadow mb-10 w-full lg:max-w-xl"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Coach</h2>

        {["name", "email", "password", "phone"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            placeholder={field.toUpperCase()}
            className="border p-3 w-full rounded mb-3"
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
          />
        ))}

        <button
          className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Coach"}
        </button>
      </form>

      {/* ================= MOBILE + TABLET VIEW ================= */}
      <div className="grid gap-4 lg:hidden">
        {coaches.map((c) => (
          <div
            key={c._id}
            className="bg-white p-4 rounded shadow space-y-2"
          >
            <p><b>Name:</b> {c.name}</p>
            <p><b>Email:</b> {c.email}</p>
            <p>
              <b>School:</b>{" "}
              {c.school ? c.school.name : "Not Assigned"}
            </p>

            <select
              onChange={(e) =>
                assignSchool(c._id, e.target.value)
              }
              className="border p-2 rounded w-full"
              defaultValue=""
            >
              <option value="">Assign School</option>
              {schools.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => deleteCoach(c._id)}
              className="bg-red-600 text-white w-full py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden lg:block bg-white p-6 rounded shadow">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">School</th>
              <th className="border p-2">Assign</th>
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
                    onChange={(e) =>
                      assignSchool(c._id, e.target.value)
                    }
                  >
                    <option value="">Select</option>
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
      </div>
    </AdminLayout>
  );
}
