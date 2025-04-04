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
    <div id="form" style={{ padding: "20px" }}>
      <h2>Tell us your preferences</h2>
      <form onSubmit={handleSubmit}>
        <input name="cuisine" placeholder="Cuisine" onChange={handleChange} />
        <input name="price" placeholder="Price Range" onChange={handleChange} />
        <input name="distance" placeholder="Distance" onChange={handleChange} />
        <button type="submit">Get Suggestions</button>
      </form>
      <ul>
        {results.map((r, i) => (
          <li key={i}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreferenceForm;
