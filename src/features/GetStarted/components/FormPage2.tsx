"use client"
import React from 'react';
import { Input } from '@app/components/base/input';

const Page2 = ({ onNext, formData, setFormData }) => {

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
            <span className='pl-1 text-[.9em] text-gray-700'>Faculty</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="faculty" value={formData.faculty} onChange={handleChange} placeholder="Enter faculty" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Department</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="dept" value={formData.dept} onChange={handleChange} placeholder="Enter dapartment" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Matric number</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="matric" value={formData.matric} onChange={handleChange} placeholder="Enter matric number" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Level</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="level" value={formData.level} onChange={handleChange} placeholder="Enter level" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Year of admission</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="number" name="yoa" value={formData.yoa} onChange={handleChange} placeholder="Enter year of admission" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Upload passport</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="number" name="passport" value={formData.passport} onChange={handleChange} placeholder="Tap to upload" />
          </div>

      </div>


      <div className='w-full flex justify-center items-center'>
        <button 
          className='bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00] 
                      px-16 py-4 text-white text-medium text-[1em] rounded-full'
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page2;
