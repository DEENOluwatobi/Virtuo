"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import VirtuoPurple from "public/images/Cards.svg";
import { BlueCard, OrangeCard } from "../LandingPage/components/ColorCards";
import Funaab from "public/images/Funaab.svg";
import logo from "public/images/Logo.svg";
import image from "public/images/Rectangle 4228.png";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TelephoneIcon, TwitterIcon } from "public/icons";

const Frame = ({ data }) => {
  console.log("frame",data)
  return (
    <div className='text-white w-full h-full'>
      <div className='text-white pt-2 w-full h-full flex flex-col justify-between'>
        <div className='w-full'>
          <div className='py-2 md:py-5 px-4 flex items-center justify-center gap-5'>
            <Image src={Funaab} alt=''/>
            <span className='font-semibold text-4xl text-white'>+</span>
            <Image src={logo} alt='' className="-ml-4"/>
          </div>

          <div className='w-full flex justify-center'>
            <div className="h-[300px] w-[300px] border-4 border-orange-500 rounded-[8px]">
              <Image src={image} alt='' className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="w-full flex justify-center flex-col items-center gap-1 my-4">
            <p className="text-2xl font-semibold flex gap-2">
              {data?.student.lastName}
              <span className="italic font-light">              {data?.student.firstName}</span>
            </p>
            <span>              {data?.student.matricNumber}</span>
          </div>

          <div className="w-full">
            <div className="w-[93%] sm:w-[60%] md:w-[50%] mx-auto my-2 px-2 py-2 md:px-4 bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00] rounded-[8px] text-white flex justify-between md:justify-evenly items-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[.9em] font-light">Level</span>
                <span className="text-[1.2em] font-medium">    {data?.student.level}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[.9em] font-light">Faculty</span>
                <span className="text-[1.2em] font-medium">COLANIM</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[.9em] font-light">Department</span>
                <span className="text-[1.2em] font-medium">APH</span>
              </div>
            </div>
          </div>

          <div className="w-[93%] sm:w-[60%] md:w-[50%] mx-auto my-2 py-2 flex justify-between md:justify-center md:gap-5 items-center">
            <div className="w-[70px] h-[70px] rounded-[8px] bg-blue-500 flex justify-center items-center">
              <FacebookIcon/>
            </div>
            <div className="w-[70px] h-[70px] rounded-[8px] bg-blue-300 flex justify-center items-center">
              <TwitterIcon/>
            </div>
            <div className="w-[70px] h-[70px] rounded-[8px] bg-orange-500 flex justify-center items-center">
              <InstagramIcon/>
            </div>
            <div className="w-[70px] h-[70px] rounded-[8px] bg-blue-600 flex justify-center items-center">
              <LinkedInIcon/>
            </div>
          </div>

          <div className="w-[93%] sm:w-[60%] md:w-[50%] mx-auto my-2 py-4 rounded-[8px] flex justify-center gap-2 items-center bg-white text-black cursor-pointer">
            <TelephoneIcon/>
            <span>Call {data?.student.firstName}</span>
          </div>
        </div>

        <div className="relative h-[200px] md:h-[500px] overflow-hidden items-start w-full flex">
                  <div className='flex w-full justify-center'>
                    <motion.div
                      initial={{ opacity: 0, y: 100, z:10, }}
                      animate={{ opacity: 1, y: 0, z:10, }}
                      transition={{ duration: 0.5, delay: 0 }}
                      className='relative w-full h-full flex justify-center z-10'
                    >
                      <Image src={VirtuoPurple} alt='' className='lg:w-[45%] w-[250px] sm:w-[400px] md:w-[600px] '/>
                    </motion.div>

                    {/*----------- FOR LARGER SCREENS ------------*/}
                    <motion.div
                      initial={{ opacity: 0, x: -200, y:200, z:0, rotate:60}}
                      animate={{ opacity: 1, x: -420, y:200, z:0, rotate:5 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className='absolute w-full h-full hidden md:flex justify-center'
                    >
                      <div className=''>
                        <OrangeCard/>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 200, y:200, z:0, rotate:-60}}
                      animate={{ opacity: 1, x: 420, y:200, z:0, rotate:-5 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className='absolute w-full h-full hidden md:flex justify-center'
                    >
                      <div className=''>
                        <BlueCard/>
                      </div>
                    </motion.div>

                    {/*----------- FOR SMALLER SCREENS ------------*/}
                    <motion.div
                      className='absolute top-16 -left-16 sm:top-[11rem] sm:-left-[11.5rem] w-full h-full flex md:hidden justify-center'
                    >
                      <div className='rotate-[255deg]'>
                        <OrangeCard/>
                      </div>
                    </motion.div>

                    <motion.div
                      className='absolute top-[4.7rem] -right-28 sm:top-[11rem] sm:-right-40 w-full h-full flex md:hidden justify-center'
                    >
                      <div className='rotate-[285deg]'>
                        <BlueCard/>
                      </div>
                    </motion.div>

                  </div>
        </div>
      </div>
    </div>
  )
}

export default Frame;
