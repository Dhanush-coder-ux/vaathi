import  { useState } from 'react';
import { Search, Filter, Plus,} from 'lucide-react'; 
import { Table, type Column } from "../../../shared/components/common/Tabel";
import Title from '../../../shared/components/common/Title';
import type { ClassProps } from '../type';
import { FloatingFormCard } from '../../../shared/components/common/FloatingForm';
import CreateClass from './ClassForm';



const subjectsData: ClassProps[] = [
  {
    id: 1,
    Banner: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=150&q=80",
    className: "Library",
    status: 'Live',
    subject: 'Science',
    Teacher: 'Dhanush',
    capacity:89,
    details: "View"
  },
  {
    id: 2,
    Banner: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=150&q=80",
    className: "Os Lab",
    status: 'Completed',
     capacity:79,
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
     capacity:56,
    Teacher: 'Mike',
    details: "View"
  },
];

const Classes = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [ isOpen, setIsOpen ] = useState(false);
  

  const [statusFilter, setStatusFilter] = useState<'All' | 'Live' | 'Completed'>('All');

  const filteredData = subjectsData.filter((item) => {
    
    const matchesSearch = 
      item.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = 
      statusFilter === 'All' || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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
      header: "Capacity",
      accessor: "capacity",
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
    <div className="p-6">
      <Title
        title="Classes"
        subtitle="Manage and overview all your classes efficiently."
      />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 mt-6">

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search classes or teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96B4D]/20 focus:border-[#D96B4D] transition-all bg-white"
          />
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
    
          <div className="relative">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'All' | 'Live' | 'Completed')}
              className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <option value="All">All subject</option>
              <option value="Live">cs</option>
              <option value="Completed">dsa</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
          <div className="relative">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'All' | 'Live' | 'Completed')}
              className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <option value="teacher">Teacher</option>
              <option value="Live">Live</option>
              <option value="Completed">Completed</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>

          <button onClick={()=>setIsOpen(true)} className="bg-[#D96B4D] hover:bg-[#c25e41] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" />
            Create
          </button>
        </div>
      </div>
      <FloatingFormCard
      title='Create classes'
      onClose={()=>setIsOpen(false)}
      isOpen={isOpen}
      maxWidth='max-w-4xl'
      >
        <CreateClass onClose={()=>setIsOpen(false)}/>
      </FloatingFormCard>

      <Table
        data={filteredData}
        columns={columns}
      />
    </div>
  );
}

export default Classes;