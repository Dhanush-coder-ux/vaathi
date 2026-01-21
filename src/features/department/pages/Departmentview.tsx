import React, { ReactNode, useState } from "react";
import {
  Users,
  BookOpen,
  GraduationCap,
  MoreHorizontal,
  Search,
  Filter,
  Plus,
} from "lucide-react";

/* =======================
   Types
======================= */

type Status = "Active" | "On Leave";

interface DepartmentStats {
  students: number;
  teachers: number;
  classes: number;
}

interface Department {
  id: string;
  name: string;
  description: string;
  stats: DepartmentStats;
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  status: Status;
}

interface Student {
  id: number;
  name: string;
  roll: string;
  year: string;
  email: string;
}

interface ClassItem {
  code: string;
  name: string;
  teacher: string;
  time: string;
}

type TabKey = "teachers" | "students" | "classes";

/* =======================
   Mock Data
======================= */

const departmentData: Department = {
  id: "ECE",
  name: "Electronics & Communication",
  description:
    "Focuses on electronic circuits, communication systems, and VLSI.",
  stats: {
    students: 120,
    teachers: 12,
    classes: 8,
  },
};

const teachersList: Teacher[] = [
  {
    id: 1,
    name: "Dr. A. Sharma",
    subject: "Signals & Systems",
    email: "sharma@college.edu",
    status: "Active",
  },
  {
    id: 2,
    name: "Prof. M. Raju",
    subject: "Microprocessors",
    email: "raju@college.edu",
    status: "On Leave",
  },
  {
    id: 3,
    name: "Dr. S. Priya",
    subject: "VLSI Design",
    email: "priya@college.edu",
    status: "Active",
  },
];

const studentsList: Student[] = [
  {
    id: 101,
    name: "Dhanush Kumar",
    roll: "21ECE05",
    year: "Final Year",
    email: "dhanush@student.edu",
  },
  {
    id: 102,
    name: "Karthik R",
    roll: "22ECE12",
    year: "Third Year",
    email: "karthik@student.edu",
  },
  {
    id: 103,
    name: "Sneha P",
    roll: "23ECE08",
    year: "Second Year",
    email: "sneha@student.edu",
  },
];

const classesList: ClassItem[] = [
  {
    code: "EC401",
    name: "Digital Signal Processing",
    teacher: "Dr. A. Sharma",
    time: "10:00 AM - 11:30 AM",
  },
  {
    code: "EC405",
    name: "Embedded Systems",
    teacher: "Prof. M. Raju",
    time: "02:00 PM - 03:30 PM",
  },
];

/* =======================
   Main Component
======================= */

const DepartmentDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("teachers");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-gray-500">
              Departments /{" "}
              <span className="font-medium text-gray-900">
                {departmentData.id}
              </span>
            </p>
            <h1 className="text-3xl font-bold text-gray-900">
              {departmentData.name}
            </h1>
            <p className="mt-1 text-gray-500">
              {departmentData.description}
            </p>
          </div>

          <div className="flex gap-3">
           
            <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              <Plus size={16} /> Add New
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Total Faculty"
            count={departmentData.stats.teachers}
            icon={<Users className="text-blue-600" />}
            bg="bg-blue-50"
          />
          <StatCard
            title="Enrolled Students"
            count={departmentData.stats.students}
            icon={<GraduationCap className="text-green-600" />}
            bg="bg-green-50"
          />
          <StatCard
            title="Active Classes"
            count={departmentData.stats.classes}
            icon={<BookOpen className="text-purple-600" />}
            bg="bg-purple-50"
          />
        </section>

        {/* Tabs */}
        <section className="rounded-xl border bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-6">
              <TabButton
                label="Teachers"
                active={activeTab === "teachers"}
                onClick={() => setActiveTab("teachers")}
              />
              <TabButton
                label="Students"
                active={activeTab === "students"}
                onClick={() => setActiveTab("students")}
              />
              <TabButton
                label="Classes"
                active={activeTab === "classes"}
                onClick={() => setActiveTab("classes")}
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  className="rounded-lg border px-9 py-2 text-sm focus:ring-2 focus:ring-green-500"
                  placeholder="Search..."
                />
              </div>
              <button className="rounded-lg border p-2 hover:bg-gray-50">
                <Filter size={18} />
              </button>
            </div>
          </div>

          {/* Tables */}
          {activeTab === "teachers" && (
            <Table
              headers={["Name", "Subject", "Email", "Status", "Actions"]}
              rows={teachersList.map((t) => (
                <tr key={t.id}>
                  <Cell bold>{t.name}</Cell>
                  <Cell>{t.subject}</Cell>
                  <Cell>{t.email}</Cell>
                  <Cell>
                    <StatusBadge status={t.status} />
                  </Cell>
                  <Cell action />
                </tr>
              ))}
            />
          )}

          {activeTab === "students" && (
            <Table
              headers={["Name", "Roll No", "Year", "Email", "Actions"]}
              rows={studentsList.map((s) => (
                <tr key={s.id}>
                  <Cell bold>{s.name}</Cell>
                  <Cell mono>{s.roll}</Cell>
                  <Cell>{s.year}</Cell>
                  <Cell>{s.email}</Cell>
                  <Cell action />
                </tr>
              ))}
            />
          )}

          {activeTab === "classes" && (
            <Table
              headers={[
                "Subject Code",
                "Class Name",
                "Faculty",
                "Schedule",
                "Actions",
              ]}
              rows={classesList.map((c) => (
                <tr key={c.code}>
                  <Cell bold>{c.code}</Cell>
                  <Cell>{c.name}</Cell>
                  <Cell>{c.teacher}</Cell>
                  <Cell>{c.time}</Cell>
                  <Cell action />
                </tr>
              ))}
            />
          )}
        </section>
      </div>
    </div>
  );
};

/* =======================
   Reusable Components
======================= */

interface StatCardProps {
  title: string;
  count: number;
  icon: ReactNode;
  bg: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  count,
  icon,
  bg,
}) => (
  <div className="flex items-center gap-4 rounded-xl border bg-white p-6">
    <div className={`rounded-full p-3 ${bg}`}>{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  </div>
);

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`border-b-2 pb-2 text-sm font-medium ${
      active
        ? "border-green-600 text-green-700"
        : "border-transparent text-gray-500 hover:text-gray-700"
    }`}
  >
    {label}
  </button>
);

interface TableProps {
  headers: string[];
  rows: ReactNode[];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead className="bg-gray-50 text-xs uppercase">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-6 py-4">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y">{rows}</tbody>
    </table>
  </div>
);

interface CellProps {
  children?: ReactNode;
  bold?: boolean;
  mono?: boolean;
  action?: boolean;
}

const Cell: React.FC<CellProps> = ({
  children,
  bold,
  mono,
  action,
}) => (
  <td className="px-6 py-4 text-gray-600">
    {action ? (
      <MoreHorizontal className="cursor-pointer text-gray-400" />
    ) : (
      <span
        className={`${bold ? "font-medium text-gray-900" : ""} ${
          mono ? "rounded bg-gray-100 px-2 py-1 font-mono text-xs" : ""
        }`}
      >
        {children}
      </span>
    )}
  </td>
);

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <span
    className={`rounded-full border px-2 py-1 text-xs font-medium ${
      status === "Active"
        ? "border-green-200 bg-green-100 text-green-700"
        : "border-amber-200 bg-amber-100 text-amber-700"
    }`}
  >
    {status}
  </span>
);

export default DepartmentDetail;
