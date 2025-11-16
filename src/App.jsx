import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/admin/Dashboard";
import Schools from "./pages/admin/Schools";
import Classes from "./pages/admin/Classes";
import Coaches from "./pages/admin/Coaches";   // ✅ FIXED
// import AssignClass from "./pages/admin/AssignClass";

import CoachDashboard from "./pages/coach/Dashboard";
import AddAttendance from "./pages/coach/AddAttendance";

import ProtectedRoute from "./utils/ProtectedRoute";
import AssignCoachClass from "./pages/admin/AssignCoache";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* ===================== ADMIN ROUTES ===================== */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/schools"
          element={
            <ProtectedRoute role="admin">
              <Schools />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/classes"
          element={
            <ProtectedRoute role="admin">
              <Classes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/coaches"
          element={
            <ProtectedRoute role="admin">
              <Coaches />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/assign-class"
          element={
            <ProtectedRoute role="admin">
              <AssignCoachClass />
            </ProtectedRoute>
          }
        />

        {/* ===================== COACH ROUTES ===================== */}
        <Route
          path="/coach/dashboard"
          element={
            <ProtectedRoute role="coach">
              <CoachDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/attendance/add/:classId"
          element={
            <ProtectedRoute role="coach">
              <AddAttendance />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
