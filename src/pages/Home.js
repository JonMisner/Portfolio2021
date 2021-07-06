import React from "react";
import Col from "../components/Col.js";
import "../App.css";
import Portrait from "../images/Jon-oval.png";
import { Container, Row } from "reactstrap";

function Home() {
  return (
    <div className="body">
      <section id="home">
        <Container className="home">
          <Row>
            <Col size="sm-5" className="home-col">
              <div id="name-div">
                <p className="home-font">Hello World! I'm</p>
                <p id="home-name">
                  Jonathon<br></br>Misner{" "}
                </p>
                <p className="home-font">
                  A Full Stack Developer With A Passion For Learning{" "}
                  <span className="typewriter">New Tech</span>
                </p>
              </div>
            </Col>
            <Col size="sm-5" id="portrait-col" className="home-col">
              <div id="portrait-div">
                <img src={Portrait} id="portrait" alt="me" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
