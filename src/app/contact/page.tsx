import React from 'react'
import { Metadata } from 'next'
import Header from "@app/features/LandingPage/components/Header";
import Footer from "@app/features/LandingPage/components/Footer";
import Subscribe from "@app/features/LandingPage/components/Subscribe";
import ContactHero from '@app/features/ContactUs/components/ContactHero';
import ContactForm from '@app/features/ContactUs/components/ContactForm';
import BodyLayout from '@app/features/GetStarted/components/BodyLayout';

export const metadata: Metadata = {
  title: "Contact Us | Virtuo",
  description: "",
  // other metadata
};

const page = () => {
  return (
    <div className='w-full'>
      <BodyLayout>
        <Header/>
        <ContactHero />
        <ContactForm />
      </BodyLayout>
      <div className='w-full overflow-hidden'>
        <Subscribe />
        <Footer/>
      </div>
    </div>
  )
}

export default page