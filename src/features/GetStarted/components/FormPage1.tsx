"use client"
import React from 'react';
import { Button } from '@app/components/base/button';
import { Input } from '@app/components/base/input';

const Page1 = ({ onNext, formData, setFormData }) => {

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
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
              <div className='w-full md:w-[50%] flex flex-col'>
                <span className='pl-1 text-[.9em]'>First name</span>
                <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name" />
              </div>

              <div className='w-full md:w-[50%] flex flex-col'>
                <span className='pl-1 text-[.9em] text-gray-700'>Last name</span>
                <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name" />
              </div>
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Date of birth</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Enter date of birth" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>State of origin</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter state of origin" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Local government</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="lga" value={formData.lga} onChange={handleChange} placeholder="Enter local government area" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Sex</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="text" name="sex" value={formData.sex} onChange={handleChange} placeholder="Enter sex" />
          </div>

          <div className='flex flex-col'>
            <span className='pl-1 text-[.9em] text-gray-700'>Phone number</span>
            <Input className="placeholder:text-gray-300" style={style.formInput} type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
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

export default Page1;
