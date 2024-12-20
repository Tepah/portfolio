import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";
import {Footer} from "../components/Footer";
import {motion} from 'framer-motion';
import heroImage from "../assets/IMG_0697.jpg";


const Home = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  if (isMobile) {
    return (
      <PageTransition>
        <div className="flex flex-col">
          <BackgroundImage/>
          <MobileSuper/>
          <DescLayer/>
          <MobileAbout/>
          <MobileProject/>
          <MobileSkills/>
          <MobileContact/>
          <Footer/>
        </div>
      </PageTransition>
    )
  } else {
    return (
      <PageTransition>
        <div className="flex flex-col">
          <BackgroundImage/>
          <Super/>
          <DescLayer />
          <AboutLink/>
          <ProjectLink/>
          <SkillsLink/>
          <ContactLink/>
          <Footer/>
        </div>
      </PageTransition>
    )
  }
};

const BackgroundImage = () => {
  const heroImage = require("../assets/IMG_0697.jpg");

  return (
    <div className={"fixed flex justify-center items-center w-screen h-screen z-1"}>
      <motion.div
        animate={{ y: [0, 10, 0]}}
        transition={{
          duration:3,
          repeat: Infinity,
          ease:'easeInOut',
        }}
        className="w-64 h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
    </div>
  )
}


const Super = () => {
  return (
    <div className="relative w-screen h-screen mt-10 backdrop-opacity-0 flex flex-col items-center justify-center z-5">
      <div className="text-left">
        <h1 className="text-[14rem]">
          This is
        </h1>
        <h1 className={"relative text-[14rem] z-5"}>
          <span className={"text-blue-500"}>Pete</span> Potipitak
        </h1>
      </div>
    </div>
  )
}

const MobileSuper = () => {
  return (
    <div className="w-full h-screen mt-10 backdrop-opacity-0 flex flex-col items-center justify-between py-16 z-0">
      <h1 className="text-[6rem]">
        This is
      </h1>
      <h1 className={"text-[6rem] text-center z-50"}>
        <span className={"text-blue-500"}>Pete</span> Potipitak
      </h1>
    </div>
  )
}


const DescLayer = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-center py-64 bg-blue-200">
      <div className={"flex flex-col w-3/4 text-center space-y-16"}>
        <p className={"text-2xl"}>A software engineer dedicated to continuous learning and creating impactful projects
          that help people and make a significant difference in society. They possess strong communication and
          problem-solving skills, transitioning from customer service to delivering high-quality software solutions
          in engineering.</p>
        <p className={"text-xl italics"}>"Despite everything, it's still you." - Frisk</p>
      </div>
    </div>
  )
}


const AboutLink = () => {
  return (
    <div className="relative w-screen backdrop-opacity-0 flex items-center justify-end py-64">
      <div className={"text-center space-y-8 w-1/2 flex flex-col justify-center"}>
        <FadeInComponent>
          <motion.div
            whileHover={hoverAnimation}
            transition={hoverTransition}>
            <Link to="/about" className="text-7xl">About</Link>
            <p className={"text-xl"}>A page to get to know more about me.</p>
          </motion.div>
        </FadeInComponent>
      </div>

    </div>
  )
}

const MobileAbout = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <FadeInComponent>
          <Link to="/about" className="text-4xl">About</Link>
          <p className={"text-lg"}>A page to get to know more about me.</p>
        </FadeInComponent>
      </div>
    </div>
  )
}

const ProjectLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-start h-screen ">
      <div className={"text-center space-y-8 w-1/2 flex flex-col justify-center"}>
        <FadeInComponent>
          <motion.div
            whileHover={hoverAnimation}
            transition={hoverTransition}>
            <Link to="/projects" className="text-7xl">Projects</Link>
            <p className={"text-xl"}>Take a look at my projects and ideas</p>
          </motion.div>
        </FadeInComponent>
      </div>
    </div>
  )
}

const MobileProject = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <FadeInComponent>
          <Link to="/projects" className="text-4xl">Projects</Link>
          <p className={"text-lg"}>Take a look at my projects and ideas</p>
        </FadeInComponent>
      </div>
    </div>
  )
}


const SkillsLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-end h-screen">
      <div className={"text-center space-y-8 w-1/2 flex flex-col justify-center"}>
        <FadeInComponent>
          <motion.div
            whileHover={hoverAnimation}
            transition={hoverTransition}>
            <Link to="/skills" className="text-7xl">Skills</Link>
            <p className={"text-xl"}>Here are some of my skills</p>
          </motion.div>
        </FadeInComponent>
      </div>
    </div>
  )
}

const MobileSkills = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <FadeInComponent>
          <Link to="/skills" className="text-4xl">Skills</Link>
          <p className={"text-lg"}>Here are some of my skills</p>
        </FadeInComponent>
      </div>
    </div>
  )
}

const ContactLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-start py-64">
      <div className={"text-center space-y-8 w-1/2 flex flex-col justify-center"}>
        <FadeInComponent>
          <motion.div
            whileHover={hoverAnimation}
            transition={hoverTransition}>
            <Link to="/contact" className="text-7xl">Contact</Link>
            <p className={"text-xl"}>Get in touch with me</p>
          </motion.div>
        </FadeInComponent>
      </div>
    </div>
  )
}

const MobileContact = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <FadeInComponent>
          <Link to="/contact" className="text-4xl">Contact</Link>
          <p className={"text-lg"}>Get in touch with me</p>
        </FadeInComponent>
      </div>
    </div>
  )
}

const FadeInComponent = ({children}) => {
  const elementRef = useRef(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100}}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

const hoverAnimation = {
  scale: 1.1,
  color: '#3b82f6',
};

const hoverTransition = {duration: 0.1}

export default Home;
