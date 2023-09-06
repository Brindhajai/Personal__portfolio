import React from 'react'
import './Education.css'
import Data from './Data'
import Card from './Card'
import 'animate.css'
const Education = () => {

  return (
    <section className='education container grid' id="Education">
      <h2 className="section_title">Education</h2>
      <div className="education_container course grid animate__animated animate__bounceInLeft">
        <div className="timeline grid ">
          {Data.map((val,id)=>{
            if(val.category === "education"){
              return (<Card key={id} icon={val.icon} title={val.title}
              year={val.year} desc={val.desc}/>)
            }

          })}
        </div>

        <div className="timeline grid exp">
          {Data.map((val,index)=>{
            if(val.category === "experience"){
              return (<Card key={index} icon={val.icon} title={val.title}
              year={val.year} desc={val.desc}/>)
            }

          })}
        </div>
      </div>
    </section>
  )
}

export default Education