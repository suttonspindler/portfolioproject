import React from "react";

function Journey() {
  return (
    <div className="journey-body">
      <p>
        My path into software started with <span className="blue">game jams in high school</span>, scrappy projects
        built on tight deadlines and shipped to actual people. That mindset (build it, ship it, learn from feedback)
        is still how I approach most of my work.
      </p>
      <p>
        At <span className="blue">Northeastern</span>, I leaned into the co-op program and bounced between full-stack
        web, backend infrastructure, on-device ML, and applied AI tooling. <span className="blue">CSL Behring</span>{" "}
        taught me how to ship internal tools that real teams depend on. <span className="blue">Verizon</span> taught me
        to think about systems at scale, both for cloud APIs and for ML inference running on embedded hardware.{" "}
        <span className="blue">SphereUs</span> taught me to move fast for an early-stage product.
      </p>
      <p>
        Now I’m at <span className="blue">Verizon full-time</span>, building internal developer infrastructure that
        other engineers use to ship faster. Outside of work, I keep building, {" "}
        <span className="blue">Novelty</span> (a social book tracker in Next.js + Supabase), and a steady stream of
        side experiments where AI touches the work in a non-obvious way.
      </p>
    </div>
  );
}

export default Journey;
