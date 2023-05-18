const express = require("express");
const router = express.Router();
const smsController = require("../controllers/smsController");

//Define routes for sms feature
router.get("/sms", smsController.getSms);
router.post("/sms", smsController.sendSms);

module.exports = router;
