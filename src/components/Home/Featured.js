import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import aslGif from "../../Assets/Projects/ASL.gif";

const tags = ["CNN", "Computer Vision", "NLP", "Python", "PyTorch", "Real-Time"];

function Featured() {
  return (
    <Container fluid className="featured-section">
      <Container>
        <Row className="featured-row">
          <Col md={7} className="featured-media">
            <img src={aslGif} alt="Sign Language Translator demo" className="featured-gif" />
          </Col>
          <Col md={5} className="featured-copy">
            <p className="featured-eyebrow">Featured Project</p>
            <h2 className="featured-title">Sign Language Translator</h2>
            <p className="featured-description">
              Live video translator powered by a single CNN trained across <span className="blue">ASL, DGS, and LSE</span>.
              Tuned preprocessing and an NLP pipeline to fix misclassifications and improve transcription accuracy in real time.
            </p>
            <div className="featured-tags">
              {tags.map((t) => (
                <span className="featured-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <a
              className="featured-link"
              href="https://github.com/godinezsteven1/AI-SignLanguage"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp;View on GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Featured;
