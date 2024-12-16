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
const usePage = () => {
  return (
    <div>
      <div >
          <Dialog>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <h1 className='text-black text-[1em] font-medium'>Courses</h1>
                  <p className='text-[#475367] text-[.8em]'>List of courses</p>
                </div>

                <div className='flex justify-around w-96 pt-1 gap-2'>
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
                      <span>Add Course</span>
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
                            <label className='text-[.8em] text-[#101928] font-medium'>Title</label>
                            <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[6px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <label className='text-[.8em] text-[#101928] font-medium'>Abbr</label>
                            <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <label className='text-[.8em] text-[#101928] font-medium'>Faculty</label>
                            <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <label className='text-[.8em] text-[#101928] font-medium'>Department</label>
                            <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <label className='text-[.8em] text-[#101928] font-medium'>Level</label>
                            <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className='text-[.8em] text-[#101928] font-medium'>Credit Unit</label>
                            <input type="text" placeholder='Placeholder' className='border-[1px] rounded-[4px] p-2 text-[.8em] border-[#D0D5DD] w-full h-9' />
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
    </div>
  )
}

export default usePage