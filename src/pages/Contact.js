import React from "react";
import Container from "../components/Container.js";
import "../App.css";
// import ContactInfo from "../images/contact-info.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  NavLink,
} from "reactstrap";
import emailLogo from "../icons/blueMailLogo.png";
import githubLogo from "../icons/githubLogo5.png";
import linkedinLogo from "../icons/linkedinLogo.png";
import { useMediaQuery } from "react-responsive";
import "../styles/contact.css";

function Contact(props) {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-device-width: 1024px)",
//   });

//   const isTabletOrPhone = useMediaQuery({
//     query: "(max-device-width: 1023px)",
//   });
  return (
    <div className="body">
      <section id="contact">
        <Container>
          <Row>
            <Col size="sm-12" className="contact">
              <p>
                <span className="contact-font"> Contact</span>
              </p>
              {/* <p className="small">Get in touch</p> */}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div className="cardContainer">
              {/* {isDesktopOrLaptop && ( */}
                <>
                  <hr className="my-4" />
                  <Row className="d-flex">
                    <Card className="w-150 mt-3 justify-content-center">
                      <CardHeader tag="h3" className="cardHeader">
                        <Row>
                          <Col className="ml-4 text-center">Jon Misner</Col>
                        </Row>
                      </CardHeader>
                      <CardBody className="cardBody">
                        <Row>
                          <Col className="text-center m-3">
                            <CardTitle className="lead text-center font-weight-bold">
                              Full Stack Developer
                            </CardTitle>
                            <hr className="m-3" />
                            <NavLink
                              href="mailto:jonmisner.developer@gmail.com"
                              target="_blank"
                            >
                              <img
                                className="logo"
                                src={emailLogo}
                                alt="Logo"
                              />{" "}
                            </NavLink>
                            <NavLink
                              href="https://www.linkedin.com/in/jonathon-misner-93395b40/"
                              target="_blank"
                            >
                              <img
                                className="logo"
                                src={linkedinLogo}
                                alt="Logo"
                              />
                            </NavLink>
                            <NavLink
                              href="https://github.com/JonMisner"
                              target="_blank"
                            >
                              <img
                                className="logo"
                                src={githubLogo}
                                alt="Logo"
                              />{" "}
                            </NavLink>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Row>
                </>
        
            </div>
          </Row>
          <Row>
            <Col size="sm-12" id="copyright">
              <p>
                &#169;Jonathon Misner 2021
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
