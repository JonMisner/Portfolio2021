import React from "react";
import Container from "../components/Container.js";
import Row from "../components/Row.js";
import Col from "../components/Col.js";
import "../App.css";

import github from "../icons/githubLogo5.png";
import MySQL from "../icons/mysqlLogo.png";
import node from "../icons/nodeLogo3.png";
import passport from "../icons/passportjsLogo.png";
import reactLogo from "../icons/reactLogo.png";
import foundationLogo from "../icons/foundationLogo.png";
import bulma from "../icons/bulmaLogo.png";
import mongoDB from "../icons/mongo3Logo.png";
import express from "../icons/expressLogo2.png";

function About() {
  return (
    <div className="body">
      <section id="about">
        <Container>
          <Row>
            <Col size="sm-12" className="about">
              <p>
                <span className="slide-right-font"> About Me </span>
              </p>
            </Col>
            <Row>
              <div className="col about-section-font">

                <p className="about-paragraphs">
                  A Bartender and Sommelier turned Full Stack Developer. Studied
                  at Northwestern University and gained skills in several
                  different web development technologies, with an emphasis on
                  MERN . Background is in the Service Industry (with my passion
                  being wine and cocktails) and can bring that work ethic over
                  with me to this new field. With an emphasis on mobile friendly
                  and responsive designs, the goal is to provide polished,
                  sleek, and engaging web applications. Furthermore, to make the
                  UI approachable, and intuitively easy to use for even novice
                  users.
                </p>
              </div>
            </Row>
          </Row>

          <Row>
            <div className="col col-img" id="col-img">
              <img src={github} alt="icon" className="img-fluid" />
            </div>
            <div className="col col-img" id="col-img">
              <img src={MySQL} alt="icon" className="img-fluid" />
            </div>
            <div className="col col-img">
              <img src={node} alt="icon" className="img-fluid node" />
            </div>
            <div className="col col-img" id="col-img">
              <img src={passport} alt="icon" className="img-fluid" />
            </div>
            <div className="col col-img" id="col-img">
              <img src={foundationLogo} alt="icon" className="img-fluid" />
            </div>
            <div className="col col-img" id="col-img">
              <img src={bulma} alt="icon" className="img-fluid bulma" />
            </div>
            <div className="col col-img">
              <img src={mongoDB} alt="icon" className="img-fluid" />
            </div>
            <div className="col col-img" id="col-img">
              <img src={express} alt="icon" className="img-fluid express" />
            </div>
            <div className="col col-img">
              <img src={reactLogo} alt="icon" className="img-fluid" />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
