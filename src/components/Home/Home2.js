import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import {
  AiFillGithub
} from "react-icons/ai";
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
              – I am a <b className="blue">dedicated</b> computer science student at Northeastern University with a GPA of <b className="blue">3.9/4.0.</b>
              <br />
              <br />
              – I excel in languages like <b className="blue">Java, JavaScript, C++, and Python,</b> and I'm adept with tools like <b className="blue">Docker, GitHub, and React.</b>
              <br />
              <br />
              – Currently, I'm a <b className="blue">Senior Web & Software Developer</b> for <b className="blue">Northeastern Science Magazine,</b> where I've built a website and created a network builder app using <b className="blue">Node.js and Express.</b>
              <br />
              <br />
              – I've also worked as a <b className="blue">Teaching Assistant,</b> helping students grasp <b className="blue">object-oriented programming</b> concepts.
              <br />
              <br />
              – Previously, I developed a project management dashboard for <b className="blue">Northeastern Electric Racing</b> and gained retail experience at <b className="blue">Target Corporation.</b>
              <br />
              <br />
              – My project portfolio includes a <b className="blue">Patient Daily Health Survey</b> web app, a Unity-based horror game called <b className="blue">"Snail Game,"</b> and a water leak detection app prototype called <b className="blue">"Leaky."</b>
              <br />
              <br />
              – Beyond academics, I'm passionate about <b className="blue">reading, world cinema, geography, indie/rock music, strategu games, and comedy sketches.</b>
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
