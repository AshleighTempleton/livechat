const express = require("express");
const router = express.Router();

const messageController = require("../controllers/Messages.js");

router.post("/addMessage", messageController.addMessage);

module.exports = router;
