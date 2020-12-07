exports.displayPage = (req, res, next) => {
  res.render("index.ejs");
};

exports.messages = (req, res, next) => {
  res.render();
};
