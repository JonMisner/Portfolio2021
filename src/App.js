import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.js";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
// import Wrapper from "./components/Wrapper.js";
// import Resume from "./components/resume";
import { Jumbotron, Container } from "reactstrap"

function App() {
  return (
    <Router>
     <Container className='container-fluid'>
        <Header />
  
     
        <Home />
        <About />
        <Projects />
        <Contact />

      </Container>

    </Router>
  );
}

export default App;
