import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";
import Water from "../components/Water";

const Home = () => {
  return (
    <PageTransition>
      <BackgroundImage />
      <div>
        <div className="flex flex-col">
          <Super />
          <Water>
            <AboutLink />
            <ProjectLink />
            <ContactLink />
          </Water>
        </div>
      </div>
    </PageTransition>
  )
};

const Super = () => {
  return (
    <div className="w-screen h-screen backdrop-opacity-0 flex items-center justify-center">
      <div className="mt-[-400px]">
        <h1 className="text-7xl">
          I am Pete
        </h1>
      </div>
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
    <div className="w-screen h-screen backdrop-opacity-0 flex items-center justify-center">
      <Link to="/about" className="text-5xl ml-[500px]">About</Link>
    </div>
  )
}

const ProjectLink = () => {
  return (
    <div className="w-screen h-screen backdrop-opacity-0 flex items-center justify-center">
      <Link to="/project" className="text-5xl ml-[-500px]">Project</Link>
    </div>
  )
}

const ContactLink = () => {
  return (
    <div className="w-screen h-screen backdrop-opacity-0 flex items-center justify-center">
      <Link to="/contact" className="text-5xl ml-[500px]">Contact</Link>
    </div>
  )
}


export default Home;
