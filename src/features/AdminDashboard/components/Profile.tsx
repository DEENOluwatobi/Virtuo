import React from 'react'
import Image from 'next/image';
import { AiOutlinePicture } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import { Button } from '@app/components/base/button';
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
const Profile = () => {
  const img = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className='w-full mt-14'>
      <div className='mb-4'>
        <h1 className='text-black text-xl font-medium'>Profile</h1>
        <p className='text-[#475367] text-xs'>Edit profile</p>
      </div>
      <div className='flex flex-row justify-start gap-4 p-3'>
          <div className='w-[50px] h-[50px] rounded-full shadow-sm shadow-gray-200 overflow-hidden'>
                  <Image 
                    src={img} 
                    alt="image" 
                    width={100}
                    height={100}
                    className='object-cover w-[50px] h-full'
                  />
          </div>
          <div className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center p-2 gap-2 rounded-[8px] text-white'>
                  <AiOutlinePicture />
                  <h1>Change Picture</h1>
          </div>
      </div>
      <form action="" className='w-full grid grid-cols-2 gap-4 mt-5 '>
        <div className='flex flex-col gap-1'>
          <Label htmlFor="" className='text-[.8em] text-[#101928] font-medium'>Name of institution</Label>
            <Select >
              <SelectTrigger className='text-[.8em] text-[#788193] w-full h-10 font-Poppins border border-[#667185df] px-2 py-1 rounded-[5px] outline-none'>
                <SelectValue placeholder="Select name of institution"/>
              </SelectTrigger>
              <SelectContent className='bg-white font-Poppins  text-[#788193] px-2 py-1 border-[1px] border-gray-300 rounded-[6px]'>
                <SelectGroup className='text-[#788193]'>
                <SelectItem value="class" >Tertiary</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Name of institution</Label>
                            <Input type="text"  placeholder='Oginni Schools' className='border-[1px] rounded-[4px] p-2 text-[.8em] text-[#101928] border-[#667185df] w-full h-10 placeholder:text-[#667185]' />
          </div>
          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Address</Label>
                            <Input type="text"  placeholder='Ilaro, Ogun State' className='border-[1px] rounded-[4px] p-2 text-[.8em] text-[#101928] border-[#667185df] w-full h-10 placeholder:text-[#667185]' />
          </div>
       
          <div className='flex flex-col gap-1'>
          <Label htmlFor="" className='text-[.8em] text-[#101928] font-medium'>State</Label>
            <Select >
              <SelectTrigger className='text-[.8em] text-[#788193] w-full h-10 font-Poppins border border-[#667185df] px-2 py-1 rounded-[5px] outline-none'>
                <SelectValue placeholder="Select State"/>
              </SelectTrigger>
              <SelectContent className='bg-white font-Poppins  text-[#788193] px-2 py-1 border-[1px] border-gray-300 rounded-[6px]'>
                <SelectGroup className='text-[#788193]'>
                <SelectItem value="class" >Ogun</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Year of Establishment</Label>
                            <Input type="text"  placeholder='Ilaro, Ogun State' className='border-[1px] rounded-[4px] p-2 text-[.8em] text-[#101928] border-[#667185df] w-full h-10 placeholder:text-[#667185]' />
          </div>
          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Phone Number</Label>
                            <Input type="number"  placeholder='0000000000' className='border-[1px] rounded-[4px] p-2 text-[.8em] text-[#101928] border-[#667185df] w-full h-10 placeholder:text-[#667185]' />
          </div>
          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Email address</Label>
                            <Input type="email"  placeholder='school@virtuobusiness.com' className='border-[1px] rounded-[4px] p-2 text-[.8em] text-[#101928] border-[#667185df] w-full h-10 placeholder:text-[#667185]' />
          </div>
          <div className='flex flex-col gap-1'>
                            <Label htmlFor="FirstName" className='text-[.8em] text-[#101928] font-medium'>Owner’s Name</Label>
                            <Input type="number"  placeholder='0000000000' className='border-[1px] rounded-[4px] p-2 text-[.8em] text-[#101928] border-[#667185df] w-full h-10 placeholder:text-[#667185]' />
          </div>
        
       

        <Button className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center p-2 gap-2 w-40 h-12 rounded-[8px] text-white'>
                Save Changes
          </Button>
       
      </form>
    </div>
  )
}

export default Profile