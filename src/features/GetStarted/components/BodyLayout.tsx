import React, { ReactNode } from 'react';

interface BodyLayoutProps {
  children: ReactNode;
  className?: string;
}

const BodyLayout: React.FC<BodyLayoutProps> = ({ children, className }) => {
  return (
      <div className={`${className} ballContainer w-full overflow-hidden h-full`}>

        {/* floating Balls start - find code in styles/index.css */}
        <div className='ball-1 z-10'></div> 
        <div className='ball-3 z-10 '></div>
        <div className='ball-2 z-10 hidden md:flex'></div>
        {/* floating Balls ends*/}

        
        <div className='headerbg relative z-50'>
          {children}
        </div>
      </div>
  );
};

export default BodyLayout;
