import React from 'react'
import { IoMdArrowUp,IoMdArrowDown } from "react-icons/io";

const Overview = () => {
  return (
    <div className="w-full bg-white">
    <h1 className="text-[1em] font-[600] text-gray-800 font-Poppins py-2">Overview</h1>

    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">

      <div className='col-span-1 px-4 py-2 shadow-md shadow-gray-200 rounded-[8px] flex flex-col gap-[2px]'>
        <div className="flex justify-center items-center gap-1 w-16 py-1 px-1 bg-[#f2fff5] rounded-[6px] text-[#1BB83D]">
          <p className="text-[.7em] flex items-center">
            <span>+</span>
            <span>30</span>
            <span>%</span>
          </p>
          <IoMdArrowUp size={15} className="mb-[2px]" fill="#1BB83D" />
        </div>
        <span className={`text-[1.3em] font-semibold font-Poppins text-gray-700`} >
          11940
        </span>
        <span className="text-[.8em] text-gray-700 font-medium">Active Users</span>
      </div>

      <div className='col-span-1 px-4 py-2 shadow-md shadow-gray-200 rounded-[8px] flex flex-col gap-[2px]'>
        <div className="flex justify-center items-center gap-1 w-16 py-1 px-1 bg-[#FFF5F5] rounded-[6px] text-[#CD2727]">
          <p className="text-[.7em] flex items-center">
            <span>+</span>
            <span>30</span>
            <span>%</span>
          </p>
          <IoMdArrowDown size={15} className="mb-[2px]" fill="#CD2727" />
        </div>
        <span className={`text-[1.3em] font-semibold font-Poppins text-gray-700`} >
          1001
        </span>
        <span className="text-[.8em] text-gray-700 font-medium">Active Lecturers</span>
      </div>

      <div className='col-span-1 px-4 py-2 shadow-md shadow-gray-200 rounded-[8px] flex flex-col gap-[2px]'>
        <div className="flex justify-center items-center gap-1 w-16 py-1 px-1 bg-[#f2fff5] rounded-[6px] text-[#1BB83D]">
          <p className="text-[.7em] flex items-center">
            <span>+</span>
            <span>30</span>
            <span>%</span>
          </p>
          <IoMdArrowUp size={15} className="mb-[2px]" fill="#1BB83D" />
        </div>
        <span className={`text-[1.3em] font-semibold font-Poppins text-gray-700`} >
          10940
        </span>
        <span className="text-[.8em] text-gray-700 font-medium">Active Cards</span>
      </div>

      <div className='col-span-1 px-4 py-2 shadow-md shadow-gray-200 rounded-[8px] flex flex-col gap-[2px]'>
        <div className="flex justify-center items-center gap-1 w-16 py-1 px-1 bg-[#FFF5F5] rounded-[6px] text-[#CD2727]">
          <p className="text-[.7em] flex items-center">
            <span>+</span>
            <span>30</span>
            <span>%</span>
          </p>
          <IoMdArrowDown size={15} className="mb-[2px]" fill="#CD2727" />
        </div>
        <p className={`text-[1.3em] font-semibold font-Poppins text-gray-700`} >
          <span>N</span>
          <span>21,000,958.98</span>
        </p>
        <span className="text-[.8em] text-gray-700 font-medium">Revenue</span>
      </div>
    
    </div>

    
  </div>
  )
}

export default Overview