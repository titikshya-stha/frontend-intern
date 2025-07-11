import React, { useState } from "react";
import axios from "axios";

const PublicApiPage = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      setJoke(res.data.joke);
    } catch (error) {
      setJoke("Failed to fetch joke.");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Joke Generator</h1>
      <button
        onClick={fetchJoke}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get a Joke
      </button>
      {joke && <p className="mt-4 text-lg">{joke}</p>}
    </div>
  );
};

export default PublicApiPage;
