import React from "react";
import "./Header.css";

const Header = () => {
  const categories = [
    { name: "Food", url: "https://food.com" },
    { name: "Shopping", url: "https://shopping.com" },
    { name: "Entertainment", url: "https://entertainment.com" },
    { name: "Travel", url: "https://travel.com" },
  ];

  return (
    <header className="header">
      {categories.map((cat) => (
        <a href={cat.url} key={cat.name} target="_blank" rel="noreferrer">
          {cat.name}
        </a>
      ))}
      <button onClick={() => window.location.href = "#form"}>Get Recommendations</button>
    </header>
  );
};

export default Header;
