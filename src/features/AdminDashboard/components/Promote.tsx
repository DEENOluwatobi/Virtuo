import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { Button } from '@app/components/base/button';
const Promote = () => {
  return (
    <div className='w-full'>
      <div className='mb-4'>
        <h1 className='text-black text-xl font-medium'>Promote Students</h1>
        <p className='text-[#475367] text-xs'>Promote class and student from a class to another </p>
      </div>
      <h1 className='text-black text-xl font-medium'>Promote Classes</h1>
      <form action="" className='w-full grid grid-cols-3 gap-4 mt-5 '>
        <div className='w-96'>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Promote From</label>
          <div className='flex w-80 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select class</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        <div className='w-96'>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Promote To </label>
          <div className='flex w-80 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select class</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        
        <Button className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center p-2 gap-2 w-40 h-12 rounded-[8px] text-white mt-5'>
                Save Changes
          </Button>
       
      </form>
      <h1 className='text-black text-xl font-medium mt-10'>Promote a Student</h1>
      <form action="" className='w-full grid grid-cols-4 gap-4 mt-2 '>
        <div className=''>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Class</label>
          <div className='flex w-60 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select class</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        <div className=''>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Student</label>
          <div className='flex w-60 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select student</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        <div className=''>
          <label htmlFor="" className='text-[#101928] text-sm font-medium'>Promote To </label>
          <div className='flex w-60 justify-between items-center border border-[#667185df] px-2 py-1 rounded-[5px]'>
              <select className='relative w-full outline-none font-medium text-[.8em] flex items-center gap-2 text-[#788193] p-2 appearance-none'>
                <option className='p-2 text-[#101928] text-xs'>Select class</option>
              </select>
              <IoChevronDownOutline />
          </div>
        </div>
        
        <Button className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center p-2 gap-2 w-40 h-12 rounded-[8px] text-white mt-5'>
                Save Changes
          </Button>
       
      </form>
    </div>
  )
}

export default Promote