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
import StudentTable from '@app/features/AdminDashboard/components/StudentTable';
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
const UserStudents = () => {
  
  return (
    <div>
          <Dialog>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='w-full flex flex-col'>
                  <h1 className='text-black text-[1em] font-medium'>All Students</h1>
                  <p className='text-[#475367] text-[.8em]'>You are viewing all users</p>
                </div>

                <div className='flex justify-end w-full pt-1 gap-2'>
                  <div className='flex items-center gap-2 text-[#667185]'>
                    <CiSearch className=''/>
                    <p className='font-medium text-[.8em]'>Search</p>
                  </div>
                  <div className='flex items-center gap-2 text-[#667185]'>
                    <IoFilterOutline className=''/>
                    <p className='font-medium text-[.8em]'>Filter</p>
                  </div>
                  <div className='flex items-center gap-2 text-[#667185]'>
                    <RxCaretSort  className=''/>
                    <p className='font-medium text-[.8em]'>Sort</p>
                  </div>

                  <DialogTrigger asChild className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white text-[.9em] font-medium rounded-[6px]'>
                    <Button className='flex items-center gap-1'>
                      <MdOutlineAdd size={20}/> 
                      <span>Add New</span>
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[22rem] overflow-x-hidden h-full  overflow-y-auto">
                    <div className='bg-white px-4 w-full py-4 gap-3 flex flex-col justify-center items-center'>
                      <div className="w-full flex flex-col gap-2 items-start px-4">
                            <h2 className="font-semibold text-[1.2em]">Add Student</h2>
                            <h6 className="text-[#F56630] text-xs">Add new student</h6>
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
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Name</Label>
                            <Input type="text" placeholder='placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] text-[#667185] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Matric Number</Label>
                            <Input type="text" placeholder='placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] text-[#667185] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Faculty</Label>
                            <Input type="text" placeholder='placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] text-[#667185] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Department</Label>
                            <Input type="text" placeholder='placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] text-[#667185] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Level</Label>
                            <Input type="text" placeholder='placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] text-[#667185] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Status</Label>
                            <Input type="text" placeholder='placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] text-[#667185] border-[#D0D5DD] w-full h-9 placeholder:text-[#667185]' />
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
                <StudentTable/>
              </div>
            </div>  
          </Dialog>
    </div>
  )
}

export default UserStudents;