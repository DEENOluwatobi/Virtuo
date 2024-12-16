import React from 'react';
import Whitelogo from "public/images/Mask group.png";
import Link from 'next/link';
import Image from 'next/image';
import { TbDashboard } from "react-icons/tb";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { CiLock } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FiTool } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@app/components/base/accordion"
import { FaFileInvoiceDollar } from "react-icons/fa6";

const SideNav = () => {
  const [ activeTab, setActiveTab ] = React.useState('dashboard');
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
            <div className='bg-white border-r-[2px] border-gray-200 col-span-1 h-[calc(100vh-65px)] flex flex-col justify-between items-start px-2 py-4 overflow-hidden'>
              <div className='flex flex-col gap-2'>
                <Link href="/admin"
                onClick={() => handleTabChange('dashboard')}
                className={`${activeTab === 'dashboard' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`} 
                  >
                      <TbDashboard className='text-[1.5em]'/>
                      Dashboard
                  </div>
                </Link>

                <Link href="/admin/user"
                onClick={() => handleTabChange('user')} 
                className={`${activeTab === 'user' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`} 
                  >
                    <LiaUserFriendsSolid className='text-[1.5em]'/>
                      User Management
                  </div>
                </Link>

                <Link href="/admin/course"
                onClick={() => handleTabChange('course')} 
                className={`${activeTab === 'course' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}
                  >
                      <HiOutlineBookOpen className='text-[1.5em]'/>
                      Course
                  </div>
                </Link>

                <Link href="/admin/school"
                onClick={() => handleTabChange('school')}
                className={`${activeTab === 'school' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}
                  >
                       <LiaUserFriendsSolid className='text-[1.5em]'/>
                      School
                  </div>
                </Link>

                <Link href="/admin/attendance"
                onClick={() => handleTabChange('attendance')}
                className={`${activeTab === 'attendance' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}
                  >
                      <LiaUserFriendsSolid className='text-[1.5em]'/>
                      Attendance
                  </div>
                </Link>

                {/* <Link href="/admin/feature"
                onClick={() => handleTabChange('feature')} 
                className={`${activeTab === 'feature' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}
                  >
                      <CiLock className='text-[1.5em]'/>
                      Feature management
                  </div>
                </Link>

                <Link href="/admin/settings"
                onClick={() => handleTabChange('settings')} 
                className={`${activeTab === 'settings' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                  className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}
                  >
                    <FiTool className='text-[1.5em]'/>
                    Settings
                  </div>
                </Link> */}


                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className='border-none '>
                  <AccordionTrigger 
                  className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center text-gray-600 hover:no-underline`}
                  >
                    <FiTool className='text-[1.5em]'/>
                    Students Management
                  </AccordionTrigger>
                    <Link href="/admin/allstudent"
                      onClick={() => handleTabChange('student')} 
                      
                      >
                        <AccordionContent className={`${activeTab === 'student' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px] text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}>
                        All Students
                        </AccordionContent>
                    </Link>
                    <Link href="/admin/card"
                      onClick={() => handleTabChange('card')} 
                      
                      >
                        <AccordionContent className={`${activeTab === 'card' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px] text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}>
                        Student NFC Card
                        </AccordionContent>
                    </Link>
                    <Link href="/admin/promote"
                      onClick={() => handleTabChange('promote')} 
                      
                      >
                        <AccordionContent className={`${activeTab === 'promote' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px] text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}>
                        Promote student
                        </AccordionContent>
                    </Link>
                  </AccordionItem>
                </Accordion>
                <Link href="/admin/class"
                onClick={() => handleTabChange('class')} 
                className={`${activeTab === 'class' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px]`}
                >
                  <div 
                    className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`} 
                  >
                    <HiOutlineBookOpen className='text-[1.5em]'/>
                      Classes
                  </div>
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className='border-none '>
                  <AccordionTrigger 
                  className={`text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center text-gray-600 hover:no-underline`}
                  >
                    <FaFileInvoiceDollar  className='text-[1.5em]'/>
                    Staff management
                  </AccordionTrigger>
                    <Link href="/admin/allstaff"
                      onClick={() => handleTabChange('student')} 
                      
                      >
                        <AccordionContent className={`${activeTab === 'student' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px] text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}>
                        All Staff
                        </AccordionContent>
                    </Link>

                    <Link href="/admin/staffattendance"
                      onClick={() => handleTabChange('staffattendance')}>
                        <AccordionContent className={`${activeTab === 'staffattendance' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px] text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}>
                        Attendance
                        </AccordionContent>
                    </Link>
                    <Link href="/admin/card"
                      onClick={() => handleTabChange('card')} 
                      
                      >
                        <AccordionContent className={`${activeTab === 'card' ? 'text-orange-500 bg-[#f46e152a]' : 'text-gray-600'} rounded-[8px] text-[.8em] font-medium flex px-2 py-2 gap-2 w-full justify-start items-center`}>
                        Staff NFC Card
                        </AccordionContent>
                    </Link>
                  </AccordionItem>
                </Accordion>
            </div> 

            <div className={`w-full bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] rounded-[6px] h-24`}>
                <div className="w-full flex flex-col justify-end p-2">
                    <Image src={Whitelogo} alt='logo' className="h-16" />
                    <p className="text-white text-xs">Version 1.0</p>
                </div>
            </div> 
          </div>
    </div>
  )
}

export default SideNav