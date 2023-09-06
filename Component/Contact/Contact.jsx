import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import 'animate.css'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h1jak24', 'template_vfji3ps', form.current, 'xrtFBzkz-j-kKgs_U')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact container section' id="Contact">
      <h2 className='section_title animate__animated animate__bounceInLeft'>Get in Touch</h2>

      <div className='contact_container grid'>

        <div className="contact_info">
          <h3 className="contact_title">Let's talk</h3>
          <p className="contact_details">Send me an email
          <br/>Email Id: bindujai.62@gmail.com</p>
          
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact_form'>
       <div className="contact_form-group">
        <div className="contact_form-div">
          <input type="text" name="user_name" className="contact_form-input" placeholder='Enter Your Name' required/>
        </div>

        <div className="contact_form-div">
          <input type="email" name="user_email" className="contact_form-input" placeholder='Enter Your Email' required/>
        </div>
        </div>

        <div className="contact_form-div">
          <textarea name="message" cols="30" rows="10" className="contact_form-input contact_form-area" placeholder='Write your message' required/>
        </div>

       <button type="submit" className='btn'>Send Message</button>
      </form>
      </div>      
    </section>
  )
}

export default Contact