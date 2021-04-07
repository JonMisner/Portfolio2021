import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header className="header" id="myHeader">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#home" className="nav-link active navbar-brand">
            <h1 id="top-logo">JM</h1>
          </a>

          <button
            className="navbar-toggler float-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#about" className="nav-link active nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#project" className="nav-link activenav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link active nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1QGGNdvhHxktihxbq0X4RZS4llMOs6PqQ/view?usp=sharing"
                  target="_blank"
                  className="nav-link nav-item"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
