import { Button } from '@app/components/base/button';
import React from 'react';
import StudentTable from './StudentTable';

function UserList() {
  
  return (
    <div className='w-full bg-white'>
        <div className='flex justify-between'>
          <h1 className="text-[1em] font-[600] text-gray-800 font-Poppins py-2">User List</h1>
          <Button className='border-[#e2e1e1] h-7 text-gray-800 text-[.8em] font-medium bg-[#EDEDF2] rounded border hover:bg-[#EDEDF2]'>See All</Button>
        </div>
        <div>
          <StudentTable/>
        </div>
    </div>
  )
}

export default UserList