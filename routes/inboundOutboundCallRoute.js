const express = require("express");
const router = express.Router();
const inboundOutboundCallController = require("../controllers/inboundOutboundCallController");

//Define routes for inbound and outbound call feature
router.get(
  "/inboundOutboundCall",
  inboundOutboundCallController.getInboundOutboundCall
);
router.post(
  "/inboundOutboundCall",
  inboundOutboundCallController.sendInboundOutboundCall
);

module.exports = router;
