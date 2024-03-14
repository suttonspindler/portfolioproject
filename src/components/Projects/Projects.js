import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import solitaire from "../../Assets/Projects/solitaire.png";
import leaky from "../../Assets/Projects/leaky.png";
import survey from "../../Assets/Projects/survey.png";
import snail from "../../Assets/Projects/snail.png";
import escape from "../../Assets/Projects/escape.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={survey}
              title="Patient Daily Health Survey"
              description="Created for Aidar Health, a biotech company, this web application allows physicians to create daily health
              surveys and assign them to patients."
              ghLink="https://github.com/suttonspindler/Patient-Daily-Health-Survey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snail}
              title="Snail Game"
              description="Programmed 3D horror/puzzle game in Unity with C# as entry for 2023 Jam-O-Lantern Game Jam.
              Developed in 8-member team formed within Northeastern’s Game Studio Club."
              ghLink="https://github.com/AlexMalakov/SnailUnity"
              demoLink="https://daezel.itch.io/snail-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaky}
              title="Leaky"
              description="Collaborated on user-experience design for prototype app used to detect water leaks in
              buildings."
              presentationLink = "https://docs.google.com/presentation/d/1iDNFgkjJBG_ixZdO5ga_RQukxaTCW_ti_jky_TZNq6c/edit?usp=sharing"
              demoLink = "https://4yrirn.axshare.com/?id=rw91fu&p=intial_page"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solitaire}
              title="Marble Solitaire"
              description="Designed game containing UI using Swing to control user input and output of images in Java.
              Structured program using MVC design pattern for organized separation of front-end and back-end."
              ghLink="https://github.com/suttonspindler/Marble-Solitaire"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={escape}
              title="Planet Escape"
              description="Developed entry for the 2021 Amaze Me Game Jam (Hackathon) hosted by YoYo Games and Opera GX.  Involved developing, programming, and testing the game using JavaScript within a 2-week time limit."
              demoLink = "https://atomicnarration.itch.io/planet-escape" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
