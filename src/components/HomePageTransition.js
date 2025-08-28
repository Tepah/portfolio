import React, {Children, cloneElement, isValidElement, useEffect, useState} from 'react';
import { motion as m } from 'framer-motion';


const PageTransition = ({ children }) => {
  const [showTransition, setShowTransition] = useState(true);

  return (
    <div className={"relative"}>
      {showTransition && (
        <m.div
          initial={{scale: 0}}
          animate={{scale: 20}}
          transition={{duration: 1.4}}
          exit={{width: 0, height: 0}}
          className="fixed border-white border-[150rem] z-50 left-0 transform -translate-x-1/2 -translate-y-1/2">
        </m.div>
      )}
      {showTransition && (
        <m.div
          initial={{scale: 0}}
          animate={{scale: 10}}
          transition={{duration: 1}}
          exit={{width: 0, height: 0}}
          className="fixed border-blue-500 border-[20rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        </m.div>
      )}
      {showTransition && (
        <m.div
          initial={{scale: 0}}
          animate={{scale: 10}}
          transition={{duration: 1.4, delay: 0.3}}
          exit={{width: 0, height: 0}}
          className="fixed border-blue-500 border-[10rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
          onAnimationComplete={() => setShowTransition(false)}>
        </m.div>
      )}

      <div className="absolute inset-0 z-40">
        {children}
      </div>
    </div>
  );
}


export default PageTransition;
