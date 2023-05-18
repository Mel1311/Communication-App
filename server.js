const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "font-src": ["'self'", "http://localhost:4000"],
    },
  })
);

// Enable CORS
app.use(cors());

const webChatRoute = require("./routes/webChatRoute");
const groupChatRoute = require("./routes/groupChatRoute");
const groupVideoRoute = require("./routes/groupVideoRoute");
const smsRoute = require("./routes/smsRoute");
const inboundOutboundCallRoute = require("./routes/inboundOutboundCallRoute");
const webVideoVoiceRoute = require("./routes/webVideoVoiceRoute");

const port = 3000;

// Connect to MongoDB
const dbUri = "mongodb+srv://cluster0.lpkmr2g.mongodb.net";
mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the routes
app.use(express.json()); // Parse JSON request bodies
app.use("/webChat", webChatRoute);
app.use("/groupChat", groupChatRoute);
app.use("/groupVideo", groupVideoRoute);
app.use("/sms", smsRoute);
app.use("/inboundOutbound", inboundOutboundCallRoute);
app.use("/videoVoice", webVideoVoiceRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the chat application");
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on port", port);
});
