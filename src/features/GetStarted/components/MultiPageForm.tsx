"use client"
import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Page1 from './FormPage1';
import Page2 from './FormPage2';
import Page3 from './FormPage3';
import SubmissionSuccess from './SubmissionSuccess';

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    state: '',
    lga: '',
    sex: '',
    phone: '',
    faculty: '',
    dept: '',
    matric: '',
    level: '',
    yoa: '',
    passport: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = () => {
    setCurrentPage(currentPage + 1);
    console.log(formData); 
  };

  const steps = [
    'Personal information', 
    'School information', 
    'Social information'
  ];

  return (
    <div className="w-full flex flex-col items-center gap-5 md:gap-10 py-3 md:py-6 px-3 md:px-6">

      <div className='w-full flex flex-col gap-1'>
        <div className='w-[90%] h-auto p-5 md:w-[60%] mx-auto overflow-x-hidden'>
          <ProgressBar currentPage={currentPage} steps={steps}/>
        </div>

        <div className="mx-auto w-full md:w-[70%] pl-1 flex justify-between items-center text-xs text-gray-600">
          {steps.map((step, index) => (
            <div key={index} className={`w-full text-center px-2 md:px-0 ${index < (currentPage + 1) ? 'text-orange-500' : ''} `}>
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className='w-full'>
        {currentPage === 0 && <Page1 onNext={handleNext} formData={formData} setFormData={setFormData} />}
        {currentPage === 1 && <Page2 onNext={handleNext} formData={formData} setFormData={setFormData} />}
        {currentPage === 2 && <Page3 onNext={handleSubmit} formData={formData} setFormData={setFormData} />}
        {currentPage === 3 && <SubmissionSuccess/>}
      </div>

    </div>
  );
};

export default IndexPage;
