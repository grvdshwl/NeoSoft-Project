const express = require("express");
const mongoose = require("mongoose");
const storePosts = require("./src/controller/posts.controller");
const { mongoUrl } = require("./src/config/mongo.config");

const app = express();

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB Connected.");
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to our application." });
});
app.get("/store-posts", storePosts);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
