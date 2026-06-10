import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import noveltyGif from "../../Assets/Projects/novelty.gif";

const tags = ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Full-Stack"];

function Featured() {
  return (
    <Container fluid className="featured-section">
      <Container>
        <Row className="featured-row">
          <Col md={7} className="featured-media">
            <img src={noveltyGif} alt="Novelty book tracker demo" className="featured-gif" />
          </Col>
          <Col md={5} className="featured-copy">
            <p className="featured-eyebrow">Featured Project · Live</p>
            <h2 className="featured-title">Novelty</h2>
            <p className="featured-description">
              A full-stack <span className="blue">social book tracking and discovery app</span> built in Next.js,
              TypeScript, and Supabase. Modeled a Postgres schema with{" "}
              <span className="blue">row-level security</span> for ratings, reviews, shelves, and social follows.
            </p>
            <div className="featured-tags">
              {tags.map((t) => (
                <span className="featured-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="featured-link-row">
              <a
                className="featured-link"
                href="https://novelty-mu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp;Visit Site
              </a>
              <a
                className="featured-link featured-link-secondary"
                href="https://github.com/suttonspindler/novelty"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub /> &nbsp;GitHub
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Featured;
