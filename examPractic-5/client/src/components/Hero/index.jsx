import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div
        className="container d-flex align-items-center justify-content-center flex-column text-center"
        style={{ zIndex: "9" }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "700",
            lineHeight: "72px",
            textTransform: "uppercase",
          }}
        >
          Real Fitness <br />
          Depends on Exercise
        </h1>
        <p
          style={{
            fontSize: "14px",
            textTransform: "uppercase",
            marginTop: "15px",
            lineHeight: "22.75px",
            fontWeight:"300"
          }}
        >
          Shape your body well.
        </p>
      </div>
    </section>
  );
};

export default Hero;
