exports.getVideoVoice = (req, res) => {
  //Logic to retrieve chat messages
  res.send("Get video and voice");
};

exports.sendVideoVoice = (req, res) => {
  //Logic to send a video and voice
  const { videoVoice } = req.body;
  //Save the video and voice to the database or perform any other necessary operations
  res.send(`Sent message: ${videoVoice}`);
};
