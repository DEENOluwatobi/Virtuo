import React from 'react'
import { Button } from '@app/components/base/button';
import { TbEditCircle } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
const Department = () => {
 
  return (
    <div className='w-full mt-14'>
      <div className='mb-4'>
        <h1 className='text-black text-xl font-medium'>Department</h1>
        <p className='text-[#475367] text-xs'>Manage departments</p>
      </div>
      <div className='flex flex-col gap-5'>
          <div className=' w-[30rem] flex justify-between'>
            <p>Computer Sciences - Sciences</p>
            <div className='w-20 flex gap-4'>
              <div className='bg-[#fff1df] p-1 rounded-full'>
                <TbEditCircle color='#FF6B00' size={20}/>
              </div>
              <div className='bg-[#fff1df] p-1 rounded-full'>
                <RiDeleteBinLine color='#AC1A1A' size={20}/>
              </div>
              
            </div>
          </div>
          <div className=' w-[30rem] flex justify-between'>
            <p>Physiology - SMS</p>
            <div className='w-20 flex gap-4'>
              <div className='bg-[#fff1df] p-1 rounded-full'>
                <TbEditCircle color='#FF6B00' size={20}/>
              </div>
              <div className='bg-[#fff1df] p-1 rounded-full'>
                <RiDeleteBinLine color='#AC1A1A' size={20}/>
              </div>
              
            </div>
          </div>
          <div className=' w-[30rem] flex justify-between'>
            <p>Business Education - BMS</p>
            <div className='w-20 flex gap-4'>
              <div className='bg-[#fff1df] p-1 rounded-full'>
                <TbEditCircle color='#FF6B00' size={20}/>
              </div>
              <div className='bg-[#fff1df] p-1 rounded-full'>
                <RiDeleteBinLine color='#AC1A1A' size={20}/>
              </div>
              
            </div>
          </div>
      </div>
      <Button className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center mt-5 p-2 gap-2 w-40 h-12 rounded-[8px] text-white'>
                Add New
          </Button>
    </div>
  )
}


export default Department