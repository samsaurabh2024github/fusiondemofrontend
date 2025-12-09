// import { Link, useNavigate } from "react-router-dom";

// export default function CoachSidebar() {
//       const navigate = useNavigate();

//         const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="w-64 bg-[#0F1A2C] text-white p-6 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">FusionMain</h2>

//       <div className="space-y-4">
//         <Link to="/coach/dashboard" className="block hover:text-blue-300">
//          coach Dashboard
//         </Link>


//          <button
//           onClick={handleLogout}
//           className="block w-full text-left mt-4 bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-white"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function CoachSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#0F1A2C] text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu size={22} />
      </button>

      {/* SIDEBAR */}
      <div
  className={`
    fixed top-0 left-0 z-40 h-full w-64
    bg-[#0F1A2C] text-white p-6
    transform transition-transform duration-300

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:translate-x-0
  `}
>

        <h2 className="text-2xl font-bold mb-6">FusionMain</h2>

        <div className="space-y-4">
          <Link
            to="/coach/dashboard"
            className="block hover:text-blue-300 "
            onClick={() => setIsOpen(false)}
          >
            Coach Dashboard
          </Link>

          <button
            onClick={handleLogout}
            className="block w-full text-left mt-6 bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}



