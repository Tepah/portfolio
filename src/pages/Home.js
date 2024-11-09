import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <BackgroundImage />
      <div>
        <h1 className="text-2xl">Home</h1>
        <div className="flex flex-col">
          <Super />
          <div>
            <Link to="/about" className="text-blue-500">About</Link>
          </div>
          <div>
            <Link to="/projects" className="text-blue-500">Projects</Link>
          </div>
          <div>
            <Link to="/contact" className="text-blue-500">Contact</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
};

const Super = () => {
  return (
    <div className="w-screen h-screen backdrop-opacity-0 flex items-center justify-center">
      <div className="-mt-96">
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

export default Home;
