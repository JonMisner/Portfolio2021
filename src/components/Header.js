import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
    <header className="header" id="myHeader">
      <Navbar
        light
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <a href="#home" className="nav-link active navbar-brand">
            <h1 id="top-logo">JM</h1>
          </a>

          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
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
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
    </Container>
  );
}

export default Header;
