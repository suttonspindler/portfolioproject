import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import solitaire from "../../Assets/Projects/solitaire.png";
import leaky from "../../Assets/Projects/leaky.png";
import survey from "../../Assets/Projects/survey.png";
import snail from "../../Assets/Projects/snail.png";
import escape from "../../Assets/Projects/escape.png";
import signLanguage from "../../Assets/Projects/ASL.gif";
import meetingScheduler from "../../Assets/Projects/meeting_scheduler.png";
import novelty from "../../Assets/Projects/novelty.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={novelty}
              title="Novelty"
              description="Full-stack social book tracking and discovery app built in Next.js, TypeScript, and Supabase.
              Modeled a Postgres schema with row-level security for ratings, reviews, shelves, and social follows."
              ghLink="https://github.com/suttonspindler/novelty"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signLanguage}
              title="Sign Language Translator"
              description="Live video sign language translator powered by a single CNN trained across ASL, DGS, and LSE.
              Tuned preprocessing and an NLP pipeline to fix misclassifications and improve transcription accuracy in real time."
              ghLink="https://github.com/godinezsteven1/AI-SignLanguage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={survey}
              title="Patient Daily Health Survey"
              description="Proof-of-concept full-stack app built for biotech firm Aidar Health, allowing physicians to create
              daily health surveys and assign them to patients. Delivered during their internship evaluation process."
              ghLink="https://github.com/suttonspindler/Patient-Daily-Health-Survey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetingScheduler}
              title="Meeting Scheduler"
              description="Full-stack app for managing teams and meeting bookings using MySQL, Node.js, and Express.js.
              Handles complex DB interactions with async calls, multi-table joins, and dynamic user roles."
              ghLink="https://github.com/ethanszeto/db-design-meeting-scheduler"
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
