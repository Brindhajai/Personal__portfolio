import React, { useState } from 'react'
import './Projects.css'
import Work from './work'
import 'animate.css'
const Projects = () => {
  const [items,setItems]=useState(Work);
  const filterItem=(categoryItem)=>{
    const updatedItems=Work.filter((curElement)=>{
      return curElement.category === categoryItem;
    })
    setItems(updatedItems);
  }
  return (
  <section className="work container section" id="Projects">
      <h2 className="section_title animate__animated animate__bounceInLeft">Projects</h2>
      <div className="work_filters">
        <span className="work_item" onClick={()=>setItems(Work)}>All</span>
        <span className="work_item" onClick={()=>filterItem("CSS")}>CSS</span>
        <span className="work_item" onClick={()=>filterItem("Javascript")}>Javascript</span>
        <span className="work_item" onClick={()=>filterItem("Reactjs")}>Reactjs</span>
      </div>
      <div className="work_container grid">
          {items.map((e)=>{
            const{id,image,title,category,detail}=e;
            return(
              <div className="work_card animate__animated animate__backInDown" key={id} >
                {/* <div className="work_thumbnail"> */}
                  <div className='image_container'>
                    <img src={image} alt="" className='work_img'/>
                    <div className="work_mask"></div>
                  </div>
                  <div className='content'>
                  {/* <span className="work_category">{category}</span> */}
                  <h3 className="work_title">{title}</h3>
                  <p className="work_detail">{detail}</p>
                  <a href="#" className='work_button'>demo
                  </a>
                  </div>
                </div>
              // </div>
               )
              })}
      </div>
  </section>
    )

}

export default Projects