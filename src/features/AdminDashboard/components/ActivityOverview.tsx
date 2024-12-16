import { Button } from '@app/components/base/button'
import React from 'react'
import { IoEllipseSharp } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

const ActivityOverview:React.FC = () => {

  const attendanceData = [
    { avatarSrc: '/images/Image (2).png', courseCode: 'CMP101', date: '15/05/2024', time: '10:15 AM' },
    { avatarSrc: '/images/Image (2).png', courseCode: 'CMP102', date: '16/05/2024', time: '11:00 AM' },
    { avatarSrc: '/images/Image (2).png', courseCode: 'CMP102', date: '16/05/2024', time: '11:00 AM' },
    { avatarSrc: '/images/Image (2).png', courseCode: 'CMP102', date: '16/05/2024', time: '11:00 AM' },
    { avatarSrc: '/images/Image (2).png', courseCode: 'CMP102', date: '16/05/2024', time: '11:00 AM' },
  ];

  const attendanceItems = attendanceData.map((data, index) => (
    <div key={index} className='flex justify-between items-center py-[5px]'>
      <div className='flex'>
        <img src={data.avatarSrc} alt="" className="w-9 h-9" />
        <div className='ml-2'>
          <p className='text-[.7em] font-medium text-[#141414] mb-1'>{`${data.courseCode} mark attendance`}</p>
          <div className='flex justify-around text-[#828282] text-[.6em] font-light'>
            <p>{data.courseCode}</p>
            <IoEllipseSharp color='black' className='mt-1 mx-1' size={5} />
            <p>{data.date}</p>
            <IoEllipseSharp color='black' className='mt-1 mx-1' size={5} />
            <p>{data.time}</p>
          </div>
        </div>
      </div>
      
      <div className='mt-2'>
        <FiChevronRight color='darkgray' size={20} />
      </div>
    </div>
  ));

  return (
    <div className="bg-white h-[20.5rem] flex flex-col gap-2">
      <h1 className="text-[1em] font-[600] text-gray-800 font-Poppins py-2">User activity overview</h1>
      <div className='px-2 py-2 border-[1px] border-gray-200 rounded-[8px] w-full'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-700 text-[.9em] font-medium'>Activities</p>
            <Button className='border-[#e2e1e1] h-7 text-gray-800 text-[.8em] font-medium bg-[#EDEDF2] rounded border hover:bg-[#EDEDF2]'>See All</Button>
          </div>
          <div>{attendanceItems}</div>
      </div>
    </div>
  )
}

export default ActivityOverview