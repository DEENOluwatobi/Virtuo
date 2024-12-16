import NfcCard from '@app/features/AdminDashboard/components/NfcCard'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import { Button } from "@app/components/base/button";
import { Input } from '@app/components/base/input';

const page = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <div className='mb-4'>
          <h1 className='text-black text-xl font-medium'>Students NFC Card</h1>
          <p className='text-[#475367] text-xs'>Generate and print student ID here</p>
        </div>
        <div className='flex justify-between gap-5 w-[35rem]'>
        
          <div className='relative flex items-center gap-1 text-[#667185] border border-[#667185df] h-12 px-2  rounded-[5px]'>
          <Input type="text" placeholder='Search student' className='font-medium text-[.8em] w-96 h-full border-none'/>
                    <CiSearch className='absolute top-3 right-2'/>
        </div>
        <Button className='flex items-center gap-1 bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white text-[.9em] h-12 font-medium rounded-[6px]'>
                      <MdOutlineAdd size={20}/> 
                      <span>Generate</span>
        </Button>
        </div>
        
      </div>
      <NfcCard />
    </div>
  )
}

export default page