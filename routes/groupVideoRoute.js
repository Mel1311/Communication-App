const express = require("express");
const router = express.Router();
const groupVideoController = require("../controllers/groupVideoController");

//Define routes for group video feature
router.get("/groupVideo", groupVideoController.getGroupVideo);
router.post("/groupVideo", groupVideoController.sendGroupVideo);

module.exports = router;
