import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatInterface.css"; // Import CSS file for styling

const ChatInterface = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/webChat/message", {
        content: newMessage,
      });

      // Clear the input field after successful message submission
      setNewMessage("");

      // Fetch the updated messages
      fetchMessages();
    } catch (error) {
      // Handle the error if needed
      console.error(error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/webChat/messages"
      );
      setMessages(response.data);
    } catch (error) {
      // Handle the error if needed
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="chat-interface">
      <div className="chat-messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <div className="message-sender">{message.sender}</div>
            <div className="message-content">{message.content}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={handleMessageSubmit}>
        <input
          className="message-input"
          type="text"
          placeholder="Enter your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
