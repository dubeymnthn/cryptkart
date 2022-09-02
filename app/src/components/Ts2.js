import React from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

const Ts2 = () => {
  const customInit = (tsParticles) => {
    loadTrianglesPreset(tsParticles);
  };

  const options = {
    preset: "triangles",

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

export default Ts2;
