import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles-bg"
      params={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: { enable: true, value_area: 900 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.55,
            random: true,
            anim: { enable: true, speed: 0.6, opacity_min: 0.12, sync: false },
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
