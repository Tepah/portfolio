import React, { useEffect, useRef, useState } from 'react';
import PageTransition from "../components/PageTransition";
import skills_data from "../data/skills_data";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import SkillsPageTransition from "../components/SkillsPageTransition";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SkillsPageTransition>
      <div className="flex flex-col">
        <div className={`w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center ${isMobile ? 'text-center' : ''}`}>
          <h1 className={`text-${isMobile ? '[6rem]' : '[14rem]'}`}>Here are</h1>
          <h1 className={`text-${isMobile ? '[6rem]' : '[14rem]'}`}>
            <span className="text-blue-500">Pete</span>'s skills
          </h1>
        </div>
        <SlideInComponent>
          {isMobile ? <MobileTechnicalSkillsLayer /> : <TechnicalSkillsLayer />}
        </SlideInComponent>
        <SlideInComponent>
          {isMobile ? <MobileSoftSkillsLayer /> : <SoftSkillsLayer />}
        </SlideInComponent>
        <Footer />
      </div>
    </SkillsPageTransition>
  );
};

const TechnicalSkillsLayer = () => {
  const [currentSkill, setCurrentSkill] = useState(skills_data.technical[0]);

  return (
    <div className="w-screen flex flex-col space-y-8 bg-black text-white pt-64 pb-64">
      <div className="flex flex-row justify-evenly">
        <h1 className="text-7xl">Technical Skills</h1>
      </div>
      <div className="w-screen flex flex-row justify-evenly">
        <ul className="h-1/3 w-1/4 justify-center list-disc list-inside">
          {skills_data.technical.map((skill, index) => (
            <li key={index} className="text-xl">
              <button onClick={() => setCurrentSkill(skill)}>{skill}</button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-8 h-1/3 w-1/3">
          <h1 className="text-7xl">{currentSkill}</h1>
          <p className="text-lg">{skills_data.technical_desc[currentSkill]}</p>
          <p className="text-lg">Examples:</p>
          <ul>
            {skills_data.tech_examples[currentSkill].map((example, index) => (
              <li key={index} className="text-lg">
                <a href={example}>{example}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MobileTechnicalSkillsLayer = () => {
  const [currentSkill, setCurrentSkill] = useState(skills_data.technical[0]);

  return (
    <div className="w-screen flex flex-col space-y-8 justify-center items-center text-center py-64 bg-black text-white">
      <h1 className="text-7xl">Technical Skills</h1>
      <div className="w-screen flex flex-col justify-evenly">
        <ul className="h-1/3 w-full justify-center list-disc list-inside">
          {skills_data.technical.map((skill, index) => (
            <li key={index} className={skill === currentSkill ? "text-blue-500 text-xl" : "text-xl"}>
              <button onClick={() => setCurrentSkill(skill)}>{skill}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-8 h-1/3 w-full">
        <h1 className="text-7xl">{currentSkill}</h1>
        <p className="text-lg">{skills_data.technical_desc[currentSkill]}</p>
        <p className="text-lg">Examples:</p>
        <ul>
          {skills_data.tech_examples[currentSkill].map((example, index) => (
            <li key={index} className="text-lg">
              <a href={example}>{example}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SoftSkillsLayer = () => {
  return (
    <div className="w-screen flex flex-col space-y-8 justify-center items-center text-center py-64">
      <h1 className="text-7xl">Soft Skills</h1>
      <ul className="text-lg">
        <li>Strong communication and problem-solving skills developed from working in customer service roles such as retail at Target.</li>
        <li>Ability to handle high-pressure situations and multitask effectively, gained from experience as a medical assistant.</li>
        <li>Demonstrated ownership and responsibility, learned during an internship at Amazon, where tasks required initiative and accountability.</li>
      </ul>
    </div>
  );
};

const MobileSoftSkillsLayer = () => {
  return (
    <div className="w-screen flex flex-col space-y-8 justify-center items-center text-center py-64">
      <h1 className="text-7xl">Soft Skills</h1>
      <ul className="text-lg">
        <li>Strong communication and problem-solving skills developed from working in customer service roles such as retail at Target.</li>
        <li>Ability to handle high-pressure situations and multitask effectively, gained from experience as a medical assistant.</li>
        <li>Demonstrated ownership and responsibility, learned during an internship at Amazon, where tasks required initiative and accountability.</li>
      </ul>
    </div>
  );
};

const SlideInComponent = ({ children }) => {
  const elementRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.01,
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
      initial={{ rotate: 30, y: 200, x: -300, scale: 0.8 }}
      animate={{ rotate: inView ? 0 : 30, y: inView ? 0 : 1000, x: inView ? 0 : -300, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Skills;
