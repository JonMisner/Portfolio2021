import React from "react"
import Container from "../components/Container.js"
// import Row from "../components/Row.js"
// import Col from "../components/Col.js"
import Form from "../components/Form.js"
// import {Row, Col} from "react-bootstrap"
import '../App.css';
import ContactInfo from "../images/contact-info.png"
// import Rainbow from "../images/rainbow.png"
import {
  Card, CardHeader, CardBody,
  CardTitle, Row, Col, NavLink
} from 'reactstrap';
import emailLogo from "../icons/blueMailLogo.png";
import githubLogo from "../icons/githubLogo5.png";
import linkedinLogo from "../icons/linkedinLogo.png";

import { useMediaQuery } from 'react-responsive';
import "../styles/contact.css"

function Contact(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
});

const isTabletOrPhone = useMediaQuery({
    query: '(max-device-width: 1023px)'
});
    return (
       <div className = "body">
           <section id="contact">
           <Container>
        <Row>
        <Col size="sm-12" className="contact">
        <p><span className="contact-font"> Contact</span></p>
        {/* <p className="small">Get in touch</p> */}
        </Col>
        </Row>
        <Row>
        


    return (
        <div>    
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" className="cardHeader">
                            <Row>
                                <Col className="ml-4 text-center">Jon Misner</Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="cardBody">
                            <Row>
                                <Col className="text-center m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Full Stack Developer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:jonmisner.developer@gmail.com" target="_blank"><img className="logo" src={emailLogo} alt="Logo"/> </NavLink>
                                    <NavLink href="https://www.linkedin.com/in/jonathon-misner-93395b40/" target="_blank"><img className="logo" src={linkedinLogo} alt="Logo"/></NavLink>
                                    <NavLink href="https://github.com/JonMisner" target="_blank"><img className="logo" src={githubLogo} alt="Logo"/> </NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">Jon Misner</Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Full Stack Developer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    <NavLink href="mailto:jonmisner86@gmail.com" target="_blank"><img className="logo" src={emailLogo} alt="Logo"/></NavLink>
                                    <NavLink href="https://www.linkedin.com/in/joe-young-8a499a18a/" target="_blank"><img className="logo" src={linkedinLogo} alt="Logo"/></NavLink>
                                    <NavLink href="https://github.com/JYoung32" target="_blank"><img className="logo" src={githubLogo} alt="Logo"/></NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}
        </Row>
        <Row>
          <Col size="sm-12" id="copyright">
            <p>&#169;Jonathon Misner 2021
            {/* <img src={Rainbow} id="rainbow"src="assets/images/rainbow.png" alt="rainbow" /> */}
         </p>
            </Col>
            </Row>
        </Container>
           </section>

</div>
    );
}

export default Contact
