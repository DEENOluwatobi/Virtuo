"use client"
import React from 'react'
import ActivityOverview from './ActivityOverview'
import { UserChart } from './Graphs'
import { BsThreeDots } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@app/components/base/select"


const UserOveriew: React.FC = () => {

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className='w-full bg-white text-black flex flex-col md:grid md:grid-cols-10 gap-4'>
      
      <div className='col-span-7 h-[20.5rem] flex flex-col gap-2 overflow-hidden'>
        <div className='w-full flex items-center gap-2'>
          <h1 className="text-[1em] font-[600] text-gray-800 font-Poppins py-2">Users Overview</h1>
          <Select>
            <SelectTrigger className='text-[.8em] text-purple-900 w-24 font-Poppins p-1 border-[1px] border-gray-300 rounded-[6px] outline-none'>
              <SelectValue placeholder="January" />
            </SelectTrigger>
            <SelectContent className='bg-white font-Poppins text-gray-700 p-1 border-[1px] border-gray-300 rounded-[6px]'>
              <SelectGroup>
                {months.map((month, index) => (
                  <SelectItem key={index} value={(index + 1).toString()}>{month}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='w-full flex flex-col border-[1px] border-gray-200 rounded-[8px]'>
          <div className='w-full flex justify-between items-center'>
            <div className='px-4 py-2 flex divide-x-[1px] divide-gray-200 items-center'>
              <h1 className="text-[.8em] font-[600] text-gray-800 font-Poppins py-2 pr-3">Users</h1>
              <div className='flex items-center gap-1 pl-3'>
                <span className='w-2 h-2 rounded-full bg-[#FF6B00]'></span>
                <h1 className="text-[.8em] font-[500] text-gray-700 font-Poppins py-2">New users</h1>
              </div>
            </div>

            <div className='px-4 py-2 flex items-center gap-4'>
              <Select>
                <SelectTrigger className='text-[.7em] w-24 font-Poppins text-purple-900 p-1 border-[1px] border-gray-300 rounded-[6px] outline-none'>
                  <SelectValue placeholder="This week" />
                </SelectTrigger>
                <SelectContent className='bg-white text-[.7em] font-Poppins p-1 border-[1px] border-gray-300 rounded-[6px]'>
                  <SelectItem value="week">This week</SelectItem>
                  <SelectItem value="month">This month</SelectItem>
                </SelectContent>
              </Select>
              <BsThreeDots className='cursor-pointer'/>
            </div>
          </div>
          <UserChart/>
        </div>
      </div>

      <div className='col-span-3 h-full overflow-hidden'>
        <ActivityOverview />
      </div>
    </div>
  )
}

export default UserOveriew