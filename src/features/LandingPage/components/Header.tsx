"use client"
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from "public/images/Logo.svg";
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { Menubar, MenubarMenu, MenubarTrigger } from '@app/components/base/menubar';

const Header = () => {

  const [menu, setMenu] = React.useState(false);
  const navLinks = [
    {
      id: 1,
      link: "Use case",
      url:"/"
    },
    {
      id: 2,
      link: "About us",
      url:'/about-us'
    },
    {
      id: 3,
      link: "Contact us",
      url:'/contact'
    },
  ];

  return (
    <div className='w-full flex justify-between items-center px-2 py-1 md:px-4 md:py-2'>
      <Link href="/">
        <Image src={logo} alt='logo'/>
      </Link>

      <Menubar className="px-6 py-5 hidden lg:flex justify-around gap-5 bg-opacity-20 bg-white rounded-full shadow-lg backdrop-filter backdrop-blur-sm border-2 border-white">
        <MenubarMenu>
          <MenubarTrigger className='text-white cursor-pointer'>
            <Link href='/'>Use Case</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className='text-white cursor-pointer'> <Link href='/about-us'>About us</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className='text-white cursor-pointer'> <Link href='/contact'>Contact Us</Link></MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      
      <Link href="/get-started" className='bg-[#FE8C00] rounded-full lg:flex hidden px-1 py-1 gap-2'>
        <div className="flex items-center text-white text-[1em] px-3">Get Started </div> 
        <div className='bg-[#935100] rounded-full w-10 h-10 flex justify-center items-center'> 
          <FaArrowRight size={20} className="text-white" /> 
        </div>   
      </Link>

      <div
      onClick={() => setMenu(!menu)}
      className="cursor-pointer pr-4 z-10 text-white lg:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <motion.div 
        className="flex flex-col gap-3 justify-center items-center absolute top-0 left-0 
          w-full h-[300px] md:h-[500px] bg-gradient-to-b from-black to-gray-800 text-white"
        >
          {navLinks.map(({ id, link, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-2 text-lg list-none"
            >
              <Link onClick={() => setMenu(!menu)} href={url}>
                {link}
              </Link>
            </li>
          ))}
          <Link href="/get-started">
          <div className='bg-[#FE8C00] rounded-full flex lg:hidden px-1 py-1 gap-2'>
            <div className="flex items-center text-white text-[1em] px-3">Get Started </div> 
            <div className='bg-[#935100] rounded-full w-10 h-10 flex justify-center items-center'> 
              <FaArrowRight size={20} className="text-white" /> 
            </div>
          </div>
          </Link>  
        </motion.div>
      )}

    </div>
  )
}

export default Header