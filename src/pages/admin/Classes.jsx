import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import API from "../../api/axiosInstance";

export default function Classes() {
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);

  const [selectedSchool, setSelectedSchool] = useState("");
  const [className, setClassName] = useState("");

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

  // Fetch classes for selected school
  const fetchClasses = async () => {
    if (!selectedSchool) return;
    try {
      const res = await API.get(`/admin/class?schoolId=${selectedSchool}`);
      setClasses(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching classes");
    }
  };

  // Add class
  const addClass = async (e) => {
    e.preventDefault();
    if (!selectedSchool || !className) {
      alert("Select school and enter class name");
      return;
    }

    setLoading(true);

    try {
      await API.post("/admin/class/add", {
        schoolId: selectedSchool,
        className,
      });

      alert("Class added");
      setClassName("");
      fetchClasses();
    } catch (error) {
      console.log(error);
      alert("Error adding class");
    }

    setLoading(false);
  };

  // Delete class
  const deleteClass = async (id) => {
    if (!confirm("Delete this class?")) return;

    try {
      await API.delete(`/admin/class/${id}`);
      fetchClasses();
    } catch (error) {
      console.log(error);
      alert("Error deleting class");
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    fetchClasses();
  }, [selectedSchool]);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Classes</h1>

      {/* Add Class Form */}
      <form
        onSubmit={addClass}
        className="bg-white p-6 rounded shadow mb-10 w-full md:w-1/2"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Class</h2>

        <select
          className="border p-3 w-full rounded mb-3"
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
        >
          <option value="">Select School</option>
          {schools.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Class Name (e.g., 1A, 2B, Nursery, LKG)"
          className="border p-3 w-full rounded mb-3"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Adding..." : "Add Class"}
        </button>
      </form>

      {/* Class List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Classes</h2>

        {!selectedSchool ? (
          <p>Select a school to view its classes</p>
        ) : classes.length === 0 ? (
          <p>No classes found for this school</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Class Name</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="border p-2">{item.className}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteClass(item._id)}
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
