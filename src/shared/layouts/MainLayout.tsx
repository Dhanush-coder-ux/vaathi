import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const MainLayout = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main
          className={`flex-1 overflow-y-auto pt-14 transition-all duration-300 
  ${isOpen ? "ml-42" : "ml-10"}`}
        >

          <div className="ml-5 mx-auto p-6 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
