const express = require("express");
const router = express.Router();
const groupChatController = require("../controllers/groupChatController");

//Define routes for group chat feature
router.get("/groupChat", groupChatController.getGroupChat);
router.post("/groupChat", groupChatController.sendGroupChat);

module.exports = router;
