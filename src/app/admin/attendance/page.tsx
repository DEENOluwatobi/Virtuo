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
import Attendance from '@app/features/AdminDashboard/components/Attendance'
import { FaFileArrowDown } from 'react-icons/fa6';
import { FaFileUpload } from 'react-icons/fa';
import { IoChevronDownOutline } from "react-icons/io5";
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
                  <h1 className='text-black text-[1em] font-medium'>Attendance</h1>
                  <p className='text-[#475367] text-[.8em]'>Student Performance</p>
                </div>

                <div className='flex justify-end w-full pt-1 gap-4'>
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
                        <SelectItem value="Faculty" >Department</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  <Select >
                      <SelectTrigger className='text-[.8em] text-[#788193] w-[9rem] font-Poppins p-1 border border-[#667185df] rounded-[6px] outline-none'>
                        <SelectValue placeholder="Course"/>
                      </SelectTrigger>
                      <SelectContent className='bg-white font-Poppins text-gray-700 p-1 border-[1px] border-gray-300 rounded-[6px]'>
                        <SelectGroup className='text-[#788193]'>
                        <SelectItem value="Course" >Course</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                  <DialogTrigger asChild className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white text-[.9em] font-medium rounded-[6px]'>
                    <Button className='flex items-center gap-1'>
                     
                      <span>Filter</span>
                    </Button>
                  </DialogTrigger>

                  
                </div>
              </div>

              <div>
                <Attendance/>
              </div>
            </div>  
          </Dialog>
    </div>
  )
}

export default usePage