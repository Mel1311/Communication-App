const Message = require("../models/message");

// Get all chat messages
const getMessages = async (req, res) => {
  console.log("worked!!");
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
};

// Send a chat message
const sendMessage = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Message content is required" });
  }

  try {
    const newMessage = new Message({ content });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = {
  getMessages,
  sendMessage,
};
