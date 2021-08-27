const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    console.log("get /api/workouts is called.");
    db.Workout.find({})
      .sort({ day: "asc" })
      .then((dbResult) => {
        //console.log(dbResult);
        console.log("find ok");
        res.json(dbResult);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
};
