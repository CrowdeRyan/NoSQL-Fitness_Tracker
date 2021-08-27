const path = require("path");

module.exports = function (app) {
  app.get("/exercise", function (req, res) {
    //console.log("get /exercise")
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    //console.log("get /stats")
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
