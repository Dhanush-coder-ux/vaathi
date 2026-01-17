import React from 'react';
// Note: Keeping the import path exactly as requested (Tabel vs Table)
import { Table, type Column } from "../../../shared/components/common/Tabel";

interface ClassProps {
  id: number;
  Banner?: string;
  className: string;
  status: 'Live' | 'Completed';
  subject: string;
  Teacher: string;
  details: string;
}

const subjectsData: ClassProps[] = [
  {
    id: 1,
    Banner: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=150&q=80",
    className: "Library",
    status: 'Live',
    subject: 'Science',
    Teacher: 'Dhanush',
    details: "View"
  },
  {
    id: 2,
    Banner: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=150&q=80",
    className: "Os Lab",
    status: 'Completed',
    subject: 'Biology',
    Teacher: 'Sarah',
    details: "View"
  },
  {
    id: 3,
    // Example without a banner to test fallback
    className: "LHs-4",
    status: 'Live',
    subject: 'Chemistry',
    Teacher: 'Mike',
    details: "View"
  },
];

const Classes = () => {

  const columns: Column<ClassProps>[] = [
    {
      header: "Banner",
      accessor: "Banner",
      className: "w-[100px]",
      render: (item) => (
        <div className="h-10 w-16 overflow-hidden rounded-md bg-gray-200 border border-gray-200">
          {item.Banner ? (
            <img 
              src={item.Banner} 
              alt={item.className} 
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
              No Img
            </div>
          )}
        </div>
      )
    },
    {
      header: "Class Name",
      accessor: "className",
      render: (item) => (
        <span className="font-bold text-gray-800">
          {item.className}
        </span>
      )
    },
    {
      header: "Teacher",
      accessor: "Teacher",
      className: "text-gray-600"
    },
    {
      header: "Subject",
      accessor: "subject",
      render: (item) => (
        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">
          {item.subject}
        </span>
      )
    },
    {
      header: "Status",
      accessor: "status",
      render: (item) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
            item.status === 'Live'
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-100 text-blue-700'
          }`}
        >
          {item.status}
        </span>
      )
    },
    {
      header: "Details",
      accessor: "details",
      render: (item) => (
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs font-semibold transition-colors">
          {item.details}
        </button>
      )
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Table
        data={subjectsData}
        columns={columns}
        title="Classes"
        subtitle="Manage your class schedules, teachers, and subjects."
        onCreate={() => alert("Create Class Modal")}
        onSearch={(q) => console.log("Searching classes for:", q)}
      />
    </div>
  );
}

export default Classes;