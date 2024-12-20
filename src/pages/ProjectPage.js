import React, {useEffect} from 'react';
import {Outlet, Link, useParams} from "react-router-dom";
import PageTransition from "../components/PageTransition";
import {project_data} from "../data/project_data";
import {ReactComponent as Github} from "../assets/github-mark.svg";

const ProjectPage = () => {
  const { id } = useParams();
  const project = project_data[id];
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

  if (isMobile) {
    return (
      <PageTransition>
        <div className={("flex flex-col")}>
          <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center text-center"}>
            <h1 className={"text-[6rem]"}><span className="text-blue-500">Pete</span>'s Project</h1>
            <h1 className={"text-[6rem]"}>{id}</h1>
          </div>
          {MobileProjectLayer(project)}
        </div>
      </PageTransition>
    )
  } else {
    return (
      <PageTransition>
        <div className={"flex flex-col"}>
          <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center text-center"}>
            <h1 className={"text-[14rem]"}><span className="text-blue-500">Pete</span>'s Project</h1>
            <h1 className={"text-[14rem]"}>{id}</h1>
          </div>
          {ProjectLayer(project)}
        </div>
      </PageTransition>
    )
  }
}

const ProjectLayer = (project) => {
  return (
    <div className={"w-screen flex flex-col space-y-8 py-64 items-center"}>
      <div className={"w-screen flex flex-row space-x-8 justify-center pb-64"}>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={project.title} className={"w-1/4 h-[40rem] object-contain"} />
        ))}
      </div>
      <p className={"text-lg w-3/4"}>{project.long_desc}</p>
      <p className={"text-lg"}><span className={"font-bold"}>{project.languages}</span></p>
      <p className={"text-lg"}>See it here on Github:</p>
      <a href={project["link"]}><Github /></a>

    </div>
  )
}

const MobileProjectLayer = (project) => {
  return (
    <div className={"w-screen flex flex-col space-y-8 py-64 items-center text-center"}>
      <p className={"text-lg w-3/4"}>{project.long_desc}</p>
      <p className={"text-lg"}><span className={"font-bold"}>{project.languages}</span></p>
      <p className={"text-lg"}>See it here on Github:</p>
      <a href={project["link"]}><Github /></a>
      <div className={"w-screen flex flex-col space-y-8 justify-center pb-32 items-center"}>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={project.title} className={"w-4/5 h-[40rem] object-contain"} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage;
