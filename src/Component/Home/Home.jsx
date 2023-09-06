import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import 'animate.css'
import Homeimg from '../../Assests/gifimage.gif'
const Home = () => {
     // Function will execute on click of button
     const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('SamplePDF.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Resume.pdf';
              alink.click();
          })
      })
   
  }
  return (
    <section className="home container grid" id="Home">
      <div className='home_container animate__animated animate__bounceInLeft'>
        <div className="intro">
          <p>Hi,my name is</p>
          <h1 className='home_name'>Brindha Jai<br/>
          <span>             
          <Typewriter
          options={{
          strings: ['Frontend Developer', 'React Developer','Programmer'],
          autoStart: true,
          loop: true,
          }} 
          />
          </span>
          </h1>
        </div>
        
        <div className='about_box'>
            <p className="about_description">
                I am a Front-end developer from Chennai,TamilNadu, India.I am very passionate about learning programming & developing websites. I have created several projects using HTML, CSS, JavaScript and ReactJS to grow my practical experience.  
            </p>
        </div>
        <button className='btn' onClick={onButtonClick}>Resume</button>      
    </div>
    <div className="images">
        <img src={Homeimg} alt="" className="Home_img"/>
        
    </div>
    
    </section>
)}  

export default Home