require("dotenv").config();
const express = require("express");
const app = express();
const setupEngine = require("./hbsEngine/setupEngine");
const searchPage = require("./router/searchPage");

const port = process.env.PORT || 3000;
const path = require("path");

//Static Setup Directory
app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log("app connected ", port);
});

setupEngine(app);
searchPage(app);
