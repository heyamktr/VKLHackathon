import React, { useState } from "react";

const PreferenceForm = () => {
  const [form, setForm] = useState({
    cuisine: "",
    price: "",
    distance: "",
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <div id="form" style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Tell us your preferences
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          name="cuisine"
          placeholder="Cuisine"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price Range"
          onChange={handleChange}
          required
        />
        <input
          name="distance"
          placeholder="Distance"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={{
            padding: "0.6rem",
            background: "#0d47a1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Suggestions
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {results.map((r, i) => (
          <li
            key={i}
            style={{
              background: "white",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            {r.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreferenceForm;
