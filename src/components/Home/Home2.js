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
              – I am a <b className="blue">dedicated</b> computer science student at Northeastern University with a GPA
              of <b className="blue">3.9/4.0.</b>
              <br />
              <br />– I have experience across the full software stack and specialize in tools and languages like{" "}
              <b className="blue">Python, JavaScript, Java, and C++</b>, as well as{" "}
              <b className="blue">MongoDB, React, Node.js, and Git.</b>
              <br />
              <br />– Currently, I'm a <b className="blue">Full-Stack Software Development Intern</b> at{" "}
              <b className="blue">Verizon</b>, where I’m building Android and edge AI systems for real-time video
              detection on embedded hardware.
              <br />
              <br />– Previously, I worked as a <b className="blue">Software Engineer</b> at{" "}
              <b className="blue">SphereUs</b> and a <b className="blue">Full-Stack Co-op</b> at{" "}
              <b className="blue">Verizon Boston,</b> focusing on database migration, cloud integrations, and AI-powered
              tools.
              <br />
              <br />– My internship at <b className="blue">CSL Behring</b> involved building data extraction tools with{" "}
              <b className="blue">AWS Textract</b> and researching AI models for dataset summarization.
              <br />
              <br />– My project portfolio includes a <b className="blue">live sign language translator</b> using a
              multi-language CNN model, a <b className="blue">meeting scheduler</b> built with MySQL and Node.js, and a
              Unity-based horror game called <b className="blue">"Snail Game."</b>
              <br />
              <br />– Outside of work, I'm passionate about{" "}
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
