"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";
import { IoFilterOutline } from "react-icons/io5";
import { Button } from "@app/components/base/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/components/base/table"
import { FaFileArrowDown } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { BiSolidCopy } from "react-icons/bi";
import { Checkbox } from "@app/components/base/checkbox"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@app/components/base/dialog"
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
const School = () => {
  const [currentPage, setCurrentPage] = useState(1);
 
  const schoolPerPage = 5;
  const Schools = [
    {
      id:1,
      name: "Access Comprehensive College",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800DY',
      matric: "Ogun State",
      date:"Apr 12, 2023 ",
      type: "Student",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:2,
      name: "FUNNAB",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Ogun State",
      date:"Apr 12, 2023 ",
      type: "Lecturer",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:3,
      name: "Four Square Secondary School",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Ogun State",
      date:"Apr 12, 2023 ",
      type: "Student",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:4,
      name: "OOU",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Ogun State",
      date:"Apr 12, 2023 ",
      type: "Lecturer",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:5,
      name: "Adeleke University",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Osun State",
      date:"Apr 12, 2023 ",
      type: "Student",
      status: "Inactive",
      profile:"Preview Page"
    },

    {
      id:6,
      name: "Redeemer College",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800DY',
      matric: "Ekiti State",
      date:"Apr 12, 2023 ",
      type: "Student",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:7,
      name: "Dunamis University",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Kwara State",
      date:"Apr 12, 2023 ",
      type: "Lecturer",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:8,
      name: "Kelvin College",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Kwara State",
      date:"Apr 12, 2023 ",
      type: "Student",
      status: "Active",
      profile:"Preview Page"
    },
    {
      id:9,
      name: "KWASU",
      avatarSrc: '/images/Leading.png',
      underName:'#67689800Dy',
      matric: "Kwara State",
      date:"Apr 12, 2023 ",
      type: "Lecturer",
      status: "Active",
      profile:"Preview Page"
    },
   
  ]

  const totalPages = Math.ceil(Schools.length / schoolPerPage);
  const indexOfLastUser = currentPage * schoolPerPage;
  const indexOfFirstUser = indexOfLastUser - schoolPerPage;
  const currentSchools = Schools.slice(indexOfFirstUser, indexOfLastUser);


  // Change id
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Dialog>
    <div className='bg-white w-full'>
     <DialogContent className="sm:max-w-[22rem] overflow-x-hidden h-full  overflow-y-auto">
        <div className='bg-white px-4 w-full py-4 gap-3 flex flex-col justify-center items-center'>
          <div className="w-full flex flex-col gap-2 items-start px-4">
                <h2 className="font-semibold text-[1.2em]">Add School</h2>
                <h6 className="text-[#F56630] text-xs">Add new School</h6>
          </div>
          

          <form className="mt-4 flex flex-col gap-3">
              <div className='flex flex-col gap-1'>
                <label className='text-[.8em] text-[#101928] font-medium'>Type of School</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-[.8em] text-[#101928] font-medium'>School name</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-[.8em] text-[#101928] font-medium'>Address</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-[.8em] text-[#101928] font-medium'>State</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-[.8em] text-[#101928] font-medium'>Year Of Establishment</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <div className="flex flex-col gap-1">
                <label className='text-[.8em] text-[#101928] font-medium'>Phone Number</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <div className="flex flex-col gap-1">
                <label className='text-[.8em] text-[#101928] font-medium'>Email Address</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
                <p className="text-[#667185] font-normal text-xs">Login information will be sent here</p>
              </div>
              <div className="flex flex-col gap-1">
                <label className='text-[.8em] text-[#101928] font-medium'>Owner's name</label>
                <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
              </div>
              <Button  className='bg-[#FF6B00] mt-5 w-72 h-10 text-white text-[14px] font-semibold rounded-[6px] hover:bg-[#FF6B00]'>              
                  Save
              </Button>
          </form>
        </div> 
      </DialogContent>


      <div className="p-5">
        <div className='flex justify-between'>
          <div>
            <h1 className='text-black text-xl font-medium'>Schools</h1>
            <p className='text-[#475367]'>List of schools</p>
          </div>
        <div className='flex justify-around w-96 pt-1'>
          <div className='flex mt-2 text-[#667185]'>
              <CiSearch className='mr-1 mt-1'/>
              <p className='font-medium text-[14px]'>Search</p>
            </div>
            <div className='flex mt-2 text-[#667185]'>
              <IoFilterOutline className='mr-1 mt-1'/>
              <p className='font-medium text-[14px]'>Filter</p>
            </div>
            <div className='flex mt-2 text-[#667185]'>
              <RxCaretSort  className='mr-1 mt-1'/>
              <p className='font-medium text-[14px]'>Sort</p>
            </div>
           
            <DialogTrigger asChild className='bg-[#FF6B00] text-white text-[14px] font-semibold rounded-[6px] hover:bg-[#FF6B00]'>
        <Button > <MdOutlineAdd />
              Add School
            </Button>
      </DialogTrigger>
          </div>
        </div>
      <div>
      <Table className="mt-3 text-[12px]">
                  <TableHeader className="bg-[#F0F2F5] border rounded-t-xl">
                    <TableRow className='text-black'>
                      <TableHead colSpan={2} >Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead className='text-center'>Status</TableHead>
                      <TableHead colSpan={2}>Profile Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentSchools.map((user) => (
                      // <Link href={{pathname:"/admin/school/singleschool", query: {_id: user.name}}} className="w-full" >
                      <TableRow  key={user.id}>
                       
                        <TableCell>
                            <Checkbox color='black' />
                          </TableCell>
                        <TableCell className="font-medium flex text-black">
                          <img src={user.avatarSrc} alt="" className="w-10 h-10" />
                          <div>
                            <h1 className="text-[#101928] font-medium text-sm">{user.name}</h1>
                            <p className="text-[#475367] font-normal text-xs">{user.underName}</p>
                          </div>
                        </TableCell>
                        <TableCell className='text-black'>{user.matric}</TableCell>
                       
                        <TableCell className='text-black'>{user.date}</TableCell>
                        <TableCell>
                        <div className={`${user.status === 'Active' ? 'bg-[#E7F6EC] text-[#0F973D]' : 'bg-[#FEF6E7] text-[#F3A218]'} text-center  py-1 px-3 rounded-xl`}>
                          {user.status}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex">
                            <Link href="/admin/school/singleschool" className="border py-1 px-3 border-[#FF6B00] text-[#FF6B00] rounded-xl">
                              {user.profile}
                            </Link>
                            <BiSolidCopy className="mt-2 ml-2" color='#FF6B00' />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="border w-10 h-10 p-3">
                          <BsThreeDotsVertical color='black'/>
                          </div>

                          </TableCell> 
                          
                      </TableRow>
                    //  </Link>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-center mt-5">
                  <Button className="mx-1 border border-[#D0D5DD]" onClick={prevPage} disabled={currentPage === 1}>
                    <FaAngleLeft color='black' size={25} />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button key={i} className={`mx-1 ${currentPage === i + 1 ? 'border border-[#F56630] rounded-[6px] text-black' : 'text-[#98A2B3]'}`} onClick={() => paginate(i + 1)}>
                      {i + 1}
                    </Button>
                  ))}
                  <Button className="mx-1 border border-[#D0D5DD]" onClick={nextPage} disabled={currentPage === totalPages}>
                    <FaAngleRight color='black' size={25}/>
                  </Button>
                </div>
      </div>
      </div>
    </div>
    </Dialog>
  )
}

export default School

