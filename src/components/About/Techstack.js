import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiC
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techStack = [
    { icon: DiJava, label: "Java" },
    { icon: DiJavascript1, label: "JavaScript" },
    { icon: DiPython, label: "Python" },
    { icon: SiC, label: "C" },
    { icon: CgCPlusPlus, label: "C++" },
    { icon: DiNodejs, label: "Node.js" },
    { icon: DiReact, label: "React" },
    { icon: DiMongodb, label: "MongoDB" },
    { icon: DiGit, label: "Git" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {React.createElement(tech.icon)}
          <span className="tech-label">{tech.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
