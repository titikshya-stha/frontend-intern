import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Simulated post
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setStatus("Message sent successfully!");
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" required />
        <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </section>
  );
};

export default Contact;
