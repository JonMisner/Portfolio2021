import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header className="header" id="myHeader">
      <Navbar light className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#home" className="nav-link active navbar-brand">
            <h1 id="top-logo">JM</h1>
          </a>

          {/* <button
            className="navbar-toggler float-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <ul className="navbar-nav"> */}
              <NavItem className="nav-item">
                <NavLink href="#about" className="nav-link active nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="#project" className="nav-link active nav-link">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="#contact" className="nav-link active nav-link">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="nav-item active">
                <NavLink
                  href="https://drive.google.com/file/d/1QGGNdvhHxktihxbq0X4RZS4llMOs6PqQ/view?usp=sharing"
                  target="_blank"
                  className="nav-link nav-item"
                >
                  Resume
                </NavLink>
              </NavItem>
          </div>
          </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
