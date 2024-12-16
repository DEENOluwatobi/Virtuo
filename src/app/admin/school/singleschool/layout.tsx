"use client";
import React from 'react';
import { Inter } from "next/font/google";
import "../../../../styles/index.css";
import { Providers } from "../../../providers";
import { LiaUsersSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import Link from 'next/link';
import { TbEdit } from "react-icons/tb";
const inter = Inter({ subsets: ["latin"] });

  export default function RootLayout({children}: { children: React.ReactNode }) {
  
  const [ active, setActive ] = React.useState("students");
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActive(tab);
  };

  return (

      <div className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
          <Providers>

            <div className='w-full flex flex-col gap-4 p-4'>
              <div className='flex gap-4'>
                <div>
                    <h1 className='font-medium text-xl'>Access Comprehensive College</h1>
                    <div className='flex justify-between w-72 mt-1 '>
                      <p className='text-[#828282] text-sm mt-1'>Ogun State</p>
                      <div className="border-r-2 border-[#00000033] h-6"></div>
                      <p className='text-[#828282] text-sm mt-1'>Secondary School</p>
                      <div className="border-r-2 border-[#00000033] h-6"></div>
                      <div className='rounded-[1rem] bg-[#E7F6EC] px-2 w-16 gap-2'>
                        <p className='text-[#0F973D]'>Active</p>
                      </div>
                    </div>
                </div>
                <div className='mt-2 bg-[#FFF1E1] w-6 h-6 p-1 '>
                  <TbEdit color='#FF6B00'/>
                </div>

              </div> 
              
              <div className="w-full">
                <div className='w-[350px] border-[1px] border-gray-300 rounded-[10px] h-10 grid grid-cols-3 p-0 overflow-hidden'>
                  <Link href='/admin/school/singleschool' onClick={() => handleTabChange('students')} className={`${active === 'students' ? 'bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white' : ''} col-span-1 flex items-center gap-2 w-full h-full text-[.8em] justify-center`}>
                    <LiaUsersSolid className={`${active === 'students' ? 'text-white' : 'text-gray-800'} text-[1.5em]`}/>
                    <span className={`${active === 'students' ? 'text-white' : 'text-gray-800'}`}>Students</span>
                  </Link> 
                   

                  <Link href='/admin/school/singleschool/teachers' onClick={() => handleTabChange('teachers')}  className={`${active === 'teachers' ? 'bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white' : ''} col-span-1 flex items-center gap-2 w-full h-full text-[.8em] justify-center  border-x-2 border-gray-300`}>
                    <PiUsersLight className={`${active === 'teachers' ? 'text-white' : 'text-gray-800'} text-[1.5em]`}/>
                    <span className={`${active === 'teachers' ? 'text-white' : 'text-gray-800'}`}>Teachers</span>
                  </Link>

                  <Link href='/admin/school/singleschool/courses' onClick={() => handleTabChange('courses')} className={`${active === 'courses' ? 'bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white' : ''} col-span-1 flex items-center gap-2 w-full h-full text-[.8em] justify-center`}>
                    <LiaUsersSolid className={`${active === 'courses' ? 'text-white' : 'text-gray-800'} text-[1.5em]`}/>
                    <span className={`${active === 'courses' ? 'text-white' : 'text-gray-800'}`}>Courses</span>
                  </Link> 
                </div>
              </div>
              
              <div className="w-full h-full">
                {children}
              </div>
            </div>

          </Providers>
      </div>
  );
}
