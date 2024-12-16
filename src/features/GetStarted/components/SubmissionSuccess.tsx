import Image from 'next/image'
import React from 'react'
import Success from 'public/images/Success.svg'

const SubmissionSuccess = () => {
  return (
    <div className='w-full h-[350px] flex flex-col justify-center items-center gap-8'>
      <Image src={Success} alt='success'/>
      <div className='w-full flex flex-col justify-center items-center gap-1 text-lg font-medium text-black'>
        <span>Submission successfull</span>
        <span>Thank you</span>
      </div>
    </div>
  )
}

export default SubmissionSuccess