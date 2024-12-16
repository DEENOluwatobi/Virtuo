import React from 'react'
import Team  from './Team'

function VibrantTeam() {
  return (
    <div className='bg-[#060019]'>
      <div className='w-[95%] md:w-[90%] mx-auto bg-transparent flex flex-col gap-5 py-10'>
        <h1 className='text-[1.2em] font-semibold md:px-10 text-white'>Our vibrant Team</h1>
        <div className='overflow-hidden h-[200px] sm:h-[300px] lg:h-[450px] w-full'>
          <Team />
        </div>
      </div>
    </div>
  )
}

export default VibrantTeam