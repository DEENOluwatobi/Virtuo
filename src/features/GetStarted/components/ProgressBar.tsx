import React from 'react';

const ProgressBar = ({ currentPage, steps }: { currentPage: number, steps: string[] }) => {

  return (
    <div className="w-full flex flex-col gap-4 ">

      <div className='mx-auto relative w-[80%] bg-gray-400 h-[2px]'>
        <div className="h-[2px] bg-orange-500 max-w-full" style={{ width: `${(currentPage / (steps.length - 1)) * 100}%` }}></div>
        <div className='absolute -bottom-[9px] left-0 w-full flex justify-between items-center'>
          <div className='w-5 h-5 rounded-full bg-orange-500'></div>
          <div className={`${currentPage >= 1 ? 'bg-orange-500' : 'bg-gray-400'} w-5 h-5 rounded-full`}></div>
          <div className={`${currentPage >= 2 ? 'bg-orange-500' : 'bg-gray-400'} w-5 h-5 rounded-full`}></div>
        </div>
      </div>
      
    </div>
  );
};

export default ProgressBar;


