import React from "react";
import { Container } from "react-bootstrap";

const CHART_START_YEAR = 2023;
const CHART_END_YEAR = 2026;
const TOTAL_MONTHS = (CHART_END_YEAR - CHART_START_YEAR + 1) * 12; // 48
const TODAY = { year: 2026, month: 6 };

function monthIdx({ year, month }) {
  return (year - CHART_START_YEAR) * 12 + (month - 1);
}

function pct(idx) {
  return (idx / TOTAL_MONTHS) * 100;
}

function barStyle(seg) {
  const start = monthIdx(seg.start);
  const end = seg.current ? monthIdx(TODAY) + 1 : monthIdx(seg.end) + 1;
  return { left: `${pct(start)}%`, width: `${pct(end - start)}%` };
}

const industry = [
  {
    company: "Verizon",
    title: "Software Engineer I",
    subtitle: "formerly Full-Stack Intern (2025) · Full-Stack Co-op (2024)",
    dates: "Jun 2024 – Present",
    current: true,
    segments: [
      { start: { year: 2024, month: 6 }, end: { year: 2024, month: 12 } },
      { start: { year: 2025, month: 6 }, end: { year: 2025, month: 8 } },
      { start: { year: 2026, month: 1 }, current: true },
    ],
  },
  {
    company: "SphereUs",
    title: "Software Engineer",
    dates: "Jan 2025 – May 2025",
    segments: [{ start: { year: 2025, month: 1 }, end: { year: 2025, month: 5 } }],
  },
  {
    company: "CSL Behring",
    title: "Application Developer Intern",
    dates: "Apr 2024 – Jun 2024",
    segments: [{ start: { year: 2024, month: 4 }, end: { year: 2024, month: 6 } }],
  },
];

const community = [
  {
    company: "NU Sci Magazine",
    title: "Senior Software & Web Developer",
    dates: "Apr 2023 – Dec 2025",
    segments: [{ start: { year: 2023, month: 4 }, end: { year: 2025, month: 12 } }],
  },
  {
    company: "Northeastern University",
    title: "Teaching Assistant — Fundamentals of CS 2",
    dates: "Aug 2023 – Dec 2023",
    segments: [{ start: { year: 2023, month: 8 }, end: { year: 2023, month: 12 } }],
  },
  {
    company: "Northeastern Electric Racing",
    title: "Software Developer",
    dates: "Jan 2023 – Jun 2023",
    segments: [{ start: { year: 2023, month: 1 }, end: { year: 2023, month: 6 } }],
  },
];

function Ticks() {
  const months = Array.from({ length: TOTAL_MONTHS + 1 }, (_, i) => i);
  return (
    <>
      {months.map((i) => {
        const monthOfYear = i % 12;
        let kind = "minor";
        if (monthOfYear === 0) kind = "major";
        else if (monthOfYear === 6) kind = "mid";
        return <span key={i} className={`gantt-tick tick-${kind}`} style={{ left: `${pct(i)}%` }} />;
      })}
    </>
  );
}

function YearAxis() {
  const years = [];
  for (let y = CHART_START_YEAR; y <= CHART_END_YEAR; y++) {
    years.push(y);
  }
  return (
    <div className="gantt-year-axis">
      <Ticks />
      {years.map((y) => (
        <span
          key={y}
          className="gantt-year-label"
          style={{ left: `${pct(monthIdx({ year: y, month: 1 }))}%` }}
        >
          {y}
        </span>
      ))}
      {years.map((y) => (
        <span
          key={`mid-${y}`}
          className="gantt-mid-label"
          style={{ left: `${pct(monthIdx({ year: y, month: 7 }))}%` }}
        >
          Jul
        </span>
      ))}
    </div>
  );
}

function Row({ entry, track }) {
  return (
    <div className={`gantt-row ${entry.current ? "is-current" : ""}`}>
      <div className="gantt-label">
        <div className="gantt-label-company">{entry.company}</div>
        <div className="gantt-label-role">{entry.title}</div>
        {entry.subtitle && <div className="gantt-label-subtitle">{entry.subtitle}</div>}
        <div className="gantt-label-dates">
          {entry.dates}
          {entry.current && <span className="gantt-current-pill">Current</span>}
        </div>
      </div>
      <div className="gantt-chart">
        <Ticks />
        {entry.segments.map((seg, i) => (
          <div
            key={i}
            className={`gantt-bar bar-${track} ${seg.current ? "bar-current" : ""}`}
            style={barStyle(seg)}
          >
            {seg.current && <span className="gantt-bar-arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <Container fluid className="timeline-section">
      <Container>
        <h1 className="timeline-heading">
          My <strong className="blue">Experience</strong>:
        </h1>
        <p className="timeline-subhead"><span className="subhead-plain">A</span> Timeline</p>

        <div className="gantt">
          <YearAxis />

          <div className="gantt-section-label">Industry</div>
          {industry.map((e, i) => (
            <Row entry={e} track="industry" key={`i-${i}`} />
          ))}

          <div className="gantt-section-label gantt-section-label-community">Northeastern Community</div>
          {community.map((e, i) => (
            <Row entry={e} track="community" key={`c-${i}`} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Timeline;
