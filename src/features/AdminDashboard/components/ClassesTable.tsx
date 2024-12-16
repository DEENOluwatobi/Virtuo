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

const data: ClassesData[] = [
  {
    level: 100,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "kindergarten 1",
    status: "Active",
  },
  {
    level: 100,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "kindergarten 1",
    status: "Inactive",
  },
  {
    level: 100,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "Nursery 1",
    status: "Active",
  },
  {
    level: 100,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "Nursery 2",
    status: "Active",
  },
  {
    level: 100,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "Primary 1",
    status: "Active",
  },
  {
    level: 300,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "Primary 2",
    status: "Active",
  },
  {
    level: 200,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "JSS 1",
    status: "Inactive",
  },
  {
    level: 100,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "JSS 2",
    status: "Active",
  },
  {
    level: 200,
    male:3,
    day: 10,
    female: 2,
    month: "Aug",
    year: 2020,
    code: "CMP101",
    class: "JSS 3",
    status: "Active",
  },
  
];

export type ClassesData = {
  class: string;
  code: string;
  level: number;
  male: number;
  female: number;
  day: number;
  month: string;
  year: number;
  status: "Active" | "Inactive";
};

const columns: ColumnDef<ClassesData>[] = [
  {
    accessorKey: "class",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Classes
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        
        <div className='flex flex-col justify-center'>
          <span className='font-Poppins text-[1em] font-semibold text-gray-700'>{row.getValue("class")}</span>
        </div>
      </div>
    )
  },

  {
    accessorKey: "level",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
       Students
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-gray-700 text-[.9em] text-center font-Poppins flex items-center gap-1">
        <span className="font-barlow">{row.getValue("level")}</span>
      </div>
    ),
  },

  {
    accessorKey: "male",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
       Male
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-gray-700 text-[.9em] text-center font-Poppins flex items-center gap-1">
        <span className="font-barlow">{row.getValue("male")}</span>
      </div>
    ),
  },

  {
    accessorKey: "female",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
       Female
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-gray-700 text-[.9em] text-center font-Poppins flex items-center gap-1">
        <span className="font-barlow">{row.getValue("female")}</span>
      </div>
    ),
  },
  

  {
    accessorKey: "month",
    header: () => (
      <Button variant="ghost" className="font-Poppins flex justify-start w-full p-0 text-[.9em] text-gray-700">
        Added Date
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
                <ReportOutlinedIcon className="text-orange-400"/>
              </div>
              <div className="text-[.9em] text-gray-700 flex flex-col">
                <span className="text-[1.1em] font-semibold">Suspend</span>
                <span className="font-light">Suspend this course</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem className="w-full cursor-pointer flex gap-4 items-center">
              <div className="rounded-full w-10 h-10 flex justify-center items-center bg-red-100">
                <DeleteOutlineOutlinedIcon className="text-red-400"/>
              </div>
              <div className="text-[.9em] text-gray-700 flex flex-col">
                <span className="text-[1.1em] font-semibold">Delete</span>
                <span className="font-light">Delete this course</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];

export default function ClassesTable()  {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pageIndex, setPageIndex] = React.useState(0);

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
      pagination: { pageSize: 6, pageIndex },
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

