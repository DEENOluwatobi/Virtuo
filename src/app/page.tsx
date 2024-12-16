import { Metadata } from "next";

import React from "react";
import HeaderBackground from "@app/features/LandingPage/components/HeaderBackground";
import Header from "@app/features/LandingPage/components/Header";
import HeroSection from "@app/features/LandingPage/components/HeroSection";
import OurCards from "@app/features/LandingPage/components/OurCards";
import Solutions from "@app/features/LandingPage/components/Solutions";
import Tracking from "@app/features/LandingPage/components/Tracking";
import ConPayment from "@app/features/LandingPage/components/ConPayment";
import CustomSolution from "@app/features/LandingPage/components/CustomSolution";
import Reviews from "@app/features/LandingPage/components/Reviews";
import Subscribe from "@app/features/LandingPage/components/Subscribe";
import Footer from "@app/features/LandingPage/components/Footer";

export const metadata: Metadata = {
  title: "Virtuo",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <div className='w-full'>

      <HeaderBackground className="h-[600px] sm:h-[650px] md:h-[1000px] lg:h-screen">
        <Header/>
        <HeroSection/>
      </HeaderBackground>

      <div className='w-full overflow-hidden'>
        <OurCards/>
        <Solutions/>
        <Tracking/>
        <ConPayment/>
        <CustomSolution/>
        <Reviews/>
        <Subscribe/>
        <Footer/>
      </div>

    </div>
  )
}
