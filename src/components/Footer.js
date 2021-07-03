import React from "react";
import LinkedIn from "../images/linkedin.png";
import GitHub from "../images/github.png"
import '../App.css';

function Footer() {
    return (
        <footer className="navbar fixed-bottom">
        <a href="https://www.linkedin.com/in/jonathon-misner/">
          <img src={LinkedIn} alt="LinkedIn icon" className="social-icons" />
        </a>
        <a href="https://github.com/jonmisner">
        <img src={GitHub} alt="Github icon" className="social-icons" />
        </a>    
      </footer>
  );
}

export default Footer;