import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import Schools from "./pages/admin/Schools";
import Classes from "./pages/admin/Classes";
import Teachers from "./pages/admin/Teachers";
import AssignClass from "./pages/admin/AssignClass";

import ProtectedRoute from "./utils/ProtectedRoute";
import CoachDashboard from "./pages/coach/Dashboard";
import AddAttendance from "./pages/coach/AddAttendance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
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
          path="/admin/teachers"
          element={
            <ProtectedRoute role="admin">
              <Teachers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/assign-class"
          element={
            <ProtectedRoute role="admin">
              <AssignClass />
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
  path="/admin/teachers"
  element={
    <ProtectedRoute role="admin">
      <Teachers />
    </ProtectedRoute>
  }
/>


<Route
  path="/admin/assign-class"
  element={
    <ProtectedRoute role="admin">
      <AssignClass />
    </ProtectedRoute>
  }
/>


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
