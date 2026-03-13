import { useState } from "react";
import "./ChatBox.css";

function ChatBox() {

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {

    if (!inputMessage.trim()) return;

    // user message add
    setMessages([
      ...messages,
      { type: "user", text: inputMessage }
    ]);

    try {

      const res = await fetch("http://127.0.0.1:8000/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: inputMessage
        })
      });

      const data = await res.json();

      // AI response add
      setMessages(prev => [
        ...prev,
        { type: "ai", text: data.llm_response }
      ]);

    } catch (error) {
      console.error(error);
    }

    setInputMessage("");
  };

  return (
    <div className="chat-container">

      <div className="chat-header">
        <h3>AI Assistant</h3>
        <p>Log interaction via chat</p>
      </div>

      <div className="chat-body">

        {messages.length === 0 && (
          <div className="chat-message">
            Log interaction details here e.g.
            <br />
            "Met Dr. Smith, discussed Product X efficacy, positive sentiment, shared brochure"
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.type === "user" ? "user-message" : "ai-message"}
          >
            {msg.text}
          </div>
        ))}

      </div>

      <div className="chat-footer">

        <input
          type="text"
          placeholder="Describe interaction..."
          className="chat-input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />

        <button className="log-btn" onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;