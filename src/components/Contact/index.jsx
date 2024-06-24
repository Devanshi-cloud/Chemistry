import React from 'react'
import "./Contact.css"
import SocialHandles from '../SocialHandles'
const Contact = () => {
  return (
    <section id='contact'>
      <div className="container">
        <h1 className="title">
          <span className="text__gradient">Contact Us</span>
        </h1>
        <p className="text__muted description">Get in Touch</p>
        <p className="text__muted description">
We're here to help! If you have any questions, comments, or concerns, please don't hesitate to reach out to us. You can contact us through the following channels:
        </p>
        <button className="btn btn__primary">Let us talk!</button>
        <SocialHandles />
      </div>
    </section>
  )
}

export default Contact