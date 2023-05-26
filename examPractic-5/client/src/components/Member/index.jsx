import React from "react";

const Member = () => {
  return (
    <section id="member">
      <div className="container">
        <div className="title text-center text-light">
          <h1
            style={{
              fontSize: "36px",
              lineHeight: "43.2px",
              fontWeight: "600",
            }}
          >
            Huge Transaction in last Week
          </h1>
          <p style={{ fontSize: "14px", padding: "20px 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="memberBtn">Become A Member</button>
        </div>
      </div>
    </section>
  );
};

export default Member;
