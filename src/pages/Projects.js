import React, {useEffect, useRef} from 'react';
import PageTransition from "../components/PageTransition";
import {Footer} from "../components/Footer";
import {project_data} from "../data/project_data";
import {motion} from "framer-motion";

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
          <div className={"w-screen flex flex-row py-32 justify-center space-x-16"}>
            <FadeInComponent delay={0}>
              {projectLayer(project_data["MyMuze"])}
            </FadeInComponent>
            <FadeInComponent delay={0.5}>
              {projectLayer(project_data["Dose"])}
            </FadeInComponent>
            <FadeInComponent delay={1}>
              {projectLayer(project_data["Flashcardio"])}
            </FadeInComponent>
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
          <FadeInComponent delay={0}>
            {MobileProjectLayer(project_data["MyMuze"])}
          </FadeInComponent>
          <FadeInComponent delay={0}>
            {MobileProjectLayer(project_data["Dose"])}
          </FadeInComponent>
          <FadeInComponent delay={0}>
            {MobileProjectLayer(project_data["Flashcardio"])}
          </FadeInComponent>
        </div>
      </div>
    )
  }
}

/* Temporary Project Layer */
const projectLayer = (project) => {
  return (
    <div className={""}>
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

const FadeInComponent = ({children, delay}) => {
  const elementRef = useRef(null);
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
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
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100}}
      transition={{ duration: 0.5, delay: delay}}>
      {children}
    </motion.div>
  )
}

export default Projects;
