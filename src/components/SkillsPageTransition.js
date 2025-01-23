import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [showTransition, setShowTransition] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {showTransition && (
        <div className="flex flex-col">
          <m.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className={`fixed w-screen h-screen backdrop-opacity-0 z-50 flex flex-col items-center justify-center ${isMobile ? 'text-center' : ''}`}
          >
            <h1 className={`text-${isMobile ? '[6rem]' : '[14rem]'} text-blue-500`}>Here are</h1>
            <h1 className={`text-${isMobile ? '[6rem]' : '[14rem]'} text-blue-500`}>
              <span className="text-white">Pete</span>'s skills
            </h1>
          </m.div>
          <m.div
            initial={{ width: 0, height: 0 }}
            animate={{ width: '650rem', height: '650rem' }}
            transition={{ duration: 1.5 }}
            exit={{ width: 0, height: 0 }}
            className="fixed rounded-full border-blue-500 border-[150rem] z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onAnimationComplete={() => setShowTransition(false)}
          />
        </div>
      )}
      <div className="absolute inset-0 z-40">{children}</div>
    </div>
  );
};

export default PageTransition;
