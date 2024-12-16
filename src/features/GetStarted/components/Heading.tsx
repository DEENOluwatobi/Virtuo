import React from 'react'

const Heading = () => {
  
  return (
    <div className='text-white w-full h-full'>
      <div className='text-white pt-10 md:pt-20 w-full h-full flex flex-col justify-between'>
        <div className='w-full flex flex-col gap-1 sm:gap-2 md:gap-4'>
          <h1 className='w-[95%] md:w-[80%] lg:flex flex-col lg:gap-2 mx-auto font-semibold text-center text-2xl md:text-3xl lg:text-[4em]'>
            <span>Get started with Virtuo card</span>
          </h1>

          <p className='mx-auto w-[98%] md:w-[50%] text-center text-[#BDBDBD] text-sm md:text-base md:mt-5 px-2 lg:flex lg:flex-col'>
            <span>We need few information from you to get you started with virtuo</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Heading