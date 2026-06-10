import React from "react";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C", "C#", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "PyTorch", "JUnit"],
  },
  {
    title: "Data & Infrastructure",
    items: ["MongoDB", "PostgreSQL", "Supabase", "AWS", "Docker", "Jenkins", "Git"],
  },
  {
    title: "Areas of Focus",
    items: ["Full-Stack Web", "REST APIs", "CI/CD", "Edge AI / On-Device ML", "RAG / LLM Tooling", "Developer Platforms"],
  },
];

function SkillsGrid() {
  return (
    <div className="skills-grid">
      {groups.map((g) => (
        <div className="skills-group" key={g.title}>
          <h3 className="skills-group-title">{g.title}</h3>
          <div className="skills-chip-row">
            {g.items.map((item) => (
              <span className="skills-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsGrid;
