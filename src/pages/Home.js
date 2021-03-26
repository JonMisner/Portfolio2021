import React from "react"
import Container from "../components/Container.js"
import Row from "../components/Row.js"
import Col from "../components/Col.js"
import '../App.css';
import Portrait from "../images/Jon4.png"
function Home() {
    return (

       <div className = "body">
           <section id="home">
            <Container>
           <Row>
               <Col size="sm-1"></Col>
               <Col size="sm-5">
                <div id="name-div">
                    <p className="home-font">Hello World! I'm</p>
                    <p id="home-name">Jonathon<br></br>Misner </p>
                    <p className="home-font">A Full Stack Developer With A Passion For Learning <span className="typewriter">New Tech</span></p>
                </div>
               </Col>
               <Col size="sm-5">
                <div id="portrait-div">
                <img src={Portrait} id="portrait" alt="me"/>
                   
                </div>
               </Col>
               <Col size="sm-1"></Col>
           </Row>
           </Container>
           </section>
       </div>
    );
}

export default Home