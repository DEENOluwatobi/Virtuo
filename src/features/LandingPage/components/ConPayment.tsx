import Image from 'next/image'
import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import PhoneImg from "public/images/Frame 28.png"

const ConPayment = () => {

  return (
    <div className='bg-[#060019]'>
      <div className='w-[95%] h-full py-10 px-3 md:py-20 sm:w-[60%] md:w-[90%] lg:w-[80%] mx-auto flex md:flex-row flex-col justify-center items-center gap-10 md:gap-0'>
      
        <div className='w-full md:w-[40%]'>
          <Image src={PhoneImg} alt='' />
        </div>


        <div className='w-full md:w-[60%] h-full flex flex-col gap-4 md:gap-6 md:ml-16'>
          <h1 className='text-white font-semibold text-3xl md:text-4xl gap-2'>
            <span>Convenient Payments</span>
          </h1>

          <p className='text-sm text-gray-300 md:text-[16px] lg:flex flex-col gap-1'>
            <span>Seamlessly integrated payment functionalities within VirtuoCard NFC facilitate </span>
            <span>frictionless transactions across diverse platforms. Enjoy the convenience of </span>
            <span>swift and secure payments, enhancing user experience and operational </span>
            <span>efficiency.</span>
          </p>

          <div className='flex flex-col gap-2 md:gap-3 text-white'>

              <div className='flex items-start md:items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mt-[.5px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="w-[80%] text-md font-medium">Facilitating frictionless transactions across diverse platforms.</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.2px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="w-[80%] text-md font-medium">Providing seamless payment integration.</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.8px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="w-[80%] text-md font-medium">Enabling swift and secure payments.</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.8px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="w-[80%] text-md font-medium">Enhancing user experience through convenient payment options.</span>
              </div>

              <div className='flex items-center gap-2'>
                <div className='rounded-full bg-[#FCC47E] w-7 h-7 flex p-[3px] justify-center items-center'>
                  <div className='rounded-full bg-[#fab048] w-full h-full flex justify-center items-center mb-[.8px] ml-[1px]'>
                    <IoIosCheckmark size={15}  className='bg-[#FE8C00] rounded-[40px] text-white border-none' />
                  </div>
                </div>
                <span className="w-[80%] text-md font-medium">Improving operational efficiency with streamlined payment processes.</span>
              </div>
              
          </div>  
        </div>

      </div>
    </div>
  )
}

export default ConPayment