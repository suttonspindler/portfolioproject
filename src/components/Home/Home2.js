import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A<span className="blue"> BRIEF OVERVIEW</span>
            </h1>
            <p className="home-about-body">
              I work across the full software stack with a soft spot for problems that touch{" "}
              <b className="blue">AI, infrastructure, and developer experience</b>. My day-to-day stack is{" "}
              <b className="blue">TypeScript, Python, and Java</b> with{" "}
              <b className="blue">React, Next.js, Node.js, MongoDB, Docker, and AWS</b>.
              <br />
              <br />– At <b className="blue">Verizon</b>, I built on-device ML inference for real-time video detection on
              embedded router hardware, under 50ms latency, no data leaving the device.
              <br />
              <br />– At <b className="blue">SphereUs</b>, I migrated production infrastructure from PostgreSQL to
              MongoDB while the platform scaled from 0 to 8 brand partners.
              <br />
              <br />– At <b className="blue">CSL Behring</b>, I built document-parsing pipelines with{" "}
              <b className="blue">AWS Textract</b> and prototyped a RAG system over internal pharmaceutical datasets.
              <br />
              <br />– Outside of work I’m into{" "}
              <b className="blue">
                reading, world cinema, geography, indie + classic rock, strategy games, and comedy sketches.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/suttonspindler"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sutton-spindler/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
