import React,{useState} from 'react'
import './Navbar.css'
import Logo from '../../Assests/logo.svg';
import HeaderSocials from './HeaderSocials';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const[toggle,showMenu]=useState(false);
  return (
      <>
       <div className={toggle ? "aside show-menu" :"aside"}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className='nav'>
          <div className="nav_menu">
            <ul className="nav_list">
              <NavLink to="/"> 
              <li className="nav_item" >
                  <i className="icon-home"></i>
                  <span className="nav_title" >Home</span>
              </li>
              </NavLink>
              
              <NavLink to="/skills" >
              <li className="nav_item">
                <i className="icon-user-following"></i>
                <span className="nav_title" >Skills</span>
              </li>
              </NavLink>

              <NavLink to="/education" >
              <li className="nav_item">
                <i className="icon-graduation"></i>
                <span className="nav_title">Education</span>
              </li>
              </NavLink>

              <NavLink to="/project" >
              <li className="nav_item">
                <i className="icon-layers"></i>
                <span className="nav_title">Projects</span>
              </li>
              </NavLink>

              <NavLink to="./contact" >
              <li className="nav_item">
                <i className="icon-bubble"></i>
                <span className="nav_title">Contact</span>
              </li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <HeaderSocials/>
        <div className="nav_foooter">
          <span className="copyright">
            &copy;2023.
          </span>
        </div>
      </div>
      
      <div className={toggle? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={()=>showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
      </>
     
      )
}

export default Navbar