import React from "react";
import Particles from "react-tsparticles";
import { useLocation } from "react-router-dom";

function Particle() {
  const location = useLocation();
  const isTimeline = location.pathname === "/timeline";

  const color = isTimeline ? "#a48cd9" : "#ffffff";
  const opacityMax = isTimeline ? 0.42 : 0.55;
  const opacityMin = isTimeline ? 0.08 : 0.12;

  return (
    <Particles
      key={isTimeline ? "purple" : "white"}
      id="tsparticles-bg"
      params={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: { enable: true, value_area: 900 },
          },
          color: { value: color },
          shape: { type: "circle" },
          opacity: {
            value: opacityMax,
            random: true,
            anim: { enable: true, speed: 0.6, opacity_min: opacityMin, sync: false },
          },
          size: {
            value: 2.2,
            random: true,
          },
          line_linked: { enable: false },
          move: {
            enable: true,
            direction: "bottom",
            speed: 0.45,
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: false },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 70,
              duration: 0.6,
              speed: 0.6,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
