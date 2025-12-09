// import CoachSidebar from "../components/CoachSidebar";

// export default function CoachLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <CoachSidebar />

//       <div className="flex-1 p-6">
//         {children}
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import CoachSidebar from "../components/CoachSidebar";

export default function CoachLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <CoachSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

     <div className="flex-1 p-4 lg:p-6 lg:ml-64 xl:ml-64">

        {children}
      </div>
    </div>
  );
}

