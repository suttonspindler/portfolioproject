import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="blue">Sutton Spindler</span>, a Software Engineer at <span className="blue">Verizon</span> and a recent graduate of <span className="blue">Northeastern University’s Khoury College of Computer Science</span> (B.S., Dec 2025).
            <br />
            <br />
            My areas of focus include full-stack web development, backend architecture, edge AI / on-device ML, and applied LLM tooling. I work across <span className="blue">TypeScript, JavaScript, Python, Java, and C++</span> with <span className="blue">React, Next.js, Node.js, MongoDB, Docker, and AWS</span>.
            <br />
            <br />
            A few highlights from my career so far:
          </p>
          <ul>
            <li className="about-activity">
            – Graduated with a <span className="blue">3.83/4.00</span> GPA and <span className="blue">Dean’s List honors every semester</span>.
            </li>
            <li className="about-activity">
            – Shipped production code at <span className="blue">4 companies</span> across telecom, biotech, and early-stage startups.
            </li>
            <li className="about-activity">
            – Taught <span className="blue">150+ students</span> as a TA for Northeastern’s Fundamentals of Computer Science 2.
            </li>
            <li className="about-activity">
            – Built a <span className="blue">live multi-language sign language translator</span> using a single CNN across ASL, DGS, and LSE.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
