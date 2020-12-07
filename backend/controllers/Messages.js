const express = require("express");
const Message = require("../models/Message.js");

exports.getMessages = (req, res, next) => {
  Message.find()
    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};

exports.addMessage = (req, res, next) => {
  const submit = new Message({
    ...req.body,
  });
  submit
    .save()
    .then(() => res.status(200).redirect("/"))
    .catch((error) => res.status(400).json({ error }));
};
