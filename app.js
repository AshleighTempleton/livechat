const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const frontRoutes = require("./frontend/routes/front.js");
const backRoutes = require("./backend/routes/back.js");

const url = "";

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb atlas"))
  .catch(() => console.log("could not connect to mongodb"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/frontend/views");
// app.set("layout", "layouts/layout");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./frontend/public"));

app.use("/", frontRoutes);
app.use("/app", backRoutes);

module.exports = app;
