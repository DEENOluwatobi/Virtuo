"use client"
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidCopy } from "react-icons/bi";
import { Button } from "@app/components/base/button"
import { Checkbox } from "@app/components/base/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@app/components/base/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/components/base/table"
import Image from "next/image";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

const data: AllUsersData[] = [
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "FU/14/15/2024",
    userId: 23223432,
    day: 10,
    type: "Student",
    time: "8:10AM",
    month: "Aug",
    year: 2020,
    userName: "Emily Tourf",
    location: "New York",
    status: "Active",
  },
];

export type AllUsersData = {
  image: string;
  number: string;
  userId: number;
  day: number;
  month: string;
  year: number;
  time: string;
  userName: string;
  location: string;
  type: "Student" 
  status: "Active" | "Inactive";
};

const columns: ColumnDef<AllUsersData>[] = [
  {
    accessorKey: "userName",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Name
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="border border-gray-400 rounded-[3px] checked:bg-white mr-2"
        />
        <div className='w-[50px] h-[50px] rounded-full shadow-sm shadow-gray-200 overflow-hidden'>
          <Image 
            src={row.original.image} 
            alt="image" 
            width={100}
            height={100}
            className='object-cover w-[50px] h-full'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='font-Poppins text-[1em] font-semibold text-gray-700'>{row.getValue("userName")}</span>
          <span className='font-Poppins text-[.9em] text-gray-500'>#{row.original.userId}</span>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "number",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Matric Number
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-gray-700 text-[.9em] text-center font-Poppins flex items-center gap-1">
        <span className="font-barlow">{row.getValue("number")}</span>
      </div>
    ),
  },

  {
    accessorKey: "type",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Type
      </Button>
    ),
    cell: ({ row }) => {
  
      return (
        <div className={`w-full flex items-center justify-center rounded-xl p-2 bg-blue-100`}>
          <span className={`font-Poppins font-medium text-[.9em] text-blue-500`}>
            {row.getValue("type")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "month",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Join Date
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-gray-700 text-[.9em] text-center font-Poppins flex items-center gap-1">
        <span className="font-barlow">{row.getValue("month")}</span>
        <span className="font-barlow">{row.original.day}, </span>
        <span className="font-barlow">{row.original.year}, </span>
      </div>
    ),
  },

  {
    accessorKey: "status",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Status
      </Button>
    ),
    cell: ({ row }) => {
      let textColor = "";
      let bgColor = "";
  
      switch (row.getValue("status")) {
        case "Active":
          textColor = "text-green-500";
          bgColor = "bg-green-100";
          break;
        case "Inactive":
          textColor = "text-yellow-600";
          bgColor = "bg-yellow-100";
          break;
      }
  
      return (
        <div className={`w-full flex items-center justify-center rounded-xl p-2 ${bgColor}`}>
          <span className={`font-Poppins font-medium text-[.9em] ${textColor}`}>
            {row.getValue("status")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "profile",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Profile Link
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center">
        <span className="border py-1 px-3 border-[#FF6B00] text-[#FF6B00] text-[.9em] rounded-xl cursor-pointer">
          Preview page
        </span>
        <BiSolidCopy className="mx-2 cursor-pointer" color='#FF6B00'/>
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const CoinPayment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-white">
            <Button variant="ghost" className="h-8 w-8 p-0">
              <BsThreeDotsVertical color='darkgray' size={20}/>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="bg-white w-full px-4 py-2 flex flex-col gap-2 shadow-md shadow-gray-300 rounded-[10px]">
            <DropdownMenuItem className="w-full cursor-pointer flex gap-4 items-center">
              <div className="rounded-full w-10 h-10 flex justify-center items-center bg-orange-100">
                <BorderColorIcon className="text-orange-400"/>
              </div>
              <div className="text-[.9em] text-gray-700 flex flex-col">
                <span className="text-[1.1em] font-semibold">Edit</span>
                <span className="font-light">Make changes to information</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem className="w-full cursor-pointer flex gap-4 items-center">
              <div className="rounded-full w-10 h-10 flex justify-center items-center bg-orange-100">
                <SmsOutlinedIcon className="text-orange-400"/>
              </div>
              <div className="text-[.9em] text-gray-700 flex flex-col">
                <span className="text-[1.1em] font-semibold">Send message</span>
                <span className="font-light">Send a mail message to a student</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem className="w-full cursor-pointer flex gap-4 items-center">
              <div className="rounded-full w-10 h-10 flex justify-center items-center bg-orange-100">
                <ReportOutlinedIcon className="text-orange-400"/>
              </div>
              <div className="text-[.9em] text-gray-700 flex flex-col">
                <span className="text-[1.1em] font-semibold">Suspend</span>
                <span className="font-light">Suspend this student</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem className="w-full cursor-pointer flex gap-4 items-center">
              <div className="rounded-full w-10 h-10 flex justify-center items-center bg-red-100">
                <DeleteOutlineOutlinedIcon className="text-red-400"/>
              </div>
              <div className="text-[.9em] text-gray-700 flex flex-col">
                <span className="text-[1.1em] font-semibold">Delete</span>
                <span className="font-light">Delete this student information</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];

export default function StudentTable()  {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pageIndex, setPageIndex] = React.useState(0);

  // const studentData = data.filter(user => user.type === "Student");

  const table = useReactTable({
    data, 
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    debugTable: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: { pageSize: 5, pageIndex },
    },
  })

  const handlePreviousPage = () => {
    if (table.getCanPreviousPage()) {
      setPageIndex((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (table.getCanNextPage()) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const totalPages = table.getPageCount();
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <div className="border-b">
        <Table>
          <TableHeader className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={!table.getCanPreviousPage()}
          className="rounded-[6px]  cursor-pointer"
        >
          <FaAngleLeft color='black' size={15}/>
        </Button>
        {visiblePages.map((page) => (
          <Button
            key={page}
            variant="outline"
            size="sm"
            onClick={() => setPageIndex(page - 1)}
            className={`${pageIndex + 1 === page ? "border-orange-500" : "border-transparent"} border rounded-[6px]`}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={!table.getCanNextPage()}
          className="rounded-[6px] cursor-pointer"
        >
          <FaAngleRight color='black' size={15}/>
        </Button>
      </div>
    </div>
  )
};

