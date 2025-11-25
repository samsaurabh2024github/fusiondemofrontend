import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminSidebar() {

     const navigate = useNavigate();

        const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Schools", path: "/admin/schools" },
    { name: "Classes", path: "/admin/classes" },
    { name: "Teachers", path: "/admin/coaches" },
    { name: "Assign Class", path: "/admin/assign-class" },
     { name: "All Attendance Record", path: "/admin/attendance" },
       { name: "All Attendance Record2", path: "/admin/attendanceAll" },
        { name: "Admin graph", path: "/admin/analiticsChart" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-6">
      <h1 className="text-2xl font-bold mb-8">FusionMain</h1>

      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded ${
                pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
          onClick={handleLogout}
          className="block w-full text-left mt-4 bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-white"
        >
          Logout
        </button>
    </div>
  );
}
