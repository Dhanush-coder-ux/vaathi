import  { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react'; // 1. Import icons
import { Table, type Column } from "../../../shared/components/common/Tabel";
import Title from "../../../shared/components/common/Title";

interface Subject {
  id: number;
  code: string;
  name: string;
  department: string;
  description: string;
  details: string;
}

const subjectsData: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "An introductory course covering the fundamental concepts of computer science...",
    details: "View"
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    description: "Advanced study of integration, sequences, series, and power series.",
    details: "View"
  },
  {
    id: 3,
    code: "ENG102",
    name: "Literature and Composition",
    department: "English",
    description: "A course focused on critical reading and writing through the study of various liter...",
    details: "View"
  },
];

const Subject = () => {
  // 2. Add State for search
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Add Filter Logic (searches by Code, Name, or Department)
  const filteredData = subjectsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns: Column<Subject>[] = [
    {
      header: "Code",
      accessor: "code",
      render: (item) => (
        <span className="bg-[#D96B4D] text-white px-2 py-1 rounded text-xs font-bold">
          {item.code}
        </span>
      ),
      className: "w-[100px]"
    },
    {
      header: "Name",
      accessor: "name",
      className: "font-medium text-gray-800"
    },
    {
      header: "Department",
      accessor: "department",
      render: (item) => (
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
          {item.department}
        </span>
      )
    },
    {
      header: "Description",
      accessor: "description",
      render: (item) => (
        <div className="truncate max-w-md text-gray-500" title={item.description}>
          {item.description}
        </div>
      )
    },
    {
      header: "Details",
      accessor: "details",
      render: (item) => (
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-gray-200">
          {item.details}
        </span>
      )
    }
  ];

  return (
    <div className="bg-gray-50 p-6">
      <Title
        title="Subjects"
        subtitle="Manage and overview all your subjects efficiently."
      />

      {/* 4. Toolbar Section (Search + Buttons) */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 mt-6">
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all bg-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-sm">
            <span className="text-sm">All Departments</span>
            <Filter className="w-4 h-4" />
          </button>
          
          <button className="bg-[#D96B4D] hover:bg-[#c25e41] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" />
            Create
          </button>
        </div>
      </div>

      {/* 5. Pass filteredData to Table */}
      <Table 
        data={filteredData}
        columns={columns}
      />
    </div>
  );
};

export default Subject;