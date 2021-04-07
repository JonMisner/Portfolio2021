import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header className="header" id="myHeader">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            to="/Home"
            className={
              window.location.pathname === "/Home" ||
              window.location.pathname === "/home"
                ? "nav-link active"
                : "navbar-brand"
            }
          >
            {/* <img src={Logo} id="logo" alt="logo"/> */}
            <h1 id="top-logo">JM</h1>
          </Link>

          <button
            className="navbar-toggler"
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
                <Link
                  to="/About"
                  className={
                    window.location.pathname === "/About" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Projects"
                  className={
                    window.location.pathname === "/Projects" ||
                    window.location.pathname === "projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  className={
                    window.location.pathname === "/Contact" ||
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
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
