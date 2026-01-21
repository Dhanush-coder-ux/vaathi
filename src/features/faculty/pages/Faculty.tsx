import  { useState } from 'react';
import { Search} from 'lucide-react'; // Import icons
import { Table, type Column } from "../../../shared/components/common/Tabel";
import Title from "../../../shared/components/common/Title";
import type { Faculty } from '../type';



const subjectsData: Faculty[] = [
  {
    id: 1,
    name: "dhanush",
    email: "dhanushsubbia703@gmail.com",
    role: "teacher",
    details: "View"
  },
  {
    id: 2,
    name: "siva",
    email: "siva@example.com",
    role: "teacher",
    details: "View"
  },
  {
    id: 3,
    name: "deepak",
    email: "deepak@example.com",
    role: "teacher",
    details: "View"
  },
];

const Faculty = () => {
  // 1. State for Search & Filter
  const [searchQuery, setSearchQuery] = useState("");


  const columns: Column<Faculty>[] = [
    {
      header: "Profile",
      accessor: "profileUrl",
      render: (item) => (
        item.profileUrl ? (
          <img
            src={item.profileUrl}
            alt={item.name}
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium">
            {item.name.charAt(0).toUpperCase()}
          </div>
        )
      ),
      className: "w-[80px]",
    },
    {
      header: "Name",
      accessor: "name",
      className: "font-medium text-gray-800 capitalize"
    },
    {
      header: "Email",
      accessor: "email",
      render: (item) => (
        <span className="text-gray-600 text-sm">
          {item.email}
        </span>
      )
    },
    {
      header: "Role",
      accessor: "role",
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
          item.role === 'teacher' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {item.role}
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
    <div className="p-6">
      <Title
        title="Faculty"
        subtitle="Manage and overview all your faculty members efficiently."
      />

      {/* 3. Toolbar Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 mt-6">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all bg-white"
          />
        </div>

      </div>

      {/* 4. Table with Filtered Data */}
      <Table
        data={subjectsData}
        columns={columns}
      />
    </div>
  );
}

export default Faculty;