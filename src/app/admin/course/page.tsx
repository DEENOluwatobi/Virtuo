"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";
import { IoFilterOutline } from "react-icons/io5";
import { Button } from "@app/components/base/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@app/components/base/dialog"
import CoursesTable from '@app/features/AdminDashboard/components/CoursesTable';
import { FaFileArrowDown } from 'react-icons/fa6';
import { FaFileUpload } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@app/components/base/select"
import { Input } from "@app/components/base/input"
import { Label } from "@app/components/base/label"
const usePage = () => {
  return (
    <div className='p-4'>
          <Dialog>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='w-full flex flex-col'>
                  <h1 className='text-black text-[1em] font-medium'>Courses</h1>
                  <p className='text-[#475367] text-[.8em]'>List of courses</p>
                </div>

                <div className='flex justify-end w-full pt-1 gap-4'>
                  <div className='relative flex items-center gap-1 text-[#667185] border border-[#667185df] px-1 py-1 rounded-[5px]'>
                        <Input type="text" placeholder='Search' className='font-medium text-[.8em] w-full h-full border-none placeholder:text-[#667185]'/>
                        <CiSearch className='absolute top-3 right-2'/>
                  </div>

                    <Select >
                      <SelectTrigger className='text-[.8em] text-[#788193] w-[9rem] font-Poppins p-1 border border-[#667185df] rounded-[6px] outline-none'>
                        <SelectValue placeholder="Faculty"/>
                      </SelectTrigger>
                      <SelectContent className='bg-white font-Poppins text-gray-700 p-1 border-[1px] border-gray-300 rounded-[6px]'>
                        <SelectGroup className='text-[#788193]'>
                        <SelectItem value="Faculty" >Faculty</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select >
                      <SelectTrigger className='text-[.8em] text-[#788193] w-[9rem] font-Poppins p-1 border border-[#667185df] rounded-[6px] outline-none'>
                        <SelectValue placeholder="Department"/>
                      </SelectTrigger>
                      <SelectContent className='bg-white font-Poppins text-gray-700 p-1 border-[1px] border-gray-300 rounded-[6px]'>
                        <SelectGroup className='text-[#788193]'>
                        <SelectItem value="Department" >Department</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                  <DialogTrigger asChild className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white text-[.9em] font-medium rounded-[6px]'>
                    <Button className='flex items-center gap-1'>
                      <MdOutlineAdd size={20}/> 
                      <span>Add New</span>
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[22rem] overflow-x-hidden h-full  overflow-y-auto">
                    <div className='bg-white px-4 w-full py-4 gap-3 flex flex-col justify-center items-center'>
                      <div className="w-full flex flex-col gap-2 items-start px-4">
                            <h2 className="font-semibold text-[1.2em]">Add Course</h2>
                            <h6 className="text-[#F56630] text-xs">Add new course</h6>
                      </div>
                      <div className='flex justify-between gap-2 w-full px-4'>
                        <Button className='bg-[#FFF3E4] text-[10px] w-full rounded-md text-[#FE8C00] pl-2 py-2 font-ligh4 hover:bg-[#FFF3E4] '>
                          Download template <FaFileArrowDown className='ml-1' />
                        </Button>
                        <Button className='bg-[#FFF3E4] text-[10px] w-full rounded-md text-[#FE8C00] pl-2 py-2 font-ligh4 hover:bg-[#FFF3E4] '>
                          Upload template <FaFileUpload className='ml-1' />
                        </Button>
                      </div>

                      <form className="mt-4 flex flex-col gap-3">
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Title</Label>
                            <Input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Abbr</Label>
                            <Input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Faculty</Label>
                            <Input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Department</Label>
                            <Input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Level</Label>
                            <Input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Credit Unit</Label>
                            <Input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          
                          <Button  className='bg-[#FF6B00] mt-5 w-72 h-10 text-white text-[14px] font-semibold rounded-[6px] hover:bg-[#FF6B00]'>              
                              Save
                          </Button>
                      </form>
                    </div> 
                  </DialogContent>
                </div>
              </div>

              <div>
                <CoursesTable/>
              </div>
            </div>  
          </Dialog>
    </div>
  )
}

export default usePage