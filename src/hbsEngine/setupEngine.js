const { join } = require("path");
const hbs = require("hbs");
const viewsPath = join(__dirname, "../../views");
const partialsPath = join(__dirname, "../../views/partials");

const setupEngine = app => {
  app.set("view engine", "hbs");
  app.set("views", viewsPath);
  hbs.registerPartials(partialsPath);
};
module.exports = setupEngine;
