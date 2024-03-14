import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="blue">Sutton Spindler</span>, a passionate programmer currently in my Junior year of pursuing a bachelor's degree in Computer Science at  <span className="blue"> Northeastern University</span>.
            <br />
            <br />
            My fields of expertise include Object-Oriented Design (OOD), Web Development (Full-Stack), Algorithms & Data, Database Systems, as well as several programming languages (C++, Java, Python, JavaScript, etc).
            <br />
            <br />
            Here are some notable accomplishments I have achieved thus far in my career:
          </p>
          <ul>
            <li className="about-activity">
            - <span className="blue">150+</span> students educated as a teaching assistant.
            </li>
            <li className="about-activity">
            - <span className="blue">87</span> course credits earned.
            </li>
            <li className="about-activity">
            - <span className="blue">200+</span> hours invested in teaching assistantance, contributing to the educational experience.
            </li>
            <li className="about-activity">
            - <span className="blue">35+</span> full-stack tickets contributed in clubs and organizations.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
