import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import Featured from "./Featured";
import Metrics from "./Metrics";
import portrait from "../../Assets/home-main.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="hero-row">
            <Col md={7} className="hero-stack">
              <p className="hero-eyebrow">Software Engineer · Northeastern University · 2026 Graduate</p>
              <h1 className="hero-name">Sutton Spindler</h1>
              <p className="hero-tagline">
                I build <span className="blue">API platforms</span>, <span className="blue">edge AI</span>, and{" "}
                <span className="blue">full-stack systems</span>. Currently shipping internal developer infrastructure at{" "}
                <span className="blue">Verizon</span>.
              </p>
              <div className="hero-cta-row">
                <Link to="/project" className="hero-cta hero-cta-primary">
                  See Projects
                </Link>
                <Link to="/resume" className="hero-cta hero-cta-secondary">
                  View Resume
                </Link>
              </div>
            </Col>
            <Col md={5} className="hero-portrait-col">
              <img src={portrait} alt="Sutton Spindler" className="hero-portrait" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Metrics />
      <Featured />
      <Home2 />
    </section>
  );
}

export default Home;
