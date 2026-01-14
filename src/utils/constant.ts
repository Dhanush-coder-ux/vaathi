import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  UserCheck,
  Users,
  Layers,
} from "lucide-react";

export const sidebarLinks = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Courses",
    icon: BookOpen,
    path: "/courses",
  },
  {
    name: "Departments",
    icon: Layers,
    path: "/departments",
  },
  {
    name: "Enrollments",
    icon: UserCheck,
    path: "/enrollments",
  },
  {
    name: "Faculty",
    icon: Users,
    path: "/faculty",
  },
  {
    name: "Classes",
    icon: GraduationCap,
    path: "/classes",
  },
];
