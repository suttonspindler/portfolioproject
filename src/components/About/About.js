import React from "react";
import { Container } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Journey from "./Journey";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <header className="about-header">
          <h1 className="about-page-title">
            About <span className="blue">Me</span>
          </h1>
        </header>

        <div className="about-block">
          <Aboutcard />
        </div>

        <div className="about-block">
          <h2 className="about-section-title">
            How I <span className="blue">Got Here</span>
          </h2>
          <Journey />
        </div>

        <h1 className="project-heading">
          <strong className="blue">Technologies</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">Software</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
