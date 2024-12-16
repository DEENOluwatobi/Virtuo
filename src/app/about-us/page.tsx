import React from 'react'
import { Metadata } from 'next'
import Header from "@app/features/LandingPage/components/Header";
import Footer from "@app/features/LandingPage/components/Footer";
import AboutHero from "@app/features/AboutUs/components/AboutHero";
import Subscribe from "@app/features/LandingPage/components/Subscribe";
import CustomSolution from "@app/features/AboutUs/components/CustomSolution";
import VibrantTeam from '@app/features/AboutUs/components/VibrantTeam';
import BodyLayout from '@app/features/GetStarted/components/BodyLayout';

export const metadata: Metadata = {
  title: "About Us | Virtuo",
  description: "",
  // other metadata
};

const page = () => {
  return (
    <div className='w-full'>
      <BodyLayout>
        <Header/>
        <AboutHero />
      </BodyLayout>
      <div className='w-full overflow-hidden'>
      <CustomSolution/>
      <VibrantTeam />
        <Subscribe />
        <Footer/>
      </div>
    </div>
  )
}

export default page