import React, {useEffect} from 'react';
import PageTransition from "../components/PageTransition";
import {Footer} from "../components/Footer";
import {project_data} from "../data/project_data";

const Projects = () => {
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


  if (!isMobile) {
    return (
      <PageTransition>
        <div className={"flex flex-col"}>
          <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center text-center"}>
            <h1 className={"text-[14rem]"}>Projects <span className="text-blue-500">Pete</span>'s</h1>
            <h1 className={"text-[14rem]"}>worked on</h1>
          </div>
          {/* Project Layer */}
          <div className={"w-screen flex flex-row py-32 justify-evenly"}>
            {projectLayer(project_data["MyMuze"])}
            {projectLayer(project_data["Dose"])}
            {projectLayer(project_data["Flashcardio"])}
          </div>
          <Footer/>
        </div>
      </PageTransition>
    )
  } else {
    return (
      <div className={"flex flex-col"}>
        <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center text-center"}>
          <h1 className={"text-[6rem]"}>Projects <span className="text-blue-500">Pete</span>'s</h1>
          <h1 className={"text-[6rem]"}>worked on</h1>
        </div>

        <div className={"w-screen flex flex-col space-y-16"}>
          {MobileProjectLayer(project_data["MyMuze"])}
          {MobileProjectLayer(project_data["Dose"])}
          {MobileProjectLayer(project_data["Flashcardio"])}
        </div>
      </div>
    )
  }
}

/* Temporary Project Layer */
const projectLayer = (project) => {
  return (
    <div className={"w-1/4"}>
      <a href={"/project/"+ project.title} className="flex flex-col justify-center space-y-4 items-center text-center">
        {/* Project Image */}
        <div className={"h-[40rem] flex justify-center items-center"}>
          <img src={project.images[0]} alt={project.title} className={"max-w-full max-h-full object-contain rounded-3xl"} />
        </div>
        {/* Project Title and Description */}
        <h1 className={"text-4xl"}>{project.title}</h1>
        <p className={"text-lg"}>{project.description}</p>
        <p className={"text-lg font-bold"}>{project.languages}</p>
        <p className={"text-lg text-blue-500"}>Click to learn more..</p>
      </a>
    </div>
  )
}

const MobileProjectLayer = (project) => {
  return (
    <div className={"w-screen py-16"}>
      <a href={"/project/"+ project.title} className="flex flex-col justify-center space-y-4 items-center text-center">
        {/* Project Image */}
        <div className={"h-[30rem] flex justify-center items-center"}>
          <img src={project.images[0]} alt={project.title} className={"max-w-full max-h-full object-contain rounded-3xl"} />
        </div>
        {/* Project Title and Description */}
        <h1 className={"text-4xl"}>{project.title}</h1>
        <p className={"text-lg"}>{project.description}</p>
        <p className={"text-lg font-bold"}>{project.languages}</p>
        <p className={"text-lg text-blue-500"}>Click to learn more..</p>
      </a>
    </div>
  )
}

export default Projects;
