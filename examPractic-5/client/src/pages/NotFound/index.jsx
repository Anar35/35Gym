import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>404 | Not Found</title>
        </Helmet>
      </HelmetProvider>
      <section
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <h1 style={{ fontSize: "70px", color: "#F72149" }}>Not Found</h1>
      </section>
    </>
  );
};

export default NotFound;
