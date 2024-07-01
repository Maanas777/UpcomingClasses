import React from "react";

const SidebarLogo = () => {
  return (
    <div className="h-40 border-b-4">
      <div className="px-8">
        <h1>Logo</h1>
      </div>

      <div className="mt-6 p-4">
        <img
          className="w-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92KhCAudTTic5ootsb5CJjyOF486SIpMdVA&s"
          alt="User avatar"
        />
        <p className="text-sm">John Doe</p>
        <p className="text-xs">Intermediate</p>
      </div>
    </div>
  );
};

export default SidebarLogo;
