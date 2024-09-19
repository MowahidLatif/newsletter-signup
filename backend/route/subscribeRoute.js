const express = require("express");
const app = express();
const Subscriber = require("./models/Subscriber");

app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(200).json({ message: "Subscription successful", email });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = app;
