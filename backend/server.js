const express = require("express");
const sendOpenLink = require("./routes/sendOpenLink");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", sendOpenLink);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("connected to mongoDB");
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});
