const validator = require("validator");
const Link = require("../models/Link");
const asyncHandler = require("express-async-handler");

// @desc Generate Code from the pasted link
// @route POST /api/send
// @access Public
const generateSecretCode = asyncHandler(async (req, res) => {
  let { link } = req.body;

  if (!link || !validator.isURL(link)) {
    return res.status(400).json({ message: "Please add a proper link" });
  }

  let secretCode = (Math.random() + 1).toString(36).substring(7);

  const newLink = await Link.create({ link, secretCode });

  if (newLink) {
    return res.status(201).json({ generatedCode: secretCode });
  } else {
    return res.status(400).json({ message: "Invalid link data received" });
  }
});

// @desc Generate Link from typed Code
// @route POST /api/open
// @access Public
const generateLink = asyncHandler(async (req, res) => {
  let { secretCode } = req.body;
  let targetLink = await Link.find({ secretCode: secretCode }).exec();
  if (!targetLink) {
    return res.status(400).json({ message: "Please enter a proper code" });
  }
  return res.status(200).json({ generatedLink: targetLink[0].link });
});

module.exports = {
  generateSecretCode,
  generateLink,
};
