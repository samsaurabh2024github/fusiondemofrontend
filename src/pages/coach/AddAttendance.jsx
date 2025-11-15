import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance";

export default function AddAttendance() {
  const { classId } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [totalPresent, setTotalPresent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/attendance/add", {
        classId,
        date,
        totalPresent,
      });

      alert("Attendance submitted!");
      navigate("/coach/dashboard");

    } catch (error) {
      console.log(error);
      alert("Failed to submit attendance");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Take Attendance</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Total Present */}
        <div>
          <label className="block mb-1 font-medium">Total Present</label>
          <input
            type="number"
            value={totalPresent}
            onChange={(e) => setTotalPresent(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter number"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Submit Attendance
        </button>

      </form>
    </div>
  );
}
