"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import VirtuoPurple from "public/images/Cards.svg";
import { BlueCard, OrangeCard } from "./ColorCards";

const HeroSection = () => {

  return (
    <div className='text-white w-full h-full'>
      <div className='text-white pt-10 md:pt-20 w-full h-full flex flex-col justify-between'>
        <div className='w-full'>
          <h1 className='w-[95%] md:w-[80%] lg:flex flex-col gap-2 mx-auto font-semibold text-center text-2xl md:text-4xl'>
            <span>Experience Unparalleled Access Control and </span>
            <span>Effortless Operations with <span className="text-[#FF6B00]">VirtuoCard NFC</span> Solutions</span>
          </h1>
          <p className='mx-auto w-[98%] md:w-[50%] text-center text-[#BDBDBD] text-sm mt-5 px-2 lg:flex lg:flex-col'>
            <span>By simply tapping their NFC-enabled cards or devices, individuals can gain access to </span>
            <span>secure areas, mark attendance, make payments, or authenticate transactions with ease.</span>
          </p>
        </div>

        <div className='flex w-full justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 100, z:10, }}
            animate={{ opacity: 1, y: 0, z:10, }}
            transition={{ duration: 0.5, delay: 0 }}
            className='relative w-full h-full flex justify-center z-10'
          >
            <Image src={VirtuoPurple} alt='' className='md:w-[45%] w-[60%]'/> 
          </motion.div>

          {/*----------- FOR LARGER SCREENS ------------*/}
          <motion.div
            initial={{ opacity: 0, x: -200, y:200, z:0, rotate:60}}
            animate={{ opacity: 1, x: -450, y:200, z:0, rotate:5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='absolute w-full h-full hidden md:flex justify-center'
          >
            <div className=''>
              <OrangeCard/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200, y:200, z:0, rotate:-60}}
            animate={{ opacity: 1, x: 450, y:200, z:0, rotate:-5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='absolute w-full h-full hidden md:flex justify-center'
          >
            <div className=''>
              <BlueCard/>
            </div>
          </motion.div>

          {/*----------- FOR SMALLER SCREENS ------------*/}
          <motion.div
            initial={{ opacity: 0, x: 120, y:-120, z:0, rotate:260}}
            animate={{ opacity: 1, x: 80, y:-130, z:0, rotate:260 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='absolute w-full h-full flex md:hidden justify-center'
          >
            <div className=''>
              <OrangeCard/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 320, y:-40, z:0, rotate:-80}}
            animate={{ opacity: 1, x: 360, y:-50, z:0, rotate:-80 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='absolute w-full h-full flex md:hidden justify-center'
          >
            <div className=''>
              <BlueCard/>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default HeroSection;
