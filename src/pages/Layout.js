import React from 'react';
import { Outlet, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Layout = () => {
  return (
    <div>
      <div className="flex flex-row space-x-5 justify-end">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/projects" className="text-blue-500">Projects</Link>
        <Link to="/contact" className="text-blue-500">Contact</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout;
