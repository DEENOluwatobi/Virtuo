"use client"
import React from "react";
import logo from "public/images/Vlogo.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import { BellIcon, Logout } from "public/icons";

const Header = () => {

  const [ menu, setMenu ] = React.useState(false);

  return (
    <div className="w-full h-[65px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div className="flex justify-start w-full items-center ">
        <Link href="/dashboard">
          <Image src={logo} alt='logo' className="w-8"/>
        </Link>
        <div className="flex justify-start items-center gap-2 mt-2">
          <span className="text-[#001118] text-[1.1em] font-semibold">Virtuo</span>
          <span className="text-[#000000] text-[.6em] mt-1">Attendance</span>
        </div>
      </div>

      <div className="flex items-center w-full justify-end gap-10">
          <div className="relative w-[21px] h-[23px]">
              <span className="absolute top-0 right-0 z-10 h-2 w-2 bg-[#FF6B00] rounded-full"></span>
              <BellIcon/>
          </div>

          <div className="relative flex gap-2 items-center justify-center cursor-pointer" onClick={()=>setMenu(!menu)}>
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFufGVufDB8fDB8fHww"
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
                <span className="text-[.6em] text-[#4F4F4F]">Good Afternoon!</span>
                <span className="capitalize font-semibold text-[#333333] text-[.8em]">
                  Olaniyan Olayinka
                </span>
            </div>

            {
              menu && (
                <motion.div
                initial={{ opacity: 0, y: "-20%" }}
                animate={{ opacity: 1, y: "0" }}
                exit={{ opacity: 0, y: "-20%" }}
                className='absolute top-12 right-0 z-[99] w-[150px] px-2 py-2 flex flex-col gap-2 bg-white rounded-lg shadow-md shadow-gray-300 border-[1px] border-gray-100'
                >
                  <button className='flex gap-2 items-center justify-center bg-orange-500 w-full py-2 rounded-[8px]'>
                    <Logout size='md' className='[&>path]:fill-[#FFFFFF]'/>
                    <span className='font-medium text-[.8em] text-white'>Logout</span> 
                  </button>
                </motion.div>
              )    
            } 

          </div>

              
      </div>
    </div>
  );
};

export default Header;
