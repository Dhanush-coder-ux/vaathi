import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebarLinks } from "../../utils/constant";
import type { NavbarProps } from "../types";

const NAVBAR_HEIGHT = 56;

const Sidebar = ({ isOpen }: NavbarProps) => {
  return (
    <motion.aside
      animate={{ width: isOpen ? 208 : 64 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed left-0 top-14 z-40 bg-white border-r border-gray-200 "
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
    >
 
      <nav className="flex h-full flex-col gap-1 px-2 py-3">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `group flex items-center rounded-md transition-all duration-200
                ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                }
                ${isOpen ? "gap-3 px-3 py-2" : "justify-center p-2"}`
              }
            >
              <Icon
                size={20}
                className={`shrink-0 ${
                  !isOpen ? "group-hover:scale-110" : ""
                }`}
              />

              {isOpen && (
                <span className="text-sm font-medium truncate">
                  {link.name}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
