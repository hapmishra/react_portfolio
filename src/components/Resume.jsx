import React from 'react'
import user from '../constants/user_details'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>{user.name}</h4>
              <p><em>Full Stack Web Developer and Freelancer with 2+ years of experience</em></p>
              <ul>
                <li>Preet Vihar Delhi In</li>
                <li><a href="tel:+917880811002" style={{ textDecoration: "none",color:"inherit" }}>+917880811002</a></li>
                <li><a href="mailto:heyshivanshu01@gmail.com" style={{ textDecoration: "none",color:"inherit" }}>heyshivanshu01@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4> Masters in Computer Application(MCA)</h4>
              <h5>2023 - 2025</h5>
              <p><em>Indira Gandhi National Open University</em></p>
              <p>I completed my MCA from IGNOU college in 2025, Here I learned  About BlockChain, How Smart contracts work and the Deep knowledge of WEB3 And many thing that help me in present</p>
            </div>
            <div className="resume-item">
              <h4>Bachelors's in Computer Application(BCA)</h4>
              <h5>2019 - 2022</h5>
              <p><em>Chaudhary Charan Singh University</em></p>
              <p>I completed my BCA from IPEM college in 2022, Here I learned  About Web Development, How frontend and backend work Api intregration And many thing that help me in present</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>Mer 2022 - Present</h5>
              <p><em>Akonto Payment Solution pvt ltd. </em></p>
              <ul>
                <li>My role is FullStack Developer and My responsibilities are to maintain and Develop Frontend and backend both... The complete UI is based on React and Backend on Nodejs, ExpressJs and MySql.</li>
                
              </ul>
            </div>
            <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>Apr 2021 - Aug 2021</h5>
              <p><em>Physiomatica Health Care</em></p>
              <ul>
                <li>My Role was MERN Stack and my responsibility are to develop React Website and Dashboard Using ReactJs,Meterial UI ,Redux, NodeJs, ExpressJs and Mongodb.</li>
     
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Jan 2021 -  Jun 2021</h5>
              <p><em>Futureminds</em></p>
              <ul>
                <li>My Role was Frontend  Developer and my responsibility are to develop Website  Using HTML, CSS, JavaScript, Jquery and Bootstrap. andalso make responsive layout and here I done some work on figma</li>
                 
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume