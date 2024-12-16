import Image from 'next/image'
import React from 'react'
import BoxImg from "public/images/Frame 427319402.png"


const CustomSolution = () => {
  return (
    <div className='bg-[#060019] '>
      <div className="w-[90%] sm:w-[60%] md:w-[90%] lg:w-[80%] h-full mx-auto py-5 md:py-20 flex text-white flex-col lg:flex-row lg:justify-center items-center gap-5">

        <div className='bg-[#0094FF] h-full md:w-[65%] lg:w-[60%] rounded-2xl px-6 py-10 md:py-[4.6rem] flex flex-col gap-6 md:gap-10'>
          <h1 className="text-2xl md:text-3xl font-semibold">Customizable Solutions</h1>
          <p className="text-sm md:text-base text-gray-100 md:leading-7">Tailor VirtuoCard NFC to meet the unique requirements of your organization. With customizable branding options and flexible access control settings, VirtuoCard NFC adapts seamlessly to your organizational structure, maximizing versatility and effectiveness.</p>
        </div>

        <div className='lg:w-[40%] h-full'>
          <Image src={BoxImg} alt='custom-image'/>
        </div>

      </div>
    </div>
  )
}

export default CustomSolution