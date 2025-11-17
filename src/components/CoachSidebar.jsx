import { Link, useNavigate } from "react-router-dom";

export default function CoachSidebar() {
      const navigate = useNavigate();

        const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-64 bg-[#0F1A2C] text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">FusionMain</h2>

      <div className="space-y-4">
        <Link to="/coach/dashboard" className="block hover:text-blue-300">
         coach Dashboard
        </Link>


         <button
          onClick={handleLogout}
          className="block w-full text-left mt-4 bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
