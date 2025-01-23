import React, {Children, cloneElement, isValidElement, useEffect, useState} from 'react';
import { motion as m } from 'framer-motion';
import {useLocation, useNavigate} from "react-router-dom";

// Original fade out animation
// const PageTransition = ({ children }) => {
// return (
//     <m.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </m.div>
//   );
// }

const PageTransition = ({ children }) => {
  const [showTransition, setShowTransition] = useState(true);

  return (
    <div className={"relative"}>
      {showTransition && (
        <m.div
          initial={{width: 0, height: 0}}
          animate={{width: "650rem", height: "650rem"}}
          transition={{duration: 1.5}}
          exit={{width: 0, height: 0}}
          className="rounded-full fixed border-white border-[150rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        </m.div>
      )}
      {showTransition && (
        <m.div
          initial={{width: 0, height: 0}}
          animate={{width: "350rem", height: "350rem"}}
          transition={{duration: 1}}
          exit={{width: 0, height: 0}}
          className="rounded-full fixed border-blue-500 border-[20rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        </m.div>
      )}
      {showTransition && (
        <m.div
          initial={{width: 0, height: 0}}
          animate={{width: "350rem", height: "350rem"}}
          transition={{duration: 1.4, delay: 0.3}}
          exit={{width: 0, height: 0}}
          className="rounded-full fixed border-blue-500 border-[10rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
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
