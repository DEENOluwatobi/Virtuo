import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import { Button } from "@app/components/base/button";
import { Card } from '@app/components/base/card';
import Image from 'next/image';
import Whitelogo from "public/images/Vlogo.svg";
import qr from "public/images/qr-code 1.png";
import net from "public/images/lucide_nfc.png";
import { FiDownload } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
const NfcCard = () => {
  const Cards = [
    {
      id:1,
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "OGINNI",
      lastName:"Laughter",
      reg:"Reg: 249607894",
      web:"virtuo.virtuobusiness.com/oginnil"
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center mt-7'>
      <Card className='w-80 rounded-[8px] h-full'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={Whitelogo} alt='logo' className="h-10" />
          <h1 className='text-[#5746AF] text-xs font-semibold'>Virtuo Group of School</h1>
          <div className='mt-5'>
          {
            Cards.map((card) =>(
              <div key={card.id}>
                <div className='border border-[#5746AF] w-[170px] h-[160px]'>
                <Image src={card.img} alt="card" width={100} height={100} className='object-cover w-full h-full' />
                </div>
                <h1 className='capitalize text-[#2B2A31] text-xl my-3 '>
                  <span className='font-bold'>{card.name}</span>{" "}
                <span>{card.lastName}</span>
                </h1>
                <p className='text-[#2B2A31] font-medium text-xs text-center'>{card.reg}</p>
                <p className='text-[#2B2A31] font-medium text-xs my-5 text-center'>{card.web}</p>
              </div>
            ))
          }
          </div>
          
        </div>
        <div className='bg-[#5746AF] flex justify-between items-center h-24 px-2'>
            
            <div className='border border-[#5746AF] w-[50px] h-[50px]'>
                <Image src={net} alt='' width={50} height={50} className='object-cover w-full h-full'/>
                </div>
           <div className='border border-white p-2'>
           <BsQrCode size={50} color='white'/>
           </div>
        </div>
      </Card>
      <Button className='bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] flex flex-row justify-center items-center p-2 gap-2 w-40 h-12 rounded-[8px] text-white mt-5'>
          <FiDownload />Download
          </Button>
    </div>
  )
}

export default NfcCard