import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance.jsx";

export default function Schools() {
  const [schools, setSchools] = useState([]);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  // Fetch all schools
  const fetchSchools = async () => {
    try {
      const res = await API.get("/schools");
      setSchools(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch schools");
    }
  };

  // Add school
  const addSchool = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/schools", form);
      alert("School added successfully");
      setForm({ name: "", address: "", phone: "" });
      fetchSchools();
    } catch (error) {
      console.log(error);
      alert("Failed to add school");
    }

    setLoading(false);
  };

  // Delete school
  const deleteSchool = async (id) => {
    if (!confirm("Are you sure you want to delete this school?")) return;

    try {
      await API.delete(`/schools/${id}`);
      alert("School deleted");
      fetchSchools();
    } catch (error) {
      console.log(error);
      alert("Failed to delete school");
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Schools</h1>
      </div>

      {/* Add School Form */}
      <form
        onSubmit={addSchool}
        className="bg-white p-6 rounded shadow mb-10 w-full md:w-1/2"
      >
        <h2 className="text-xl font-semibold mb-4">Add New School</h2>

        <input
          type="text"
          placeholder="School Name"
          className="border p-3 w-full rounded mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Address"
          className="border p-3 w-full rounded mb-3"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border p-3 w-full rounded mb-3"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Adding..." : "Add School"}
        </button>
      </form>

      {/* School List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Schools</h2>

        {schools.length === 0 ? (
          <p>No schools found</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {schools.map((s) => (
                <tr key={s._id} className="text-center">
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.address}</td>
                  <td className="border p-2">{s.phone}</td>

                  <td className="border p-2">
                    <button
                      onClick={() => deleteSchool(s._id)}
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
