import React from "react";
import graduation from "../assets/graduation.jpg";
import pratima from "../assets/pratima.jpg";
import ruksana from "../assets/ruksana.jpg";

const teamMembers = [
  { name: "Titikshya", role: "Frontend Developer", img: graduation },
  { name: "Pratima", role: "Backend Developer", img: pratima },
  { name: "Ruksana", role: "UI/UX Designer", img: ruksana },
];

const Team = () => (
  <section id="team" className="p-10 bg-white text-center">
    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {teamMembers.map((member, i) => (
        <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-md w-60">
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
