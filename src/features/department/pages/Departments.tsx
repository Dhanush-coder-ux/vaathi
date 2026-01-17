import { Table, type Column } from "../../../shared/components/common/Tabel";


interface Department {
  id: number;
  code: string;
  name: string;
  subjects:number
  description: string;
  details:string
}


const subjectsData: Department[] = [
  {
    id: 1,
    code: "Ece",
    name: "Introduction to Computer Science",
    subjects:6,
    description: "An introductory course covering the fundamental concepts of computer science...",
    details:"View"
  },
  {
    id: 2,
    code: "Civil",
    name: "Calculus II",
      subjects:6,
    description: "Advanced study of integration, sequences, series, and power series.",
      details:"View"
  },
  {
    id: 3,
    code: "Mec",
    name: "Literature and Composition",
      subjects:6,
    description: "A course focused on critical reading and writing through the study of various liter...",
      details:"View"
  },
  {
    id: 4,
    code: "Cse",
    name: "Literature and Composition",
      subjects:6,
    description: "A course focused on critical reading and writing through the study of various liter...",
      details:"View"
  },
];

const Departments = () => {
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
            title="Departments"
            subtitle="Quick access to essential metrics and management tools."
            onCreate={() => alert("Create Modal Opens Here")}
            onSearch={(q) => console.log("Searching for:", q)}
        />
    </div>
  )
}

export default Departments
