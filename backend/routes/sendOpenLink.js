const express = require("express");
const {
  generateSecretCode,
  generateLink,
} = require("../controllers/linkController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Open-this-in-other-device API");
});
router.post("/send", generateSecretCode);
router.post("/open", generateLink);

module.exports = router;
