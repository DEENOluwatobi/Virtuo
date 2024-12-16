import React from 'react'
import Image from 'next/image'
import { IoIosCheckmark } from 'react-icons/io'
import img6 from "public/images/Frame 19.png"

const Tracking = () => {

  return (
    <div className='h-full w-full'>
      <div className='w-[95%] h-full sm:w-[60%] py-5 md:py-20 md:w-[80%] mx-auto flex lg:flex-row flex-col-reverse items-start justify-center lg:items-center gap-10 lg:gap-0'>
        
        <div className='w-full lg:w-[60%] h-full flex flex-col gap-4'>
          <h1 className='font-semibold text-3xl md:text-4xl lg:flex flex-col gap-2'>
            <span>Effortless Attendance </span>
            <span>Tracking</span>
          </h1>

          <p className='text-sm text-gray-600 md:text-[16px] lg:flex flex-col gap-1 md:w-[36rem]'>
            <span>VirtuoCard NFC streamlines attendance tracking processes with  </span>
            <span>unparalleled efficiency. Through a simple tap, automated tracking saves  </span>
            <span>valuable time and resources, empowering organizations to focus on core objectives.</span>
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
        </div>

        <div className='w-full md:w-[40%]'>
          <Image src={img6} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Tracking