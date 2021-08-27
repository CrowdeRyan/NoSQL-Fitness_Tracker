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
  app.put("/api/workouts/:id", (req, res) => {
    console.log("*** put /api/workouts/:id is called", req.body);

    var now = new Date();
    var todayStart = new Date();
    var todayEnd = new Date();
    todayStart.setHours(0, 0, 0, 0);
    todayEnd.setHours(23, 59, 59, 999);

    console.log("*** req.body ***", req.body);
    var tempJSON = {
      day: now,
      exercises: [
        {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          distance: req.body.distance,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
        },
      ],
    };
  });
};
