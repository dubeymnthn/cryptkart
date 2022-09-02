import React from "react";

import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
import MainContent from "./MainContent";
import "./two.css";
const Ts1 = () => {
  const customInit = (tsParticles) => {
    loadSeaAnemonePreset(tsParticles);
  };

  const options = {
    background: {
      color: "#000000",
    },
    particles: {
      color: {
        value: "#CF5C36",
      },
      opacity: {
        value: 0.5,
      },
      lineLinked: {
        color: {
          value: "#EFC88B",
        },
        consent: true,
      },
    },
    interactivity: {
      events: {
        onHover: {
          mode: ["grab", "bubble"],
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 200,
        },
        bubble: {
          size: 10,
        },
      },
    },
    preset: "seaAnemone",

    backgroundMode: {
      enable: true,
      zIndex: -1,
    },
  };

  return (
    <>
      <section>
        <Particles options={options} init={customInit} />;
      </section>
    </>
  );
};

export default Ts1;
