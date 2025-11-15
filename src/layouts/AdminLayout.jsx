import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}
