// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../../api/axiosInstance";

// export default function AddAttendance() {
//   const { classId } = useParams();
//   const navigate = useNavigate();

//   const [date, setDate] = useState("");
//   const [totalPresent, setTotalPresent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/attendance/add", {
//         classId,
//         date,
//         totalPresent,
//       });

//       alert("Attendance submitted!");
//       navigate("/coach/dashboard");

//     } catch (error) {
//       console.log(error);
//       alert("Failed to submit attendance");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-10">
//       <h1 className="text-2xl font-bold mb-4">Take Attendance</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Date */}
//         <div>
//           <label className="block mb-1 font-medium">Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>

//         {/* Total Present */}
//         <div>
//           <label className="block mb-1 font-medium">Total Present</label>
//           <input
//             type="number"
//             value={totalPresent}
//             onChange={(e) => setTotalPresent(e.target.value)}
//             className="w-full border p-2 rounded"
//             placeholder="Enter number"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//         >
//           Submit Attendance
//         </button>

//       </form>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoachLayout from "../../layouts/CoachLayout"; // reuse layout, or replace with CoachLayout if you have it
import API from "../../api/axiosInstance";
import dayjs from "dayjs"; // optional, but handy for date formatting (if you don't have it, date handling below will still work)

export default function AddAttendance() {
  const { classId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [coachId, setCoachId] = useState(null);
  const [coach, setCoach] = useState(null);
  const [school, setSchool] = useState(null);
  const [classInfo, setClassInfo] = useState(null);

  const [form, setForm] = useState({
    date: dayjs().format("YYYY-MM-DD"), // editable by user
    period: "", // 1,2,3,4,5,1-5,ALL,NA
    program: "FSPE",
    section: "A",
    strength: "",
    present: "",
    activity: "",
    reason: "",
    className: "", // optional friendly name
  });

  const [notConducted, setNotConducted] = useState(false);

  // lists
  const periods = ["1","2","3","4","5","1-5","ALL","NA"];
  const programs = ["FSPE","SBPE-L1","SBPE-L2","PAPE-L1","PAPE-L2"];
  const sections = ["A","B","C","D","E","F","ALL","English Medium","Gujarati Medium","CBSE"];

  // -----------------------------------------------------------------------
  // helper to fetch coach (profile -> full coach doc)
  // -----------------------------------------------------------------------
 const fetchCoachAndSchool = async () => {
  try {
    const prof = await API.get("/coaches/profile");
    const email = prof?.data?.user?.email;

    const all = await API.get("/coaches/all");
    const found = all.data.find((c) => c.email === email);

    if (found) {
      setCoach(found);
      setCoachId(found._id);

      if (Array.isArray(found.school) && found.school.length > 0) {
        setSchool(found.school[0]);
      } else {
        setSchool(found.school || null);
      }
    }

  } catch (e) {
    console.error("Failed:", e);
    alert("Unable to fetch coach info");
  }
};


  // -----------------------------------------------------------------------
  // fetch class info using classId and school (we rely on /admin/class?schoolId=... which you have)
  // -----------------------------------------------------------------------
  const fetchClassInfo = async (schoolId) => {
    try {
      if (!classId) return;
      // fetch classes of school and find class by id
      if (schoolId) {
        const res = await API.get(`/admin/class?schoolId=${schoolId}`);
        const cls = res.data.find((c) => String(c._id) === String(classId));
        if (cls) {
          setClassInfo(cls);
          setForm((f) => ({ ...f, className: cls.className }));
        } else {
          // fallback: we only have classId; set className to id
          setClassInfo(null);
          setForm((f) => ({ ...f, className: classId }));
        }
      } else {
        // no school known yet — still allow using classId as name
        setForm((f) => ({ ...f, className: classId }));
      }
    } catch (e) {
      console.error("Failed to fetch class info:", e);
      setForm((f) => ({ ...f, className: classId }));
    }
  };

  useEffect(() => {
    // step 1: get coach and school
    fetchCoachAndSchool();
  }, []);

  useEffect(() => {
    if (coach) {
      const schoolId = (Array.isArray(coach.school) ? coach.school[0]?._id : coach.school?._id || coach.school) || null;
      fetchClassInfo(schoolId);
    }
  }, [coach]);

  // -----------------------------------------------------------------------
  // auto-calc absent whenever strength or present changes (when notConducted is false)
  // -----------------------------------------------------------------------
  const computeAbsent = () => {
    const str = Number(form.strength || 0);
    const pres = Number(form.present || 0);
    if (isNaN(str) || isNaN(pres)) return 0;
    const a = Math.max(0, str - pres);
    return a;
  };

  // -----------------------------------------------------------------------
  // submit
  // -----------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validations
    if (!form.date) return alert("Please select date");
    if (!form.period) return alert("Please select period");
    if (!form.program) return alert("Please select program");
    if (!form.section) return alert("Please select section");

    if (!coachId) return alert("Coach not found, please login again.");
    // detect school id
    const schoolId = (school && (school._id || school)) ? (school._id || school) : null;
    if (!schoolId) return alert("School not assigned for this coach.");

    // if class not conducted OR checkbox set -> require reason
    if (notConducted) {
      if (!form.reason || form.reason.trim().length < 3) {
        return alert("Please provide reason for not conducting the class.");
      }
    } else {
      // normal flow: require numeric strength and present
      if (!form.strength && form.strength !== 0) return alert("Please enter class strength");
      if (!form.present && form.present !== 0) return alert("Please enter present count");
      const str = Number(form.strength);
      const pres = Number(form.present);
      if (pres > str) return alert("Present cannot be more than class strength");
    }

  const body = {
  date: form.date,
  schoolId: schoolId,
  classId: classId,
  period: form.period,
  program: form.program,
  className: form.className || (classInfo ? classInfo.className : ""),
  section: form.section,
  attendance: notConducted ? 0 : Number(form.present || 0),
  strength: notConducted ? 0 : Number(form.strength || 0),
  absent: notConducted ? 0 : computeAbsent(),
  activity: form.activity || "",
  reason: form.reason || ""
};


    try {
      setLoading(true);
      const res = await API.post("/attendance/add", body);
      setLoading(false);
      alert("Attendance saved successfully.");
      // redirect to coach dashboard (Q4 choice)
      navigate("/coach/dashboard");
    } catch (error) {
      setLoading(false);
      console.error("Submit attendance error:", error);
      const msg = error?.response?.data?.message || "Error saving attendance.";
      alert(msg);
    }
  };

  // -----------------------------------------------------------------------
  // small convenience: if notConducted toggled, clear numbers
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (notConducted) {
      setForm((f) => ({ ...f, strength: "", present: "" }));
    }
  }, [notConducted]);

  // -----------------------------------------------------------------------
  // UI
  // -----------------------------------------------------------------------
  return (
    <CoachLayout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Take Attendance</h1>

        {/* summary */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <p><strong>Coach:</strong> {coach ? coach.name : "Loading..."}</p>
          <p><strong>School:</strong> {school ? (school.name || school) : "Not assigned"}</p>
          <p><strong>Class:</strong> {form.className || classId}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          {/* date */}
          <label className="block mb-2">
            <span className="text-sm font-medium">Date</span>
            <input
              type="date"
              className="border rounded w-full p-2 mt-1"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </label>

          {/* period & program */}
          <div className="grid grid-cols-2 gap-4">
            <label className="block mb-2">
              <span className="text-sm font-medium">Period</span>
              <select
                className="border rounded w-full p-2 mt-1"
                value={form.period}
                onChange={(e) => setForm({ ...form, period: e.target.value })}
              >
                <option value="">Select period</option>
                {periods.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>

            <label className="block mb-2">
              <span className="text-sm font-medium">Program</span>
              <select
                className="border rounded w-full p-2 mt-1"
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
              >
                {programs.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
          </div>

          {/* section */}
          <label className="block mb-2 mt-3">
            <span className="text-sm font-medium">Section</span>
            <select
              className="border rounded w-full p-2 mt-1"
              value={form.section}
              onChange={(e) => setForm({ ...form, section: e.target.value })}
            >
              {sections.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>

          {/* class conducted toggle */}
          <div className="flex items-center gap-3 my-4">
            <input
              id="notConducted"
              type="checkbox"
              checked={notConducted}
              onChange={(e) => setNotConducted(e.target.checked)}
            />
            <label htmlFor="notConducted">Class Not Conducted</label>
          </div>

          {/* strength & present (disabled when not conducted) */}
          <div className="grid grid-cols-2 gap-4">
            <label className="block mb-2">
              <span className="text-sm font-medium">Class Strength</span>
              <input
                type="number"
                className="border rounded w-full p-2 mt-1"
                value={form.strength}
                onChange={(e) => setForm({ ...form, strength: e.target.value })}
                disabled={notConducted}
                min={0}
              />
            </label>

            <label className="block mb-2">
              <span className="text-sm font-medium">Present</span>
              <input
                type="number"
                className="border rounded w-full p-2 mt-1"
                value={form.present}
                onChange={(e) => setForm({ ...form, present: e.target.value })}
                disabled={notConducted}
                min={0}
              />
            </label>
          </div>

          {/* absent (calculated) */}
          <div className="mb-3 mt-2">
            <span className="text-sm font-medium block">Absent</span>
            <div className="p-2 bg-gray-50 border rounded mt-1">
              {notConducted ? 0 : computeAbsent()}
            </div>
          </div>

          {/* activity */}
          <label className="block mb-2">
            <span className="text-sm font-medium">Activity</span>
            <input
              type="text"
              className="border rounded w-full p-2 mt-1"
              value={form.activity}
              onChange={(e) => setForm({ ...form, activity: e.target.value })}
              placeholder="E.g., Warm-up, Dribbling, Relay..."
            />
          </label>

          {/* reason (only when not conducted OR when user selects special) */}
          {notConducted && (
            <label className="block mb-2">
              <span className="text-sm font-medium">Reason (required)</span>
              <textarea
                className="border rounded w-full p-2 mt-1"
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                rows={3}
                placeholder="Why class was not conducted..."
                required={notConducted}
              />
            </label>
          )}

          {/* submit */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {loading ? "Saving..." : "Save Attendance"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/coach/dashboard")}
              className="ml-3 bg-gray-200 px-3 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </CoachLayout>
  );
}
