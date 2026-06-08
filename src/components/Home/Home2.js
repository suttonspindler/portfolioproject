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
              – I am a <b className="blue">Software Engineer</b> at{" "}
              <b className="blue">Verizon</b>, building Next.js/Node.js features for an internal API Marketplace and
              architecting backend services across cloud and gateway environments.
              <br />
              <br />– I graduated from <b className="blue">Northeastern University</b> in December 2025 with a B.S. in
              Computer Science, a <b className="blue">3.83/4.00</b> GPA, and Dean’s List honors every semester.
              <br />
              <br />– I work across the full stack and specialize in{" "}
              <b className="blue">TypeScript, JavaScript, Python, Java, and C++</b>, with{" "}
              <b className="blue">React, Next.js, Node.js, MongoDB, Docker, and AWS.</b>
              <br />
              <br />– Previously at <b className="blue">Verizon</b>, I built on-device ML inference pipelines for
              real-time video detection on embedded hardware — keeping customer data local and cutting end-to-end
              latency to under 50ms.
              <br />
              <br />– At <b className="blue">SphereUs</b>, I migrated production infrastructure from PostgreSQL to
              MongoDB while the platform scaled from 0 to 8 brand partners, and integrated{" "}
              <b className="blue">OpenAI APIs</b> to automate ambassador outreach.
              <br />
              <br />– At <b className="blue">CSL Behring</b>, I built document-parsing pipelines with{" "}
              <b className="blue">AWS Textract</b> and prototyped a RAG system over internal pharmaceutical datasets.
              <br />
              <br />– My favorite recent project is a <b className="blue">live sign language translator</b> that runs a
              single CNN across <b className="blue">ASL, DGS, and LSE</b> for real-time transcription from a webcam.
              <br />
              <br />– Outside of work, I’m passionate about{" "}
              <b className="blue">
                reading, world cinema, geography, indie and classic rock music, strategy games, and comedy sketches.
              </b>
              <br />
              <br />
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
