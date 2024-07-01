import React from "react";
import SidebarLayout from "./sidebarLayout";
import SidebarLogo from "./sidebarLogo";
import SidebarNav from "./sidebarNav";
import SidebarNavItem from "./sideNavitem";
import { LayoutDashboard, Users, NotebookText, BarChart2, IndianRupee, Settings } from "lucide-react";

const Sidebar = () => {
  return (
  
    <SidebarLayout >
      <SidebarLogo />
      <SidebarNav>
        <SidebarNavItem href="/" icon={<LayoutDashboard />} text="Dashboard" />
        <SidebarNavItem href="/" icon={<Users />} text="All Classes" />
        <SidebarNavItem href="/" icon={<NotebookText />} text="Assignments" />
        <SidebarNavItem href="/" icon={<BarChart2 />} text="Performance" />
        <SidebarNavItem href="/" icon={<IndianRupee />} text="Fee Details" />
        <SidebarNavItem href="/" icon={<Settings />} text="Settings" />
      </SidebarNav>
    </SidebarLayout>
  
  );
};

export default Sidebar;
