const express = require("express");
const router = express.Router();
const webChatController = require("../controllers/webChatController");

// Handle root URL
router.get("/", (req, res) => {
  res.send("Welcome to the chat application");
});

// Define routes for web chat feature
router.get("/webChat/messages", webChatController.getMessages);
router.post("/webChat/message", webChatController.sendMessage);

module.exports = router;
