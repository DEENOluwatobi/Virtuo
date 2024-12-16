import React from 'react'
import { Metadata } from 'next'
import Header from '@app/features/LandingPage/components/Header'
import Subscribe from '@app/features/LandingPage/components/Subscribe'
import Footer from '@app/features/LandingPage/components/Footer'
import BodyLayout from '@app/features/GetStarted/components/BodyLayout'
import FormContainer from '@app/features/GetStarted/components/FormContainer'
import Heading from '@app/features/GetStarted/components/Heading'

export const metadata: Metadata = {
  title: "Get Started With Virtuo",
  description: "",
  // other metadata
};

const page = () => {
  return (
    <div>
        <BodyLayout>
          <Header/>
          <Heading/>
          <FormContainer/>
        </BodyLayout>
        
      <Subscribe/>
      <Footer/>
    </div>
  )
}


export default page