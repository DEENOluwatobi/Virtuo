import React, { ReactNode } from 'react';

interface HeaderBackgroundProps {
  children: ReactNode;
  className?: string;
}

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ children, className }) => {
  return (
    <div className={`w-full h-full`}>
      <div className={`${className} ballContainer w-full overflow-hidden`}>

        {/* floating Balls start - find code in styles/index.css */}
        <div className='ball-1 z-10'></div> 
        <div className='ball-2 z-10 hidden md:flex'></div>
        <div className='ball-3 z-10'></div>
        {/* floating Balls ends*/}

        <div className={`headerbg w-full h-full absolute z-50`}>
          {children}
        </div>

      </div>
    </div>
  );
};

export default HeaderBackground;
