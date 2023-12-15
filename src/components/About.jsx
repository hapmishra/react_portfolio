import React from "react";
import myimg from "../img/happy_profile_pic.JPG";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSpring, animated } from "react-spring";
import resume from '../img/cv_17_03_23.pdf'
import user from '../constants/user_details'

function About() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 60 },
  }));

  

  const skills = [
    {name:"JAVA",val:"80"},
    {name:"Android",val:"80"},
    {name:"Dart",val:"80"},
    {name:"Flutter",val:"90"},
    {name:"Material UI",val:"85"},
    {name:"JavaScript",val:"60"},
    {name:"React",val:"60"},
    {name:"NodeJs",val:"70"},
    {name:"ExpressJS",val:"70"},
    {name:"MongoDB",val:"80"},
    {name:"MySql",val:"70"},
    
  ]

  return (
   
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <animated.div
            className="col-lg-4"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
          >
            <img src={myimg} className="img-fluid borderNew" alt="not found" />
          </animated.div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h2 style={{ fontWeight: 'bold', color: 'black'}}>{user.profile}</h2>
            <p className="fst-italic">
              {user.aboutme}
            </p>
            <p className="fst-italic">
              {user.eBg}
            </p>
            <p className="fst-italic">
              {user.pBg}
            </p>
            <p className="fst-italic">
              {user.aspiration}
            </p>

            <div className="row">
              <div className="col-lg-6">
                <h5 style={{ fontWeight: 'bold', color: 'black'}}>Contact Contact Details</h5>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <a
                      href={user.emailLink}
                      style={{ textDecoration: "none" }}
                    >
                      {user.emailAd}
                    </a>
                  </li>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://heyshivanshu.netlify.app"
                      style={{ textDecoration: "none" }}
                    >
                      https://heyshivanshu.netlify.app
                    </a>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>{" "}
                    <a
                      href={user.mobileNoLink}
                      style={{ textDecoration: "none" }}
                    >
                      {user.mobileNo}
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Delhi In</span>
                  </li>
                </ul>
                
              </div>
              <div className="col-lg-6 d-flex  align-items-center">
                <a href={resume} className="button-58" download>
                  <span className="text">
                    <i className="fa-solid fa-download"></i> Download Resume
                  </span>
                </a>
              </div>
              
            </div>
          </div>

         
        </div>
        <div id="skills" className="skills section-bg my-5">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>I love working on new and exciting technologies emerging nowadays.I have good work experience as a MERN Stack Developer in startup(s) and UI/UX Designer where I was core member of the development team and done quite some contribution to open source as well</p>
        </div>
        <div className="row skills-content">
          {skills.map((item)=>{
            return <div className="col-lg-6"key={item.name}>
             <div className="progress" >
              <span className="skill">{item.name} <i className="val">{item.val}%</i></span>
              <div className="progress-bar-wrap" style={{borderRadius:"5px"}}>
              <ProgressBar bgColor="#0d6efd" completed={item.val} height="20px" isLabelVisible={false} transitionDuration="3s" animateOnRender={true} />
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
      </div>
      
    
    </section>
   
  );
}

export default About;
