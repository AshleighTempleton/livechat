const fetch = require("autofetch");

exports.displayPage = async (req, res, next) => {
  try {
    let url = `http://localhost:3000/app/message`;

    let messages = await fetch(url);
    messages = await messages.json();

    res.render("index.ejs", { messages });
  } catch (error) {
    console.error(error);
  }
};
