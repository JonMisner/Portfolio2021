import React from "react";
import LinkedIn from "../images/linkedin.png"
import GitHub from "../images/github.png"
import Twitter from "../images/twitter.png"
import '../App.css';

function Footer() {
    return (
        <footer className="navbar fixed-bottom">
        <a href="https://www.linkedin.com/in/alexandra-hionis/">
          <img src={LinkedIn} alt="LinkedIn icon" className="social-icons" />
        </a>
        <a href="https://github.com/Alexandra-Hionis">
        <img src={GitHub} alt="Github icon" className="social-icons" />
        </a>
        <a href="https://twitter.com/AlexandraHionis">
        <img src={Twitter}alt="Twitter icon" className="social-icons" />
        </a>
    
      </footer>
  );
}

export default Footer;