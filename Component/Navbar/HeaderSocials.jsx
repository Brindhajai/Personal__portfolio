import React from 'react'
import {BsTelegram} from "react-icons/bs"
import {AiOutlineLinkedin,AiOutlineGithub} from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className="home_social">
        <a href="https://www.telegram.org/" className="home_social-link" target="_blank">
        <BsTelegram />
        </a>
        <a href="https://www.linkedin.com/" className="home_social-link" target="_blank">
        <AiOutlineLinkedin />
        </a>
        <a href="https://www.github.com/Brindhajai" className="home_social-link" target="_blank">
        <AiOutlineGithub />
        </a>
    </div>  )
}

export default HeaderSocials