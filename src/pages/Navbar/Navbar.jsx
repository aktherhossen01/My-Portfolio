import { FaHome, FaRegUser } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { BiBookAdd } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";

import "./Navbar.css"
import { useState } from "react";
const Navbar = () => {
  const [activeNav,setActiveNav]= useState('#')
    return (
      <nav className="flex bar">
        <a href="#"onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser  /></a>
        <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBookAdd /></a>
        <a href="#project" onClick={()=>setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}> <CgProfile /></a>
        <a href="#education" onClick={()=>setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}> <BiBookAdd /></a>
        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <MdOutlineContactPhone /></a>
      </nav>
    );
};

export default Navbar;