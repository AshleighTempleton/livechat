var mongoose = require("mongoose");

const messageScehema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", messageScehema);
