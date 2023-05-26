import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Course from "../../components/Course";
import Member from "../../components/Member";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Gym</title>
        </Helmet>
      </HelmetProvider>
      <Hero />
      <About />
      <Course />
      <Member />
    </>
  );
};

export default Home;
