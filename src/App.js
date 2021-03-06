import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.js";
import "./App.css";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";

import { Container } from "reactstrap";
// const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Container className="container-fluid">
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;
