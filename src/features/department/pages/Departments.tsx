import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react'; // Make sure to install: npm i lucide-react
import { Table, type Column } from "../../../shared/components/common/Tabel";
import Title from "../../../shared/components/common/Title";
import type { Department } from '../type';
import { FloatingFormCard } from '../../../shared/components/common/FloatingForm';
import CreateDepartment from './DepartmentForm';



const subjectsData: Department[] = [
  {
    id: 1,
    code: "Ece",
    name: "Introduction to Computer Science",
    subjects: 6,
    description: "An introductory course covering the fundamental concepts of computer science...",
    details: "View"
  },
  {
    id: 2,
    code: "Civil",
    name: "Calculus II",
    subjects: 6,
    description: "Advanced study of integration, sequences, series, and power series.",
    details: "View"
  },
  {
    id: 3,
    code: "Mec",
    name: "Literature and Composition",
    subjects: 6,
    description: "A course focused on critical reading and writing through the study of various liter...",
    details: "View"
  },
  {
    id: 4,
    code: "Cse",
    name: "Literature and Composition",
    subjects: 6,
    description: "A course focused on critical reading and writing through the study of various liter...",
    details: "View"
  },
];

const Departments = () => {
  // 1. State for the search query
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Filter logic: Filters data based on Name OR Code
  const filteredData = subjectsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns: Column<Department>[] = [
    {
      header: "Code",
      accessor: "code",
      render: (item) => (
        <span className="bg-[#79d94d] text-white px-2 py-1 rounded text-xs font-bold">
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
      header: "Subjects",
      accessor: "subjects",
      render: (item) => (
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
          {item.subjects}
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
    <div className="p-6"> {/* Added padding for better layout */}
      
      <Title
        title="Departments"
        subtitle="Quick access to essential metrics and management tools."
      />

      {/* 3. The Toolbar Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 mt-6">
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79d94d]/20 focus:border-[#79d94d] transition-all bg-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-sm">
            <span className="text-sm">All Departments</span>
            <Filter className="w-4 h-4" />
          </button>
          
          <button onClick={()=>setIsModalOpen(true)} className="bg-[#D96B4D] hover:bg-[#c25e41] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" />
            Create
          </button>
        </div>
      </div>
      <FloatingFormCard
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      title='Create a Department'
      maxWidth='max-w-4xl'
      >
        <CreateDepartment onClose={()=>setIsModalOpen(false)}/>
      </FloatingFormCard>
      {/* 4. Pass the filteredData instead of raw subjectsData */}
      <Table
        data={filteredData}
        columns={columns}
      />
    </div>
  )
}

export default Departments