exports.getInboundOutboundCall = (req, res) => {
  //Logic to retrieve inboundOutbound
  res.send("Get inboundOutbound");
};

exports.sendInboundOutboundCall = (req, res) => {
  //Logic to send a inboundOutbound
  const { inboundOutboundCall } = req.body;
  //Save the inboundOutbound to the database or perform any other necessary operations
  res.send(`Sent inboundOutbound: ${inboundOutboundCall}`);
};
