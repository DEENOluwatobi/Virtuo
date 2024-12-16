import React from 'react'

const AboutHero = () => {

  return (
    <div className='w-full flex flex-col gap-5 md:gap-10 py:10 md:py-20'>
      <div className='text-white h-full w-[95%] md:w-[90%] mx-auto flex flex-col gap-6'>
        <p className="text-center md:text-start">Welcome to Virtuoservices</p>
        <div className='flex flex-col md:flex-row md:justify-between w-full gap-5'>
          <h1 className='md:w-[60%] md:text-6xl text-3xl font-medium text-center md:text-start'>Where innovation meets efficiency in the realm of business solutions</h1>
          <p className='md:w-[40%] text-lg font-light text-gray-300 text-center md:text-start'>At Virtuoservices, we are dedicated to leveraging cutting-edge technology to streamline and enhance various business activities, making them more accessible, efficient, and secure.</p>
        </div>
      </div>

      <div className="text-[1em] font-light flex flex-col gap-5 text-gray-200 w-[95%] md:w-[90%] mx-auto text-center md:text-start">
        <p>Our primary focus is on revolutionizing the way payments are made in Nigeria and beyond. We aim to replace traditional debit cards with our advanced NFC (Near Field Communication) technology. Introducing our flagship NFC card, Virtuocard, we provide a seamless and secure alternative to conventional payment methods, empowering individuals and businesses to transact with ease.</p>
        <p>In addition to our vision for transforming the financial landscape, we are committed to revolutionizing other sectors, including education. Our innovative solutions extend to tertiary institutions, where Virtuocard serves as a comprehensive solution for identification, attendance tracking, and payment systems. By implementing NFC technology in educational institutions, we aim to streamline administrative processes, enhance security, and improve the overall campus experience for students and staff alike.</p>
        <p>Moreover, we specialize in creating dynamic business cards equipped with QR codes and NFC capabilities. These innovative business cards not only serve as a professional introduction but also provide a gateway to digital networking and information exchange, enabling professionals to connect and engage effortlessly in today's fast-paced business environment.</p>
      </div>
    </div>
  )
}

export default AboutHero
