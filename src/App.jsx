import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PublicApiPage from "./pages/PublicApiPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api" element={<PublicApiPage />} />
    </Routes>
  );
}

export default App;
