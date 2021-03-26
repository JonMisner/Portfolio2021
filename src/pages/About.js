import React from "react";
import Container from "../components/Container.js";
import Row from "../components/Row.js";
import Col from "../components/Col.js";
import '../App.css';

import github from "../icons/githubLogo5.png";
import MySQL from "../icons/mysqlLogo.png";
import node from "../icons/nodeLogo3.png";
import passport from "../icons/passportjsLogo.png"
import reactLogo from '../icons/reactLogo.png';
import foundationLogo from '../icons/foundationLogo.png';
import bulma from '../icons/bulmaLogo.png';
import mongoDB from '../icons/mongo3Logo.png';
import express from '../icons/expressLogo2.png';

function About() {
    return (
       <div className = "body">
           <section id="about">
           <Container>
        <Row>
         
        <Col size="sm-12" className="about">
            <p><span className="slide-right-font"> About Me </span></p>
          </Col>
          <Row>
            <div className="col about-section-font">
              {/* <h3 className="about-section-header">Learner</h3> */}
              <p className="about-paragraphs">
              A fresh full stack developer, I’m ready to create and develop a stunning UX in web applications. I studied at Northwestern University where I gained skills in several different web development technologies, with an emphasis on MERN .  My background is in the Service Industry (with my passion being wine and cocktails) and I can bring that work ethic over with me to this new field. With an emphasis on mobile friendly and responsive designs, my goal is to provide polished, sleek, and engaging web applications. Furthermore, I strive to make the UI approachable, and intuitively easy to use for even novice users. Group projects have been a highlight of my coding experience, and I look forward to collaborating with other talented developers and engineers..
              </p>
            </div>

            {/* <div className="col about-section-font">
              <h3 className="about-section-header" id="word-wrap">Problem Solver</h3>
              <p className="about-paragraphs">
                A fresh full stack developer, I’m ready to create and develop a stunning UX in web applications. I studied at Northwestern University where I gained skills in several different web development technologies, with an emphasis on MERN .  My background is in the Service Industry (with my passion being wine and cocktails) and I can bring that work ethic over with me to this new field. With an emphasis on mobile friendly and responsive designs, my goal is to provide polished, sleek, and engaging web applications. Furthermore, I strive to make the UI approachable, and intuitively easy to use for even novice users. Group projects have been a highlight of my coding experience, and I look forward to collaborating with other talented developers and engineers..</p>
            </div>
            <div className="col about-section-font">
              <h3 className="about-section-header">Dreamer</h3>
              <p className="about-paragraphs">
                My mind has no limits and I am a fan of the creative, the imagination, and even the impossible. I am a
                huge thinker and a curious person.
              </p>
            </div> */}
          </Row>
        </Row>
    
        <Row>
       
          <div className="col">
          <img src={github} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={MySQL} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={node} alt="icon" className="img-fluid node"/>
        </div>
        <div className="col">
          <img src={passport} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={foundationLogo} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={bulma} alt="icon" className="img-fluid bulma"/>
        </div>
        <div className="col">
          <img src={mongoDB} alt="icon" className="img-fluid"/>
        </div>
        <div className="col">
          <img src={express} alt="icon" className="img-fluid express"/>
        </div>
        <div className="col">
          <img src={reactLogo} alt="icon" className="img-fluid"/>
        </div>
         {/* <Col size="sm-6" className="about-photo-text-align">
            <p><span className="slide-right-font"> Web Developer</span></p>
            <p className="about-section-font thumbnail-margin">
              I am an aspiring full stack web developer, with focus on front end development. I love to study new code and
            to build a more intuitive user experience on the web. With each project, my aim is to best engage my
            audience for an impactful user experience, both visually and behind the scenes.</p>
            <p className="about-section-font thumbnail-margin">
              In my spare time I enjoy spending time with my girlfriend,
            family and friends. I enjoy cooking, kickboxing, photography, traveling and skiing. Aside from coding, another main
            goal of mine is real estate. I am a part of the LGBTQIA+ community, I follow women
            in tech and I am always open to new adventures!</p>
          </Col> */}
        </Row>
        </Container>
           </section>

</div>
    );
}

export default About
