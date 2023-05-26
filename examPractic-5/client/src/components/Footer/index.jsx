import React from "react";

const Footer = () => {
  return (
    <footer
      className="container d-flex align-items-center justify-content-between"
      style={{ padding: "100px 0", fontFamily: "Poppins, sans-serif " }}
    >
      <div style={{width:"100%"}} className="row d-flex justify-content-between align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
            Copyright ©2023 All rights reserved | This template is made with by
            <a href="#" style={{ color: "#f6214b" }}>
              {" "}
              Colorlib
            </a>
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="socials d-flex justify-content-end">
            <a className="social" href="#">
              <i
                style={{ fontSize: "14px" }}
                className="fa-brands fa-facebook-f"
              ></i>
            </a>
            <a className="social" href="#">
              <i
                style={{ fontSize: "14px" }}
                className="fa-brands fa-twitter"
              ></i>
            </a>
            <a className="social" href="#">
              <i
                style={{ fontSize: "14px" }}
                className="fa-brands fa-dribbble"
              ></i>
            </a>
            <a className="social" href="#">
              <i
                style={{ fontSize: "14px" }}
                className="fa-brands fa-behance"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
