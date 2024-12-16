"use client";
import React from 'react';
import "../../../styles/index.css";
import { LiaUsersSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@app/components/base/tabs';
import UserStudents from '@app/features/AdminDashboard/components/UserStudents';
import UserLecturers from '@app/features/AdminDashboard/components/UserLecturers';

const usePage = () => {

  const [ active, setActive ] = React.useState("students");
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActive(tab);
  };

  return (
    <>
      <Tabs defaultValue='students' className='w-full flex flex-col gap-4 p-4'>
        <TabsList className="w-full flex justify-start">
          <div className='w-[350px] border-[1px] border-gray-300 rounded-[10px] h-10 grid grid-cols-2 p-0 overflow-hidden'>
            <TabsTrigger value='students' onClick={() => handleTabChange('students')} className={`${active === 'students' ? 'bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white' : ''} col-span-1 flex items-center gap-2 w-full h-full text-[.8em] justify-center`}>
              <LiaUsersSolid className={`${active === 'students' ? 'text-white' : 'text-gray-800'} text-[1.5em]`}/>
              <span className={`${active === 'students' ? 'text-white' : 'text-gray-800'}`}>Students</span>
            </TabsTrigger>  

            <TabsTrigger value='lecturers' onClick={() => handleTabChange('lecturers')}  className={`${active === 'lecturers' ? 'bg-gradient-to-r from-[#FF6B00] to-[#FE8C00] text-white' : ''} col-span-1 flex items-center gap-2 w-full h-full text-[.8em] justify-center`}>
              <PiUsersLight className={`${active === 'lecturers' ? 'text-white' : 'text-gray-800'} text-[1.5em]`}/>
              <span className={`${active === 'lecturers' ? 'text-white' : 'text-gray-800'}`}>Lecturer/Teachers</span>
            </TabsTrigger>
          </div>
        </TabsList>
        
        <div className="w-full h-full">
          <TabsContent value='students'>
            <UserStudents />
          </TabsContent>
          <TabsContent value='lecturers'>
            <UserLecturers />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}

export default usePage;