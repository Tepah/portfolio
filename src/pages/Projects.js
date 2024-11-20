import React from 'react';
import PageTransition from "../components/PageTransition";

const Projects = () => {
  return (
    <PageTransition>
      <div>
        <h1>Projects</h1>
        <p>Here are some of my projects</p>
        {/* Project Layer */}
        {projectLayer("Project 1", "Description 1")}
        {projectLayer("Project 2", "Description 2")}
      </div>
    </PageTransition>
  )
}

/* Temporary Project Layer */
const projectLayer = (title, desc) => {
  return (
    <div className="flex flex-row">
      {/* Project Image */}
      <div>
        <Image src="https://via.placeholder.com/150" alt="project" />
      </div>
      {/* Project Title and Description */}
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Projects;
