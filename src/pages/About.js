import React from 'react';
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div>
        <h1>Things about me</h1>
      </div>
    </PageTransition>
  )
}

const aboutLayer = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="https://via.placeholder.com/150" alt="about" />
      </div>
      <div>
        <h1>About me</h1>
        <p>Here are some things about me</p>
      </div>
    </div>
  )
}

const skillsLayer = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="https://via.placeholder.com/150" alt="skills" />
      </div>
      <div>
        <h1>Skills</h1>
        <p>Here are some of my skills</p>
      </div>
    </div>
  )
}

const experienceLayer = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="https://via.placeholder.com/150" alt="experience" />
      </div>
      <div>
        <h1>Experience</h1>
        <p>Here are some of my experiences</p>
      </div>
    </div>
  )
}

export default About;
