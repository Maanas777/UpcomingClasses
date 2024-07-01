import React from "react";
import { SidebarLayoutProps } from "@/types/components/sideNavbar";



const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="  flex flex-col w-48  sticky top-0 h-screen px-4 py-8 bg-white border-r border-gray-200">
      {children}
    </div>
  );
};

export default SidebarLayout;
