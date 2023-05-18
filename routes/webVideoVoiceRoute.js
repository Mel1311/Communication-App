const express = require("express");
const router = express.Router();
const videoVoiceController = require("../controllers/webVideoVoiceController");

//Define routes for web video and voice feature
router.get("/videoVoice", videoVoiceController.getVideoVoice);
router.post("/videoVoice", videoVoiceController.sendVideoVoice);

module.exports = router;
