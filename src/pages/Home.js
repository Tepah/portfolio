import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";
import Water from "../components/Water";
import {Footer} from "../components/Footer";

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
        <BackgroundImage/>
        <div>
          <div className="flex flex-col">
            <MobileSuper/>
            <Water>
              <MobileAbout/>
              <MobileProject/>
              <MobileSkills/>
              <MobileContact/>
              <Footer/>
            </Water>
          </div>
        </div>
      </PageTransition>
    )
  } else {
    return (
      <PageTransition>
        <BackgroundImage/>
        <div>
          <div className="flex flex-col">
            <Super/>
            <Water>
              <AboutLink/>
              <ProjectLink/>
              <SkillsLink/>
              <ContactLink/>
              <Footer/>
            </Water>
          </div>
        </div>
      </PageTransition>
    )
  }
};

const Super = () => {
  return (
    <div className="w-screen h-screen mt-10 backdrop-opacity-0 flex flex-col items-center justify-center">
      <div className="text-left">
        <h1 className="text-[14rem]">
          This is
        </h1>
        <h1 className={"text-[14rem]"}>
          <span className={"text-blue-500"}>Pete</span> Potipitak
        </h1>
      </div>
    </div>
  )
}

const MobileSuper = () => {
  return (
    <div className="w-full h-screen mt-10 backdrop-opacity-0 flex flex-col items-center justify-between py-16">
      <h1 className="text-[6rem]">
        This is
      </h1>
      <h1 className={"text-[6rem] text-center -z-50"}>
        <span className={"text-blue-500"}>Pete</span> Potipitak
      </h1>
    </div>
  )
}

const BackgroundImage = () => {
  const heroImage = require("../assets/IMG_0697.jpg");

  return (
    <div
      className="fixed top-1/2 left-1/2 w-64 h-64 bg-cover bg-center transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      style={{ backgroundImage: `url(${heroImage})` }}
    />
  )
}

const AboutLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"ml-[60rem] text-center space-y-8 hidden md:block"}>
        <Link to="/about" className="text-7xl">About</Link>
        <p className={"text-xl"}>A page to get to know more about me.</p>
      </div>
      <div className={"text-center space-y-8 block md:hidden"}>
        <Link to="/about" className="text-4xl">About</Link>
        <p className={"text-lg"}>A page to get to know more about me.</p>
      </div>

    </div>
  )
}

const MobileAbout = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <Link to="/about" className="text-4xl">About</Link>
        <p className={"text-lg"}>A page to get to know more about me.</p>
      </div>
    </div>
  )
}

const ProjectLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-center py-64 ">
      <div className={"mr-[60rem] text-center space-y-8"}>
        <Link to="/project" className="text-7xl">Projects</Link>
        <p className={"text-xl"}>Take a look at my projects and ideas</p>
      </div>
    </div>
  )
}

const MobileProject = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <Link to="/project" className="text-4xl">Projects</Link>
        <p className={"text-lg"}>Take a look at my projects and ideas</p>
      </div>
    </div>
  )
}


const SkillsLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"ml-[60rem] text-center space-y-8"}>
        <Link to="/skills" className="text-7xl">Skills</Link>
        <p className={"text-xl"}>Here are some of my skills</p>
      </div>
    </div>
  )
}

const MobileSkills = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <Link to="/skills" className="text-4xl">Skills</Link>
        <p className={"text-lg"}>Here are some of my skills</p>
      </div>
    </div>
  )
}

const ContactLink = () => {
  return (
    <div className="w-screen backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"mr-[60rem] text-center space-y-8"}>
        <Link to="/contact" className="text-7xl">Contact</Link>
        <p className={"text-xl"}>Get in touch with me</p>
      </div>
    </div>
  )
}

const MobileContact = () => {
  return (
    <div className="w-full backdrop-opacity-0 flex items-center justify-center py-64">
      <div className={"text-center space-y-8"}>
        <Link to="/contact" className="text-4xl">Contact</Link>
        <p className={"text-lg"}>Get in touch with me</p>
      </div>
    </div>
  )
}


export default Home;
