import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";

import Login from "./pages/Login";

// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import Schools from "./pages/admin/Schools";
import Classes from "./pages/admin/Classes";
import Coaches from "./pages/admin/Coaches";
import AssignCoachClass from "./pages/admin/AssignCoache";
import AdminAttendance from "./pages/admin/Attendance";
import AllAttendanceRecords from "./pages/admin/AllAttendanceRecords";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

// Coach pages
import CoachDashboard from "./pages/coach/Dashboard";
import AddAttendance from "./pages/coach/AddAttendance";

// Public pages
import Home from "./publicFolder/Home";
import Navbar from "./publicFolder/Navbar";
import Contact from "./publicFolder/Contact";
import About from "./publicFolder/About";
import Gallery from "./publicFolder/Gallery";
import Blog from "./publicFolder/Blog";
import Footer from "./publicFolder/Footer";

import ProtectedRoute from "./utils/ProtectedRoute";
import BlogDetail from "./publicFolder/BlogDetail";
import FusionProgramsPage from "./publicFolder/FusionProgramsPage";

// Layout Component
function Layout({ children }) {
  const location = useLocation();
  // Hide Navbar/Footer for admin & coach pages
  const hideNavFooter =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/coach");

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <div className={hideNavFooter ? "" : "mt-16"}>{children}</div>
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* FLOATING BUTTONS */}
        <div>
          {/* WhatsApp */}
          <a
            href="https://wa.me/916205656821"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl z-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-4 h-4"
            />
          </a>

          {/* Enquiry Button */}
          <a
            href="/contact"
            className="fixed top-2/3 right-4 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 shadow-xl z-50 font-semibold rounded-l-lg transform -translate-y-1/2 origin-right rotate-90"
          >
            Enquire Now
          </a>

          {/* Back to Top */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full shadow-xl z-50 flex items-center justify-center"
          >
            <FiArrowUp size={24} />
          </button>
        </div>

        {/* Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<FusionProgramsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

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
          <Route
            path="/admin/attendance"
            element={
              <ProtectedRoute role="admin">
                <AdminAttendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/attendanceAll"
            element={
              <ProtectedRoute role="admin">
                <AllAttendanceRecords />
              </ProtectedRoute>
            }
          />
        <Route path="/admin/analiticsChart" element={
  <ProtectedRoute role="admin">
    <AdminAnalytics />
  </ProtectedRoute>
} />

          {/* Coach Routes */}
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
