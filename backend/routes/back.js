const express = require("express");
const router = express.Router();

const messageController = require("../controllers/Messages.js");

router.post("/addMessage", messageController.addMessage);
router.get("/message", messageController.getMessages);
router.get("/deleteMessage/:id", messageController.deleteMessage);

module.exports = router;
