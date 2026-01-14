import { Table, type Column } from "../../../shared/components/common/Tabel";



interface Subject {
  id: number;
  code: string;
  name: string;
  department: string;
  description: string;
  details:string
}


const subjectsData: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "An introductory course covering the fundamental concepts of computer science...",
    details:"View"
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    description: "Advanced study of integration, sequences, series, and power series.",
      details:"View"
  },
  {
    id: 3,
    code: "ENG102",
    name: "Literature and Composition",
    department: "English",
    description: "A course focused on critical reading and writing through the study of various liter...",
      details:"View"
  },
];

const Subject = () => {
  
  
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
      <span  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
          {item.details}
        </span>
      )
    }
  ];

  return (
    <div className=" bg-gray-50 min-h-screen">
       
        <Table 
            data={subjectsData}
            columns={columns}
            title="Subjects"
            subtitle="Quick access to essential metrics and management tools."
            onCreate={() => alert("Create Modal Opens Here")}
            onSearch={(q) => console.log("Searching for:", q)}
        />
    </div>
  );
};

export default Subject;