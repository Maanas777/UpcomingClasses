import React from "react";
import { LayoutDashboard, NotebookText, User,BarChart2 } from "lucide-react";

const MobileFooter = () => {
  return (
    <div className="bg-white shadow-md flex justify-around py-2">
      <button className="flex flex-col items-center">
        <LayoutDashboard className="h-6 w-6 text-blue-600 " />
        <span className="text-xs">Dashboard</span>
      </button>
      <button className="flex flex-col items-center">
        <NotebookText className="h-6 w-6" />
        <span className="text-xs">Assignments</span>
      </button>

      <button className="flex flex-col items-center">
        <BarChart2 className="h-6 w-6" />
        <span className="text-xs">Profile</span>
      </button>

      <button className="flex flex-col items-center">
        <User className="h-6 w-6" />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default MobileFooter;
