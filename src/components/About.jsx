import React from "react";
import about1 from "../assets/about1.jpg";

const About = () => (
  <section
    id="about"
    className="p-10 bg-cover bg-center text-white text-center"
    style={{ backgroundImage: `url(${about1})` }}
  >
    <div className="bg-black bg-opacity-50 p-6 rounded">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg max-w-3xl mx-auto">
        We are a team of passionate developers creating cutting-edge web experiences. At Aakash Labs, innovation and creativity drive everything we do.
      </p>
    </div>
  </section>
);

export default About;
