import React, {useEffect, useRef} from 'react';
import PageTransition from "../components/PageTransition";
import {Link} from "react-router-dom";
import about_1 from "../assets/About-1.png";
import about_2 from "../assets/About-2.png";
import Amazon from "../assets/Amazon_logo.svg";
import csuf from "../assets/CSUF.png";
import {motion} from "framer-motion";

const amazon_experience = {
  title: "Amazon",
  description: "Software Development Engineer Intern",
  achievements: ["Implemented a feature that reads user perceived latency and sends it to the backend for analysis.",
    "Worked with 5 teams on 6 different packages.", "Successfully tested and deployed code through multiple revisions and " +
    "thorough code reviews."],
  date: "August 2022 - November 2022",
  image: <img src={Amazon} alt={"Amazon"} className={"w-1/2 h-auto contain-content"} />
}

const assure_experience = {
  title: "Assure",
  description: "Data Analyst Intern",
  achievements: ["Analyzed Stroke victims data to identify trends and patterns in the data.",
    "Worked with one other person to create results that would satisfy both of us",
    "Created a scatterplot with a trendline to show the correlation between two variables."],
  date: "June 2022 - July 2022",
  image: <img src={csuf} alt={"CSUF"} className={"w-1/2 h-auto contain-content"} />
}

const About = () => {
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
        <div className={"flex flex-col"}>
          <MobileSuper />
          <MobileAboutLayer />
          <MobileSkillsLayer />
          <MobileExperienceLayer />
          <EducationLayer />
        </div>
      </PageTransition>
    )
  } else {
    return (
      <PageTransition>
        <div className={"flex flex-col"}>
          <Super/>
          {aboutLayer()}
          {skillsLayer()}
          <EducationLayer />
          {experienceLayer()}
        </div>
      </PageTransition>
    )
  }
}

const Super = () => {
  return (
    <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center text-center"}>
      <h1 className={"text-[14rem]"}>Things about</h1>
      <h1 className={"text-[14rem] text-blue-500"}>Pete</h1>
    </div>
  )
}

const MobileSuper = () => {
  return (
    <div className={"w-full h-screen backdrop-opacity-0 flex flex-col items-center justify-center py-16"}>
      <h1 className={"text-[6rem] text-center"}>Things about</h1>
      <h1 className={"text-[6rem] text-blue-500"}>Pete</h1>
    </div>
  )
}

const aboutLayer = () => {
  return (
    <div className="w-screen flex flex-row justify-evenly py-64">
      <div className={"flex flex-col h-1/3 w-1/3"}>
        <img src={about_1} alt="about" />
      </div>
      <div className={"flex flex-col space-y-8 h-1/3 w-1/3 justify-center items-center text-center"}>
        <FadeInComponent>
          <h1 className={"text-7xl"}>About</h1>
          <p className={"text-lg"}>A Software Engineer passionate about creating impactful projects that help people and make a significant
            difference in society. Dedicated to continuous learning and striving for excellence in every endeavor.</p>
        </FadeInComponent>
      </div>
    </div>
  )
}

const MobileAboutLayer = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-32">
      <div className={"flex flex-col h-auto w-3/4"}>
        <img src={about_1} alt="about" />
      </div>
      <div className={"flex flex-col space-y-8 h-3/4 w-3/4 justify-center items-center text-center"}>
        <h1 className={"text-7xl"}>About</h1>
        <p className={"text-lg"}>A Software Engineer passionate about creating impactful projects that help people and make a significant
          difference in society. Dedicated to continuous learning and striving for excellence in every endeavor.</p>
      </div>
    </div>
  )
}

const skillsLayer = () => {
  return (
    <div className="w-screen flex flex-row justify-evenly py-64">
      <div className={"flex flex-col space-y-8 h-1/3 w-1/3 justify-center items-center text-center"}>
        <FadeInComponent>
          <h1 className={"text-7xl"}>Skills</h1>
          <p className={"text-lg"}>Versatile professional with strong communication and problem-solving skills from
            customer service, now delivering high-quality software solutions in engineering.</p><br />
          <Link to={"/skills"} className={"text-lg text-blue-500"}>Learn more</Link>
        </FadeInComponent>
      </div>
      <div className={"flex flex-col h-1/3 w-1/3"}>
        <img src={about_2} alt="skills" />
      </div>
    </div>
  )
}

const MobileSkillsLayer = () => {
  return (
    <div className={"w-screen flex flex-col justify-center items-center py-32"}>
      <div className={"flex flex-col h-5/6 w-3/4"}>
        <img src={about_2} alt="skills" />
      </div>
      <div className={"flex flex-col space-y-8 h-3/4 w-3/4 justify-center items-center text-center"}>
        <h1 className={"text-7xl"}>Skills</h1>
        <p className={"text-lg"}>Versatile professional with strong communication and problem-solving skills from
          customer service, now delivering high-quality software solutions in engineering.</p><br />
        <Link to={"/skills"} className={"text-lg text-blue-500"}>Learn more</Link>
      </div>
    </div>
  )
}

const experienceLayer = () => {
  return (
    <div className="flex flex-col items-center space-y-32 w-screen py-32">
      <h1 className={"text-7xl"}>Experience</h1>
      <div className={"w-screen flex flex-row justify-evenly"}>
        {ExperienceBox(amazon_experience)}
        {ExperienceBox(assure_experience)}
      </div>
    </div>
  )
}

const MobileExperienceLayer = () => {
  return (
    <div className="flex flex-col space-y-8 w-full py-32">
      <div className={"flex flex-row justify-evenly"}>
        <h1 className={"text-7xl"}>Experience</h1>
        <p></p>
      </div>
      <div className={"w-full flex flex-col justify-center items-center"}>
        {ExperienceBox(amazon_experience)}
        {ExperienceBox(assure_experience)}
      </div>
    </div>
  )
}


const ExperienceBox = (experience) => {
  return (
    <div className={"w-3/4 space-y-4 flex flex-col items-center text-left"}>
      <div className={"w-fit flex flex-row justify-center py-16"}>
        {experience.image}
      </div>
      <FadeInComponent>
        <h1 className={"text-6xl"}>{experience.title}</h1>
        <p className={"text-lg"}>{experience.description}</p>
        <p className={"text-lg"}>{experience.date}</p>
        <p className={"text-lg"}>Achievements: </p>
        <ul className={"w-5/6 md:w-1/2 list-disc list-inside"}>
          {experience.achievements.map((achievement) => {
            return <li className={"text-lg"}>{achievement}</li>
          })}
        </ul>
      </FadeInComponent>
    </div>
  )
}

const EducationLayer = () => {
  return (
    <div className="flex flex-col space-y-32 w-screen py-32 justify-center items-center text-center">
      <h1 className={"text-7xl"}>Education</h1>
      <div className={"flex flex-col justify-evenly text-left w-1/2"}>
        <h1 className={"text-3xl font-bold"}>Orange Coast College</h1>
        <p className={"text-lg"}>Associate of Science in Computer Science</p>
        <h1 className={"text-3xl font-bold"}>California State University, Fullerton</h1>
        <p className={"text-lg"}>Bachelor of Science in Computer Science</p>
      </div>
    </div>
  )
}

const FadeInComponent = ({children}) => {
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
        threshold: 0.2,
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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100}}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}


export default About;
