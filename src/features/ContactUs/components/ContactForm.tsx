import React from 'react'
import { FiPhone } from "react-icons/fi";
import { Label } from "@app/components/base/label"
import { FaRegEnvelope } from "react-icons/fa";
import { Input } from "@app/components/base/input"
import { IoLocationOutline } from "react-icons/io5";
import { Textarea } from '@app/components/base/textarea';
import { Button } from '@app/components/base/button';

function ContactForm() {

  return (
    <div className="w-full text-black py-10">
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 w-full'>
        <div className='text-white flex flex-col gap-6'>
          <p>Any question? we are happy to help</p>
          <div className='border-[#83818E] border rounded-[6px] flex justify-center items-center px-4 gap-2 h-14 '>
              <FiPhone />
              <p className='w-full'>0203 807 8500</p>
          </div>
          <div className='border-[#83818E] border rounded-[6px] flex justify-center items-center px-4 gap-2 h-14'>
              <FaRegEnvelope />
              <p className='w-full'>Info@virtuo.com</p>
          </div>
          <div className='border-[#FF6B00] md:w-96 bg-[#FF6B00] border rounded-[6px] flex justify-center items-center px-4 gap-2 h-14'>
              <IoLocationOutline />
              <p className='w-full'>KM 10, Lekki, Lagos, Nigeria</p>
          </div>
        </div>


        <div className='bg-white md:w-[55%] py-10 rounded-[8px]'>
          <div className="px-8 w-full flex flex-col gap-5">

            <div className="flex md:justify-between flex-col md:flex-row w-full gap-2">
              <div className='md:w-[50%] w-full flex flex-col gap-2'>
                <Label className="font-bold text-[14px]">First Name</Label>
                <Input type="text" placeholder="First Name"  className="w-full border-[#D0D5DD] rounded-[6px] placeholder:text-gray-400"/>
              </div>
              <div className='md:w-[50%] w-full flex flex-col gap-2'>
                <Label htmlFor="email"  className="font-bold text-[14px]">Last Name</Label>
                <Input type="text" placeholder="Last Name"  className="w-full border-[#D0D5DD] rounded-[6px] placeholder:text-gray-400" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <Label htmlFor="email"  className="font-bold text-[14px]">Email </Label>
                <Input type="email" placeholder="Email" className='border-[#D0D5DD] rounded-[6px] placeholder:text-gray-400' />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label htmlFor="email"  className="font-bold text-[14px]">Phone Number</Label>
                <Input type="number" placeholder="Enter phone number" className='border-[#D0D5DD] rounded-[6px] placeholder:text-gray-400' />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label htmlFor="email" className="font-bold text-[14px]">Messages</Label>
                <Textarea placeholder="Type your message here." className="rounded-[6px] border-2 border-[#ff6a0031] bg-gray-100 placeholder:text-gray-400" />
            </div>
            <div className="w-full text-center text-white">
              <Button className='bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00] text-white rounded-[50px] px-9 py-4'>Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm