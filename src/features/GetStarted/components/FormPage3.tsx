"use client"
import React from 'react';
import { Input } from '@app/components/base/input';

const Page3 = ({ onNext, formData, setFormData }) => {

  const style = {
    formInput: {
      width: '100%',
      height: '50px',
      border: '2px solid lightgray',
      borderRadius: '8px',
      padding: '10px',
      outline: 'none',
      fontSize: '.9em',
    }
  }
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full flex flex-col items-center gap-10">
      
      <div className='w-full flex flex-col gap-4'>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Facebook</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Enter facebook link" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Twitter</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Enter twitter link" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Instagram</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="Enter instagram link" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>LinkedIn</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Enter linkedin link" />
          </div>

      </div>


      <div className='w-full flex justify-center items-center'>
        <button 
          className='bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00] 
                      px-16 py-4 text-white text-medium text-[1em] rounded-full'
          onClick={onNext}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page3;
