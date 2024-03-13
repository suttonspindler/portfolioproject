import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiSlack,
  SiGithub,
  SiMacos,
  SiKalilinux,
  SiMysql
} from "react-icons/si";

function Toolstack() {
  const techStack = [
    { icon: SiMacos, label: "macOS" },
    { icon: SiWindows, label: "Windows" },
    { icon: SiKalilinux, label: "Kali Linux" },
    { icon: SiVisualstudiocode, label: "VS Code" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiGithub, label: "GitHub" },
    { icon: SiSlack, label: "Slack" }
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

export default Toolstack;
