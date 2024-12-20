import React, {useEffect} from 'react';
import {Outlet, Link, useLocation} from "react-router-dom";
import {motion} from 'framer-motion';
import PageTransition from "../components/PageTransition";
import {scrollToTop} from "../components/functions";

const Layout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  }

  const getLink = (path) => {
    return location.pathname === path ? "text-blue-500" : "text-black";
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  if (!isMobile) {
  return (
    <div>
      <div className="p-8 flex flex-row space-x-8 justify-end fixed top-0 right-0 z-50">
        <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
          <Link to="/" className={`${getLink('/')} text-2xl`} onClick={scrollToTop}>Home</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
          <Link to="/about" className={`${getLink('/about')} text-2xl`} onClick={scrollToTop}>About</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
          <Link to={"/skills"} className={`${getLink('/skills')} text-2xl`} onClick={scrollToTop}>Skills</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
          <Link to="/projects" className={`${getLink('/projects')} text-2xl`} onClick={scrollToTop}>Projects</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
          <Link to="/contact" className={`${getLink('/contact')} text-2xl`} onClick={scrollToTop}>Contact</Link>
        </motion.div>
      </div>

      <Outlet/>
    </div>
  );
  } else {
    return (
      <div>
        <div className={"p-8 flex flex-row space-x-4 justify-center fixed z-50"}>
          <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
            <Link to="/" className={`${getLink('/')} text-lg`} onClick={scrollToTop}>Home</Link>
          </motion.div>
          <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
            <Link to="/about" className={`${getLink('/about')} text-lg`} onClick={scrollToTop}>About</Link>
          </motion.div>
          <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
            <Link to={"/skills"} className={`${getLink('/skills')} text-lg`} onClick={scrollToTop}>Skills</Link>
          </motion.div>
          <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
            <Link to="/projects" className={`${getLink('/projects')} text-lg`} onClick={scrollToTop}>Projects</Link>
          </motion.div>
          <motion.div whileHover={hoverAnimation} transition={hoverTransition}>
            <Link to="/contact" className={`${getLink('/contact')} text-lg`} onClick={scrollToTop}>Contact</Link>
          </motion.div>
        </div>

        <Outlet/>
      </div>
  );
  }
}

const hoverAnimation = {
  scale: 1.1,
};

const hoverTransition = {duration: 0.1}

export default Layout;
