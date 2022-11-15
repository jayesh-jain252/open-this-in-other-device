const path = require("path");
const express = require("express");
const sendOpenLink = require("./routes/sendOpenLink");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", sendOpenLink);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set to Production");
  });
}

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("connected to mongoDB");
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});
