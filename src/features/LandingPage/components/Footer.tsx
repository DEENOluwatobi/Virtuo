import React from 'react';
import logo from "public/images/Logo.svg";
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from 'public/icons';

const Footer = () => {
  return (
    <div className='w-full flex flex-col gap-10 bg-[#060019] text-white py-5 md:py-10'>
      <div className='w-[90%] md:w-[90%] mx-auto py-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-2'>

          <div className='col-span-2 w-full h-full flex flex-col gap-4 justify-between'>
            <div className='w-full h-full'>
              <div>
                <Image src={logo} alt='logo' className='-ml-10 lg:ml-0 h-12 md:h-16'/>
              </div>
              <div className='lg:px-6 w-full flex justify-start items-center gap-4'>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
              </div>
            </div>

            <div className='pl-6 text-[1em] hidden lg:flex'>
              <span>Copyright &copy; 2024 virtuo, All rights reserved</span>
            </div>
          </div>

          <div className='col-span-1 w-full flex flex-col gap-4'>
            <h1 className='text-[1.3em] md:text-[1.5em] font-medium'>Virtuo</h1>
            <ul className='text-gray-300 text-[1em] flex flex-col gap-2'>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>About us</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>How it works</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>FAQs</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Privacy Policy</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Terms & Condition</li>
            </ul>
          </div>

          <div className='col-span-1 w-full flex flex-col gap-4'>
            <h1 className='text-[1.3em] md:text-[1.5em] font-medium'>Product</h1>
            <ul className='text-gray-300 text-[1em] flex flex-col gap-2'>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Identification</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Business Card</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Attendance</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>NFC Payment</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>More+</li>
            </ul>
          </div>

          <div className='col-span-1 w-full flex flex-col gap-4'>
            <h1 className='text-[1.3em] md:text-[1.5em] font-medium'>Experience</h1>
            <ul className='text-gray-300 text-[1em] flex flex-col gap-2'>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Signup as Merchant</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Card samples </li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Security</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Career</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Blog</li>
            </ul>
          </div>

          <div className='col-span-1 w-full flex flex-col gap-4'>
            <h1 className='text-[1.3em] md:text-[1.5em] font-medium'>Contact us</h1>
            <ul className='text-gray-300 text-[1em] flex flex-col gap-2'>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>0203 807 8500</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>info@virtuo.com</li>
              <li className='hover:underline duration-300 ease-in-out hover:text-orange-500 cursor-pointer'>Support</li>
            </ul>
          </div>

      </div>

      <div className='flex lg:hidden w-full text-[1em] px-4 md:justify-center items-center'>
        <span>Copyright &copy; 2024 virtuo, All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer