// const { render } = require("../../app");

const express = require("express");
const router = express.Router();

const frontController = require("../controllers/front.js");

router.get("/", frontController.displayPage);
// router.get("/messages", frontController.);

module.exports = router;
