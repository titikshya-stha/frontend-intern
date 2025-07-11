import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Team from "../components/Team";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Team />
      <Contact />
      <SocialLinks />
      <Footer />
    </>
  );
};

export default Home;
