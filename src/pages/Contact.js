import React from 'react';
import PageTransition from "../components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <div>
        <h1>Contact</h1>
        <p>Here are some ways to contact me</p>

      </div>
    </PageTransition>
  )
}

const instagramLayer = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="https://via.placeholder.com/150" alt="instagram" />
      </div>
      <div>
        <h1>Instagram</h1>
        <p>Here is my Instagram</p>
      </div>
    </div>
  )
}

const emailLayer = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="https://via.placeholder.com/150" alt="email" />
      </div>
      <div>
        <h1>Email</h1>
        <p>Here is my Email</p>
      </div>
    </div>
  )
}

export default Contact;
