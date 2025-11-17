import CoachSidebar from "../components/CoachSidebar";

export default function CoachLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <CoachSidebar />

      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
