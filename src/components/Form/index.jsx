// src/components/Form.js
import React, { useState } from "react";
import { Link } from "gatsby"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada!");

  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
        />
      </div>
      <button type="submit" style={{ marginRight: "20px",padding: "0.5rem 2rem", backgroundColor: "#0073e6", color: "white", border: "none", cursor: "pointer" }}>
        Enviar!
      </button> 
      <Link to="/" style={{ padding: "0.5rem 2rem", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
      Home
      </Link>
    </form>
  );
};

export default Form;
