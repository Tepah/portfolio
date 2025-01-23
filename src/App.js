import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Skills from './pages/Skills';
import './App.css';
import ProjectPage from "./pages/ProjectPage";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <Router>
      <AnimatePresence wait>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Route>
          </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
