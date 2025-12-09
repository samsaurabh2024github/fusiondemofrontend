import AdminSidebar from "../components/AdminSidebar";

import { useState } from "react";

// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <AdminSidebar />

//       {/* Main Content */}
//       <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
//         {children}
//       </div>
//     </div>
//   );
// }

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Backdrop overlay (mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div className="p-4 lg:p-6 lg:ml-64">
        {children}
      </div>
    </div>
  );
}
