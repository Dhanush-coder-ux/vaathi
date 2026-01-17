import { Table, type Column } from "../../../shared/components/common/Tabel";


interface Faculty {
  id: number;
  name: string;
  email: string;
  role: "teacher" | "student";
  details: string;
  profileUrl?: string; // 👈 optional
}



const subjectsData: Faculty[] = [
  {
    id: 1,
    name: "dhanush",
    email:"dhanushsubbia703@gmail.com",
    role:"teacher",
    details:"View"
  },
  {
    id: 2,
      name: "siva",
      email:"dhanushsubbia703@gmail.com",
    role:"teacher",
      details:"View"
  },
  {
    id: 3,
    
    name: "deepak",
      email:"dhanushsubbia703@gmail.com",
    role:"teacher",
      details:"View"
  },
];

const Faculty = () => {
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
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
          NA
        </div>
      )
    ),
    className: "w-[80px]",
  },
        {
          header: "Name",
          accessor: "name",
          className: "font-medium text-gray-800"
        },
           {
        header: "Email",
        accessor: "email",
        render: (item) => (
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
            {item.email}
          </span>
        )
      },
        {
          header: "Role",
          accessor: "role",
          render: (item) => (
            <div className="truncate max-w-md text-gray-500" title={item.role}>
              {item.role}
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
    <div>
        <Table
                  data={subjectsData}
                  columns={columns}
                  title="Faculty"
                  subtitle="Browse and manage the facullty members"
                  onCreate={() => alert("Create Modal Opens Here")}
                  onSearch={(q) => console.log("Searching for:", q)}
              />
      
    </div>
  )
}

export default Faculty
