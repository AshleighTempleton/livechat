const express = require("express");
const router = express.Router();

const messageController = require("../controllers/Messages.js");

router.post("/addMessage", messageController.addMessage);
router.get("/message", messageController.getMessages);

module.exports = router;
