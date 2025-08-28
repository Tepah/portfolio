import React, {useEffect, useRef} from 'react';
import PageTransition from "../components/PageTransition";
import {Link} from "react-router-dom";
import about_1 from "../assets/About-1.png";
import about_2 from "../assets/About-2.png";
import Amazon from "../assets/Amazon_logo.svg";
import csuf from "../assets/CSUF.png";
import codingStem from "../assets/Codingstem_logo.png";
import {motion} from "framer-motion";

const amazon_experience = {
  title: "Amazon",
  description: "Software Development Engineer Intern",
  achievements: ["Implemented a feature that reads user perceived latency and sends it to the backend for analysis.",
    "Worked with 5 teams on 6 different packages.", "Successfully tested and deployed code through multiple revisions and " +
    "thorough code reviews."],
  date: "August 2022 - November 2022",
  image: <img src={Amazon} alt={"Amazon"} className={"w-48 h-48 object-contain"} />
}

const assure_experience = {
  title: "Assure",
  description: "Data Analyst Intern",
  achievements: ["Analyzed Stroke victims data to identify trends and patterns in the data.",
    "Worked with one other person to create results that would satisfy both of us",
    "Created a scatterplot with a trendline to show the correlation between two variables."],
  date: "June 2022 - July 2022",
  image: <img src={csuf} alt={"CSUF"} className={"w-48 h-48 object-contain"} />
}

const academy_experience = {
  title: "Coding Stem Academy",
  description: "Academic Director/Coding Instructor",
  achievements: ["Collaborated with students to create a Learning Management System to utilizes AI, Next.js, Flask, and MySQL (among other programs)",
    "Assisted students in learning development skills with focus on Python, JavaScript, and React.",
    "Created a curriculum for students to learn the basics of programming and web development."],
  date: "February 2025 - Current",
  image: <img src={codingStem} alt={"Coding Stem Academy"} className={"w-48 h-48 object-contain"} />
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
      <div className={"flex flex-col"}>
        <MobileSuper />
        <MobileAboutLayer />
        <MobileSkillsLayer />
        <MobileExperienceLayer />
        <MobileEducationLayer />
      </div>
    )
  } else {
    return (
      <div className={"flex flex-col"}>
        <Super/>
        {aboutLayer()}
        {skillsLayer()}
        {experienceLayer()}
      </div>
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
      <div className={"flex flex-col space-y-16 w-1/3 justify-center items-center text-center"}>
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
      <div className={"flex flex-col space-y-16 h-3/4 w-3/4 justify-center items-center text-center"}>
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
      <div className={"flex flex-col space-y-16 w-1/3 justify-center items-center text-center"}>
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
      <div className={"flex flex-col space-y-16 h-3/4 w-3/4 justify-center items-center text-center"}>
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
        {ExperienceBox(amazon_experience, 0)}
        {ExperienceBox(assure_experience, 0.2)}
        {ExperienceBox(academy_experience, 0.4)}
      </div>
      <div className={"w-full px-12"}>
        {EducationBox(0.4)}
      </div>
    </div>
  )
}

const MobileExperienceLayer = () => {
  return (
    <div className="flex flex-col space-y-16 w-full py-16">
      <div className={"flex flex-row justify-evenly"}>
        <h1 className={"text-7xl"}>Experience</h1>
        <p></p>
      </div>
      <div className={"w-full flex flex-col space-y-16 justify-center items-center"}>
        {MobileExperienceBox(amazon_experience)}
        {MobileExperienceBox(assure_experience)}
        {MobileExperienceBox(academy_experience)}
      </div>
    </div>
  )
}


const ExperienceBox = (experience, delay) => {
  return (
    <FadeInComponent className={"w-1/3 flex flex-row justify-center"} delay={delay}>
      <div className={"w-full mx-4 space-y-4 flex flex-col items-center border rounded-lg border-gray-300 p-8 h-full"}>
        <div className={"w-100 h-100 flex flex-row justify-center py-16"}>
          {experience.image}
        </div>
        <div className="flex flex-col items-center text-center flex-grow justify-center">
          <h1 className={"text-4xl"}>{experience.title}</h1>
          <p className={"text-lg font-bold"}>{experience.description}</p>
          <p className={"text-lg"}>{experience.date}</p>
        </div>
        <div className={"w-4/5 flex flex-col space-y-8"}>
          <p className={"text-lg font-bold"}>Achievements: </p>
          <ul className={"list-disc list-inside"}>
            {experience.achievements.map((achievement, index) => {
              return <li key={index} className={"text-lg"}>{achievement}</li>
            })}
          </ul>
        </div>
      </div>
    </FadeInComponent>
  )
}


const EducationBox = (delay) => {
  return (
    <FadeInComponent className={"w-full flex flex-col"} delay={delay}>
      <div className={"w-full flex flex-col justify-evenly items-center space-y-16  border rounded-lg border-gray-300 p-8 h-full"}>
        <h1 className={"text-6xl"}>Education</h1>
        <div className={"flex flex-row justify-evenly w-full"}>
          <div className="flex flex-col gap-4">
            <h1 className={"text-3xl font-bold"}>California State University, Fullerton</h1>
            <p className={"text-lg"}>Bachelor of Science in Computer Science</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={"text-3xl font-bold"}>Orange Coast College</h1>
            <p className={"text-lg"}>Associate of Science in Computer Science</p>
          </div>
        </div>
      </div>
    </FadeInComponent>
  )
}


const MobileExperienceBox = (experience) => {
  return (
    <div className={"w-4/5 space-y-8 flex flex-col text-left"}>
      <div className={"w-fit flex flex-row justify-center py-16"}>
        {experience.image}
      </div>
      <h1 className={"text-6xl text-center"}>{experience.title}</h1>
      <p className={"text-lg text-center"}>{experience.description}</p>
      <p className={"text-lg text-center"}>{experience.date}</p>
      <p className={"text-lg font-bold"}>Achievements: </p>
      <ul className={"w-5/6 list-disc list-inside text-center"}>
        {experience.achievements.map((achievement) => {
          return <li className={"text-lg"}>{achievement}</li>
        })}
      </ul>
    </div>
  )
}

const MobileEducationLayer = () => {
  return (
    <div className="flex flex-col space-y-16 w-full py-16 justify-center items-center text-center">
      <h1 className={"text-7xl"}>Education</h1>
      <div className={"flex flex-col justify-evenly space-y-16 text-left w-4/5"}>
        <div>
          <h1 className={"text-3xl font-bold"}>Orange Coast College</h1>
          <p className={"text-lg"}>Associate of Science in Computer Science</p>
        </div>
        <div>
          <h1 className={"text-3xl font-bold"}>California State University, Fullerton</h1>
          <p className={"text-lg"}>Bachelor of Science in Computer Science</p>
        </div>
      </div>
    </div>
  )
}

const FadeInComponent = ({children, className, delay=0}) => {
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
      className={className}
      ref={elementRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100}}
      transition={{ duration: 0.5, delay: delay }}>
      {children}
    </motion.div>
  )
}


export default About;
