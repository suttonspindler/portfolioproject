import React from "react";
import { Container } from "react-bootstrap";

const stats = [
  { value: "Verizon", label: "Software Engineer I" },
  { value: "3.83", label: "GPA · Northeastern Khoury" },
  { value: "Dean's List", label: "Every Semester" },
  { value: "150+", label: "Students Mentored as TA" },
];

function Metrics() {
  return (
    <Container fluid className="metrics-section">
      <Container>
        <div className="metrics-grid">
          {stats.map((s) => (
            <div className="metrics-tile" key={s.label}>
              <div className="metrics-value">{s.value}</div>
              <div className="metrics-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Metrics;
