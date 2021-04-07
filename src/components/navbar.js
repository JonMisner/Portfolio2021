import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import "../styles/nav.css";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md" className="sticky-top">
        <NavbarBrand className="ml-3 jm">JM</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Navigation;