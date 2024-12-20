import React, {useEffect, useState} from 'react';
import PageTransition from "../components/PageTransition";
import emailjs from 'emailjs-com';
import { ReactComponent as LinkedIn } from '../assets/icons8-linkedin-250.svg'
import { ReactComponent as Github } from "../assets/github-mark.svg"
import { ReactComponent as Email} from "../assets/email-circle-fill-svgrepo-com.svg"
import { ReactComponent as Resume} from "../assets/curriculum-resume-svgrepo-com.svg"
import contact from "../assets/IMG_0697.jpg"
import resume from "../assets/Pete_Potipitak_Resume.pdf"

const Contact = () => {
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
          <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center"}>
            <h1 className={"text-[6rem]"}>Contact</h1>
            <h1 className={"text-[6rem]"}><span className="text-blue-500">Pete</span> here</h1>
          </div>
          {ContactFormLayer()}
          {MobileContactLinksLayer()}
        </div>
      </PageTransition>
    )
  } else {
    return (
      <PageTransition>
        <div className={"flex flex-col"}>
          <div className={"w-screen h-screen backdrop-opacity-0 flex flex-col items-center justify-center"}>
            <h1 className={"text-[14rem]"}>Contact</h1>
            <h1 className={"text-[14rem]"}><span className="text-blue-500">Pete</span> here</h1>
          </div>
          {ContactFormLayer()}
          {ContactLinksLayer()}
        </div>
      </PageTransition>
    )
  }
}

const ContactFormLayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send('service_dvhnvtm', 'template_au714jh', formData, 'V2TifPxnYQJwrrDRL')
      .then((result) => {
        console.log(result.text)
        console.log('Email sent successfully!')
      }, (error) => {
        console.log(error.text)
        console.log('Email failed to send!')
      })
  }

  return (
    <div className="w-screen flex flex-row justify-evenly py-32">
      <div className={"flex flex-col w-1/4 hidden md:block"}>
        <img src={contact} alt="contact" />
      </div>
      <div className={"flex flex-col w-5/6 md:w-1/3 justify-center"}>
        <p className={"text-lg"}>Directly from <span className={"text-blue-500"}>here</span>: </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name={"name"}
            placeholder={"Your Name"}
            value={formData.name}
            onChange={handleChange}
            className={"text-xl border rounded-lg p-2"}
            required
            />
          <input
            type={"email"}
            name={"email"}
            placeholder={"Your Email"}
            value={formData.email}
            onChange={handleChange}
            className={"text-xl border rounded-lg p-2"}
            required
            />
          <textarea
            name={"message"}
            placeholder={"Your Message"}
            value={formData.message}
            onChange={handleChange}
            className={"text-xl border rounded-lg p-2"}
            rows={10}
            required
            />
          <button type={"submit"} className={"bg-blue-500 text-white p-2"}>Send</button>
        </form>
      </div>
    </div>
  )

}




const ContactLinksLayer = () => {
  return (
    <div className="w-screen flex flex-row justify-evenly py-32">
      <div className={"flex flex-col w-1/3 h-1/3 justify-center"}>
        <h1 className={"text-xl"}>Or find Pete on <span className={"text-blue-500"}>these</span> platforms: </h1>
        <div className={"flex flex-row space-x-4 py-8 justify-center"}>
          <a href={"https://www.linkedin.com/in/pete-potipitak/"}><LinkedIn /></a>
          <a href={"https://github.com/Tepah"}><Github /></a>
          <a href={"mailto:potipitak@gmail.com"}><Email /></a>
          <a href="/Pete_Potipitak_Resume.pdf" download><Resume /></a>
        </div>
      </div>
    </div>
  )
}

const MobileContactLinksLayer = () => {
  return (
    <div className="w-screen flex flex-row justify-evenly py-32">
      <div className={"flex flex-col w-1/3 h-1/3"}>
        <h1 className={"text-lg"}>Or find Pete on <span className={"text-blue-500"}>these</span> platforms: </h1>
        <div className={"flex flex-row space-x-4 py-8 justify-center"}>
          <a href={"https://www.linkedin.com/in/pete-potipitak/"}><LinkedIn /></a>
          <a href={"https://github.com/Tepah"}><Github /></a>
        </div>

        <div className={"flex flex-row space-x-4 py-8 justify-center"}>
          <a href={"mailto:potipitak@gmail.com"}><Email /></a>
          <a href="/Pete_Potipitak_Resume.pdf" download><Resume /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
