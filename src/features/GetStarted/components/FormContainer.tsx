import Image from 'next/image'
import React from 'react'
import Funaab from 'public/images/Funaab.svg'
import VirtuoWhite from 'public/images/VirtuoWhite.svg'
import MultiPageForm from './MultiPageForm'

const FormContainer = () => {

  return (
    <div className='w-full h-full py-10 md:py-20'>
      <div className='w-[95%] sm:w-[80%] lg:w-[60%] mx-auto flex flex-col gap-2 bg-white rounded-xl overflow-hidden'>
        <div className='bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00] py-2 md:py-5 px-4 flex items-center justify-center gap-5'>
          <Image src={Funaab} alt=''/>
          <span className='font-semibold text-4xl text-white'>+</span>
          <Image src={VirtuoWhite} alt=''/>
        </div>

        <div className='md:p-4 flex flex-col gap-2 sm:gap-4 justify-center items-center text-black'>
          <h1 className='px-2 lg:flex flex-col font-medium text-[.9em] sm:text-lg text-center'>
            <span>In collaboration with Federal University of Agriculture, </span>
            <span>Abeokuta Student Union and Faculty of Agriculture</span> 
          </h1>
          <p className='font-bold text-center text-lg md:text-xl px-2 pt-4'>
            Student’s NFC card registration portal
          </p>

          <div className='w-full h-full'>
            <MultiPageForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContainer;