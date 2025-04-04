import React, { useState } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Fake Gemini response
    const response = { role: "ai", text: `You said: "${input}"` };
    setMessages((prev) => [...prev, response]);
    setInput("");
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>{m.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask me anything..."
      />
    </div>
  );
};

export default ChatBox;
