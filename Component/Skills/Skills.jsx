import React, { useState } from 'react'
import './Skills.css'
import Data from './skills_data'
import 'animate.css'

const Skills = () => {
  const[items,setItems]=useState(Data);  
  return (
    <div className='skills container section' id='Skills'>
        <h2 className='section_title animate__animated animate__bounceInLeft'>Skills</h2>
        <div className='skills_container grid'>
            {items.map((e)=>{
              const{id,image,skills}=e;
              return(
                <div className="skills_card animate__animated animate__backInDown" key={id}>
                    <img src={image} alt="" className='skills_img'/>
                </div>
                
              )
            })}
          </div>
    </div>        
  )}
export default Skills