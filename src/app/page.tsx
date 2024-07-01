import React from "react";
import Side from "./components/sidebar/page";
import Table from "./components/table/page";
import Nav from "./components/nav/page";
import MobileFooter from "./components/mobileFooter/page";
import Assignments from "./components/assignments/page";

const Page = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - hidden on small screens */}
      <div className="hidden md:flex fixed w-48 h-full">
        <Side />
      </div>
      <div className="flex-1 flex flex-col md:ml-48">
        <nav className="sticky top-0 bg-white z-10 shadow-md">
          <Nav />
        </nav>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-4 overflow-y-auto">
            <Table />
          </div>
          {/* Assignments - hidden on small screens */}
          <div className="hidden lg:flex w-1/3 p-4 h-full overflow-y-auto">
            <Assignments />
          </div>
        </div>
      </div>
      {/* Mobile footer for small screens */}
      <div className="md:hidden fixed bottom-0 w-full">
        <MobileFooter />
      </div>
    </div>
  );
};

export default Page;
