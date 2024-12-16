import { CardIcon } from 'public/icons'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosCard } from 'react-icons/io'
import CardDesign from 'public/images/CardDesign.svg'
import Image from 'next/image'

const OurCards = () => {
  return (
    <div className='w-full h-full bg-[#060019] text-white py-6 md:py-20'>
      <div className='h-full px-4 w-[98%] sm:w-[60%] lg:w-[90%] mx-auto flex flex-col gap-6 md:gap-10'>
        <h1 className=" text-3xl md:text-5xl font-semibold w-full text-start sm:text-center lg:text-start">
          Our Cards
        </h1>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>

          <div className='relative overflow-hidden bg-gradient-to-r from-[#91989b] to-[#71787b]  md:w-96 rounded-[20px] h-[16rem] md:h-[20rem] w-full px-4 py-2 md:p-6 flex flex-col justify-center gap-2 md:gap-4'>
              <div className='bg-[#b8bdbf] rounded-[40px] w-16 h-16 md:w-20 md:h-20 flex justify-center items-center'> 
                <div className='rounded-[40px] bg-[#FE8C00] w-14 h-14 md:w-16 md:h-16 flex justify-center items-center'>
                  <CardIcon size='xl'/>
                </div>
              </div>
      
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[1.2em]">Identification</h1>
                <p className="text-[.9em] flex flex-col font-light">
                  <span>Instilling confidence and trust in </span>
                  <span>organizational access control</span> 
                  <span>measures.</span>
                </p>
              </div>

              <div className='bg-[#FE8C00] rounded-full h-10 w-32 px-2 flex justify-between items-center gap-2 cursor-pointer hover:bg-[#fe7b00] duration-300 ease-in-out'>
                  <span className="flex items-center text-[.9em] px-2">Proceed</span> 
                  <div className='bg-[#935100] border border-[#754e1f] rounded-full w-8 h-8 flex justify-center items-center'> 
                    <FaArrowRight size={16} className=""/>
                  </div>   
              </div>

              {/* ---------- CARD SIDE DESIGN STARTS ------------*/}
                {/* <div className='absolute -right-10 top-16 bg-[#060019] w-[6.5rem] md:w-32 h-[300px] rounded-3xl overflow-hidden'>
                  <span className='absolute -left-6 top-14 rotate-[90deg] font-semibold'>Kelvin Hart</span>
                  <div className='absolute -right-0 bottom-8 md:bottom-1 bg-[#FF746B] w-[6.5rem] md:w-32 h-[150px]'>
                    <div className='absolute bottom-5 -right-3 w-24 h-24 border-[20px] bg-transparent border-[#060019]'></div>
                    <div className='absolute bottom-16 right-10 w-16 h-16 bg-white'></div>
                  </div>
                </div> */}
              {/* ---------- CARD SIDE DESIGN ENDS ------------*/} 

              <div className='absolute right-0 -bottom-28 md:-bottom-16 w-[6.5rem] md:w-32 h-[300px]'>
                <Image src={CardDesign} alt='card' className='object cover'/>
              </div>

          </div>

          <div className='bg-gradient-to-r from-[#91989b] to-[#71787b]  md:w-96 rounded-[20px] h-[16rem] md:h-[20rem] w-full px-4 py-2 md:p-5 flex flex-col justify-center gap-2 md:gap-4 md:mx-5'>
              <div className='bg-[#b8bdbf] rounded-[40px] w-16 h-16 md:w-20 md:h-20 flex justify-center items-center'> 
                <div className='rounded-[40px] bg-[#FE8C00] w-14 h-14 md:w-16 md:h-16 flex justify-center items-center'>
                  <CardIcon size='xl'/>
                </div>
              </div>
      
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[1.2em]">Business card</h1>
                <p className="text-[.9em] flex flex-col font-light">
                  <span>Digital business card for your </span>
                  <span>organization.</span> 
                </p>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='bg-[#FE8C00] rounded-full h-10 w-32 px-2 flex justify-between items-center gap-2 cursor-pointer hover:bg-[#fe7b00] duration-300 ease-in-out'>
                    <span className="flex items-center text-[.9em] px-2">Proceed</span> 
                    <div className='bg-[#935100] border border-[#754e1f] rounded-full w-8 h-8 flex justify-center items-center'> 
                      <FaArrowRight size={16} className=""/>
                    </div>   
                </div>

                <div className='flex justify-center items-center'>
                  <span className='text-[.9em]'>Coming soon</span>
                </div>
              </div>
          </div>

          <div className='bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00]  md:w-96 rounded-[20px] h-[16rem] md:h-[20rem] w-full px-4 py-2 md:p-6 flex flex-col justify-center gap-2 md:gap-4'>
              <div className='bg-[#ffa638] rounded-[40px] w-16 h-16 md:w-20 md:h-20 flex justify-center items-center'> 
                <div className='rounded-[40px] bg-[#FE8C00] w-14 h-14 md:w-16 md:h-16 flex justify-center items-center'>
                  <CardIcon size='xl'/>
                </div>
              </div>
      
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[1.2em]">NFC Payment</h1>
                <p className="text-[.9em] flex flex-col font-light">
                  <span>Instant tap and pay solution with secure </span>
                  <span>interface.</span> 
                </p>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='bg-[#FFFFFF] rounded-full h-10 w-32 px-2 flex justify-between items-center gap-2 cursor-pointer hover:bg-[#f8dabf] duration-300 ease-in-out'>
                    <span className="flex items-center text-[.9em] text-[#FE8C00] px-2">Proceed</span> 
                    <div className='bg-[#935100] border border-[#754e1f] rounded-full w-8 h-8 flex justify-center items-center'> 
                      <FaArrowRight size={16} className=""/>
                    </div>   
                </div>

                <div className='flex justify-center items-center'>
                  <span className='text-[.9em]'>Coming soon</span>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurCards
