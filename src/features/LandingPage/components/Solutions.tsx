import React from 'react';
import { Button } from '@app/components/base/button';
import Image from 'next/image';
import { IoIosCheckmark } from 'react-icons/io';
import img4 from "public/images/1Cards.svg";
import img5 from "public/images/Frame10.svg";

const Solutions = () => {

  return (
    <div className='w-full h-full'>
       <div className="w-[98%] sm:w-[60%] h-full py-10 md:py-20 md:w-[90%] mx-auto flex flex-col gap-20 justify-center items-center">
        <h1 className="font-semibold md:text-4xl text-2xl md:flex flex-col items-center text-center">
          <span>Unlock Seamless Access and Effortless </span>
          <span>Management with VirtuoCard NFC Solutions.</span> 
        </h1>

        <div className='w-full flex justify-center lg:items-center md:flex-row flex-col gap-5'>
          <div className='relative w-full md:w-[40%] h-full'>
            <Image src={img5} alt='' className="md:w-96 w-[20rem] h-96 top-20"/>
            <Image src={img4} alt='' className="md:w-96 w-[20rem] h-[28rem] absolute -top-20 -right-2" />
          </div>    

          <div className="w-full md:w-[60%] h-full flex flex-col gap-4 px-4">
            <h1 className='font-semibold text-3xl md:text-4xl'>Secure identification</h1>
            <p className='text-sm text-gray-600 md:text-[16px] lg:flex flex-col gap-1'>
              <span>VirtuoCard NFC employs cutting-edge encryption technology to ensure robust </span>
              <span>security for user identification, instilling confidence and trust in organizational </span>
              <span>access control measures.</span>  
            </p>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mt-[.5px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="text-md font-medium">Access Control</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.2px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="text-md font-medium">Physical meeting</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.8px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="text-md font-medium">Attendance tracking</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.8px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="text-md font-medium">Payment authentication</span>
              </div>
              
            </div>
            
            <Button className='mt-6 md:mt-10 w-36 h-12 py-3 px-8 rounded-[8px] border-[#FE8C00] border text-[#FE8C00] hover:shadow-sm shadow-[#FE8C00] cursor-pointer'>
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Solutions