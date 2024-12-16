"use client";
import React from 'react';
import "../../../styles/index.css";
import { LiaUsersSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@app/components/base/tabs';
import Profile from '@app/features/AdminDashboard/components/Profile';
import Sessions from '@app/features/AdminDashboard/components/Sessions';
import Image from 'next/image';
import Department from '@app/features/AdminDashboard/components/Department';
import Faculty from '@app/features/AdminDashboard/components/Faculty';
import Promotion from '@app/features/AdminDashboard/components/Promotion';

const usePage = () => {

  const [ active, setActive ] = React.useState("profile");
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActive(tab);
  };
  const img = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <>
      <Tabs defaultValue='profile' className='w-full flex flex-row gap-4 p-4'>
          <div className='w-80'>
            <div className='mb-4'>
              <h1 className='text-black text-xl font-medium'>Settings</h1>
              <p className='text-[#475367] text-xs'>Edit profile and make changes to admin</p>
            </div>
            <div className='border border-[#DDDDE3] w-80 h-80 flex flex-col'>
              <div className='flex flex-row justify-start gap-4 p-3'>
                <div className='w-[50px] h-[50px] rounded-full shadow-sm shadow-gray-200 overflow-hidden'>
                  <Image 
                    src={img} 
                    alt="image" 
                    width={100}
                    height={100}
                    className='object-cover w-[50px] h-full'
                  />
                </div>
                <div className='font-medium flex flex-col mt-2'>
                  <h1 className='text-[#343434]  text-sm'>John Doe</h1>
                  <p className='text-[#676767] text-xs'>NL-495946964GH</p>
                </div>
              </div>
              <div className='border-b-2 border-[#EDEDF2] pb-2 w-80'>

              </div>
              <TabsList className='flex flex-col gap-2 mt-2 h-72'>
                <TabsTrigger value='profile' onClick={() => handleTabChange('profile')} className={`${active === 'profile' ? 'bg-gradient-to-r from-[#FFF1E1] to-[#FFF1E1] text-[#FF6B00]' : ''} flex justify-start w-72 h-9 text-[.8em]`}>
                  <span className={`${active === 'profile' ? 'text-[#FF6B00]' : 'text-[#828282]'}`}>Profile</span>
                </TabsTrigger>  

                <TabsTrigger value='sessions' onClick={() => handleTabChange('sessions')}  className={`${active === 'sessions' ?  'bg-gradient-to-r from-[#FFF1E1] to-[#FFF1E1] text-[#FF6B00]' : ''}  flex justify-start w-72 h-9 text-[.8em]`}>
                  <span className={`${active === 'sessions'  ? 'text-[#FF6B00]' : 'text-[#828282]'}`}>Sessions</span>
                </TabsTrigger>
                <TabsTrigger value='promotion' onClick={() => handleTabChange('promotion')}  className={`${active === 'promotion' ?  'bg-gradient-to-r from-[#FFF1E1] to-[#FFF1E1] text-[#FF6B00]' : ''}  flex justify-start w-72 h-9 text-[.8em]`}>
                  <span className={`${active === 'promotion' ? 'text-[#FF6B00]' : 'text-[#828282]'}`}>Promotion</span>
                </TabsTrigger>
                <TabsTrigger value='faculty' onClick={() => handleTabChange('faculty')}  className={`${active === 'faculty' ?  'bg-gradient-to-r from-[#FFF1E1] to-[#FFF1E1] text-[#FF6B00]' : ''}  flex justify-start w-72 h-9 text-[.8em]`}>
                  <span className={`${active === 'faculty'  ? 'text-[#FF6B00]' : 'text-[#828282]'}`}>Faculty</span>
                </TabsTrigger>
                <TabsTrigger value='department' onClick={() => handleTabChange('department')}  className={`${active === 'department' ?  'bg-gradient-to-r from-[#FFF1E1] to-[#FFF1E1] text-[#FF6B00]' : ''}  flex justify-start w-72 h-9 text-[.8em]`}>
                  <span className={`${active === 'department'  ? 'text-[#FF6B00]' : 'text-[#828282]'}`}>Departments</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>        
          <div className="w-full h-full">
            <TabsContent value='profile'>
              <Profile />
            </TabsContent>
            <TabsContent value='sessions'>
              <Sessions />
            </TabsContent>
            <TabsContent value='promotion'>
              <Promotion />
            </TabsContent>
            <TabsContent value='faculty'>
              <Faculty />
            </TabsContent>
            <TabsContent value='department'>
              <Department />
            </TabsContent>        
          </div>
      </Tabs>
    </>
  );
}

export default usePage;