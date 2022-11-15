const express = require("express");
const {
  generateSecretCode,
  generateLink,
} = require("../controllers/linkController");
const router = express.Router();

router.post("/send", generateSecretCode);
router.post("/open", generateLink);

module.exports = router;
