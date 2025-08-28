import React, { Children, cloneElement, isValidElement, useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';


const PageTransition = ({ children }) => {
  const [showTransition, setShowTransition] = useState(true);

  return (
    <div className={"relative"}>
      <AnimatePresence>
        {showTransition && (
          <m.div
            key="fade-1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.4, duration: .4 }}
            onAnimationComplete={() => setShowTransition(false)}
          >
            <m.div
              key="transition"
              initial={{ scale: 0 }}
              animate={{ scale: 20 }}
              transition={{ duration: 1.4 }}
              exit={{ width: 0, height: 0 }}
              className="fixed border-white border-[150rem] z-50 left-0 transform -translate-x-1/2 -translate-y-1/2">
            </m.div>
          </m.div>
        )}
        {showTransition && (
          <m.div
            key="fade-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.4, duration: .4 }}
            onAnimationComplete={() => setShowTransition(false)}
          >
            <m.div
              key="transition-2"
              initial={{ scale: 0 }}
              animate={{ scale: 10 }}
              transition={{ duration: 1 }}
              exit={{ width: 0, height: 0 }}
              className="fixed border-blue-500 border-[20rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
            </m.div>
          </m.div>
        )}
        {showTransition && (
          <m.div
            key="fade-3"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.4, duration: .4 }}
            onAnimationComplete={() => setShowTransition(false)}
          >
            <m.div
              key="transition-3"
              initial={{ scale: 0 }}
              animate={{ scale: 10 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              exit={{ width: 0, height: 0 }}
              className="fixed border-blue-500 border-[10rem] z-50 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
              onAnimationComplete={() => setShowTransition(false)}>
            </m.div>
          </m.div>
        )}
          {children}
      </AnimatePresence>
    </div>
  );
}


export default PageTransition;
