import React,{ useState } from 'react';
import {FaTh,FaBars,FaClipboardCheck} from 'react-icons/fa';
import { AiFillHome} from 'react-icons/ai';
import {IoBook} from 'react-icons/io5';
import {PiCertificateFill} from 'react-icons/pi'
import { MdAccountCircle } from "react-icons/md";
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar= ({Children}) => {

  const[isOpen,setIsOpen] =useState(false);
  const toggle=()=> setIsOpen(!isOpen);
  const menuItem=[
    {
      path:"/components/home/Home",
      name:"Home",
      icon:<AiFillHome/>
    },
    {
      path:"/components/courses/Courses",
      name:"Courses",
      icon:<IoBook/>
    },
    {
      path:"/components/assessment/Assessment",
      name:"Assessment",
      icon:<FaClipboardCheck/>
    },
    {
      path:"/components/certificate/Certification",
      name:"Certification",
      icon:<PiCertificateFill/>
    },
    {
      path:"/components/profile/Profile",
      name:"Profile",
      icon:<MdAccountCircle/>
    }
  ]
    return (
      <div className='container'>
        <div style={{width:isOpen ? "200px": "50px"}} className='sidebar'>
          <div className='top_section'>
            <h1 style={{display:isOpen ? "block": "none"}} className='logo'>LMS</h1>
            <div style={{marginLeft:isOpen ? "60px": " 0px"}}className='bars'>
              <FaBars onClick={toggle}/>
            </div>
          </div>
          {
            menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className='link' activeclassName='active'>
              <div className='icon'>{item.icon}</div>
              <div style={{display:isOpen ? "block": "none"}} className='link_text'>{item.name}</div>
            </NavLink>
            ))
          }
        </div>
        <main>{Children}</main>
      </div>
    )
};
export default NavBar