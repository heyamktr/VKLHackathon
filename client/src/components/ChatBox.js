import React, { useState } from "react";
import "./ChatBox.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);


const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  
    try {
      console.log("API KEY:", process.env.REACT_APP_GEMINI_API_KEY); // Check if it's loaded
  
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      const chat = model.startChat({
        history: newMessages.map((m) => ({
          role: m.from === "user" ? "user" : "model",
          parts: [{ text: m.text }],
        })),
      });
  
      const result = await chat.sendMessage(input);
      const response = await result.response.text();
  
      console.log("Gemini Response:", response);
      setMessages([...newMessages, { from: "ai", text: response }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages([
        ...newMessages,
        { from: "ai", text: "Sorry, something went wrong!" },
      ]);
    }
  };
  
  

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.from}>
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
        />
      </form>
    </div>
  );
};

export default ChatBox;
