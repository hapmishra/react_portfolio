import React from "react";
import { useState } from "react";
import {NavLink, Outlet } from "react-router-dom";
function SideBar() {
  const [toggle,setToggle] = useState(false)
  const sidebarOpen = ()=>{
    setToggle((pre)=>!pre)
    const element=document.querySelector('body');
    element.classList.toggle("mobile-nav-active");
  }
  return (
    <>
    <i className={`${!toggle?"fa-solid fa-bars":"fa-sharp fa-solid fa-xmark"} buttonForToggle mobile-nav-toggle d-lg-none ` } onClick={sidebarOpen}></i>
      <header id="header" className="d-flex flex-column justify-content-center ">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <NavLink to="home" className="nav-link scrollto" onClick={sidebarOpen}>
              <i className="fa-solid fa-house"></i> <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="nav-link scrollto" onClick={sidebarOpen}>
              <i className="fa-solid fa-user"></i> <span>About</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="resume" className="nav-link scrollto " onClick={sidebarOpen}>
              <i className="fa-regular fa-file"></i> <span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="work" className="nav-link scrollto" onClick={sidebarOpen}>
              <i className="fa-solid fa-briefcase"></i> <span>Work</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="services" className="nav-link scrollto" onClick={sidebarOpen}>
              <i className="fa-sharp fa-solid fa-gear"></i> <span>Services</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink to="contact" className="nav-link scrollto" onClick={sidebarOpen}>
              <i className="fa-solid fa-envelope"></i> <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>  
    {<Outlet />}
    </>
  );
}

export default SideBar;
