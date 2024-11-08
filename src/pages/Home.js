import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";
import heroImage from "../assets/IMG_0697.jpg";

const Home = () => {
  return (
    <PageTransition>
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
    <div>
      <h1>
        I am Pete
      </h1>
      <div className="w-32 h-32 overflow-hidden">
        <img src={heroImage} className="object-cover w-full h-full" alt="Pete" />
      </div>
    </div>
  )
}

export default Home;
