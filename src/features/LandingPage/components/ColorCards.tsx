import Image from 'next/image';
import React from 'react'
import QRcode from "public/images/QRcode.svg";

export const BlueCard = () => {
  return (
    <>
      <div className='relative bg-[#0094FF] w-[250px] h-[150px] sm:w-[350px] sm:h-[220px] md:h-[340px] md:w-[500px] rounded-2xl md:rounded-[2rem] p-4 overflow-hidden'>
        <div className='absolute top-8 right-5 md:top-20 md:right-12 bg-white w-20 h-20 md:w-40 md:h-40 rounded-xl flex flex-col justify-center items-center'>
          <Image src={QRcode} alt='QRcode' fill className='rotate-[-5deg]'/>
        </div>
        <span className='text-gray-200 font-light absolute bottom-[1.5rem] right-[2.8rem] md:bottom-[4.2rem] md:right-[6.2rem] text-[.5em] md:text-[.9em]'>423434</span>
        <span className='text-gray-200 font-medium absolute bottom-[1.2rem] md:bottom-[4rem] left-[2.5rem] text-[.9em] md:text-[1.5em]'>NFC CARD</span>
      </div>
    </>
  )
};

export const OrangeCard = () => {
  return (
    <>
      <div className='relative bg-[#FF6B00] h-[150px] w-[250px] sm:w-[350px] sm:h-[220px] md:h-[340px] md:w-[500px] rounded-2xl md:rounded-[2rem] p-4 overflow-hidden'>
        <div className='absolute top-8 right-5 md:top-20 md:right-12 bg-white w-20 h-20 md:w-40 md:h-40 rounded-xl flex flex-col justify-center items-center'>
          <Image src={QRcode} alt='QRcode' fill className='rotate-[-5deg]'/>
        </div>
        <span className='text-gray-200 font-light absolute bottom-[1.5rem] right-[2.8rem] md:bottom-[4.2rem] md:right-[6.2rem] text-[.5em] md:text-[.9em]'>423434</span>
        <span className='text-gray-200 font-medium absolute bottom-[1.2rem] md:bottom-[4rem] left-[2.5rem] text-[.9em] md:text-[1.5em]'>NFC CARD</span>
      </div>
    </>
  )
}

// bg-[#0094FF] - blue 
// bg-[#FF6B00] - orange