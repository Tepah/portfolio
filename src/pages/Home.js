import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div>
        <h1 className="text-2xl">Home</h1>
        <div className="flex flex-col">
          <div>Super</div>
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

export default Home;
