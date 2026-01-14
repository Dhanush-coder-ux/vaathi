import { Settings, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import type { NavbarProps } from "../types";

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-white border-b shadow-sm">
      <div className="flex h-full items-center justify-between px-4">
        
    
        <div className="flex items-center gap-3">
          <Layout
            onClick={() => setIsOpen(!isOpen)}
            size={22}
            className="cursor-pointer text-emerald-500"
          />

          <div className="h-10 flex items-center">
            {/* <img
              src="/images/vaathi.png"
              alt="Vaathi"
              className="h-full w-auto object-contain scale-110"
            /> */}
            <h1 className="text-xl font-bold text-emerald-500">Vaathi</h1>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <Link to="/profile" className="group">
            <Settings className="w-5 h-5 transition-transform group-hover:rotate-180" />
          </Link>

          <div className="w-9 h-9 rounded-full bg-gray-200 cursor-pointer hover:ring-2 hover:ring-emerald-400 transition-all" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
