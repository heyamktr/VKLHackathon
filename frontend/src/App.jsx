import { useState } from "react";
import "./App.css";
import GoogleMap from "./components/GoogleMap";
import ChatBox from "./components/ChatBox";

function App() {
  const [businesses, setBusinesses] = useState([
    { name: "Joe's Coffee", category: "Café", location: "Greencastle, IN" },
    { name: "Tech Solutions", category: "IT Services", location: "Indiana" },
  ]);

  const categories = ["Restaurants", "Shops", "Services", "Entertainment"];

  return (
    <div className="app-container">
      {/* Header with categories */}
      <header className="header">
        <h1>Business Directory</h1>
        <nav>
          <ul>
            {categories.map((category, index) => (
              <li key={index}><a href="#">{category}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Google Map Component */}
      <GoogleMap />

      {/* Chatbox Component */}
      <ChatBox />

      {/* Business List */}
      <div className="business-list">
        {businesses.map((b, index) => (
          <div key={index} className="business-card">
            <h3>{b.name}</h3>
            <p><strong>Category:</strong> {b.category}</p>
            <p><strong>Location:</strong> {b.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
