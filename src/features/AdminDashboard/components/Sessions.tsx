import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { Button } from '@app/components/base/button';

const Sessions = () => {
 
  return (
    <div className='w-full mt-14'>
      <div className='mb-4'>
        <h1 className='text-black text-xl font-medium'>Sessions</h1>
        <p className='text-[#475367] text-xs'>Edit sessions and semester </p>
      </div>
      <div className='mb-4'>
        <p className='text-[#475367] text-xs'>Current Session</p>
        <h1 className='text-black text-xl font-medium'>2024/2025 (1st Semester)</h1>
      </div>
      <form action="" className='w-full grid grid-cols-2 gap-4 mt-5 '>
        <div className=''>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Session</label>
          <div className='flex w-80 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select Session</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        <div className=''>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Semester </label>
          <div className='flex w-80 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select Semester</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        
        <Button className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center p-2 gap-2 w-40 h-12 rounded-[8px] text-white'>
                Save Changes
          </Button>
       
      </form>
    </div>
  )
}

export default Sessions