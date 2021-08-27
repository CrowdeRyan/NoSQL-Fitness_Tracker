const path = require("path");

module.exports = function (app) {
  app.get("/exercise", function (req, res) {
    //console.log("get /exercise")
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};
