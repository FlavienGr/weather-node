const getLocalForecast = require("../utils/forecast");
const geoCoding = require("../utils/geoCoding");

searchPage = app => {
  app.get("/", (req, res) => {
    res.render("index", {
      title: "Weather",
      created: "FG"
    });
  });
  app.get("/about", (req, res) => {
    res.render("about", {
      title: "Weather",
      created: "FG"
    });
  });
  app.get("/weather", (req, res) => {
    if (!req.query.address) {
      return res.send("weather", {
        error: "Please add a city"
      });
    }
    const { address } = req.query;

    geoCoding(address, (err, { longitude, latitude, location } = {}) => {
      if (err)
        return res.send({
          error: err
        });
      getLocalForecast(longitude, latitude, (err, forecastData) => {
        if (err)
          res.send({
            error: err
          });
        if (!err && forecastData) {
          res.send({
            forecast: forecastData,
            location: location
          });
        }
      });
    });
  });

  app.get("*", (req, res) => {
    res.render("notFound", {
      title: "404",
      errorMessage: "Page not found, sorry",
      created: "FG"
    });
  });
};
module.exports = searchPage;
