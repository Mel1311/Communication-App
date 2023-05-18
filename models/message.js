const mongoose = require("mongoose");

// Define the message schema
const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create the Message model
const Message = mongoose.model("Message", messageSchema);

// Export the Message model
module.exports = Message;
