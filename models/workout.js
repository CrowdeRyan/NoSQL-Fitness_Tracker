const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model("Workout", workoutSchema);

const ExcerciseSchema = new Schema({
  type: String,
  name: String,
  duration: {
    type: Number,
    min: [0, "Negative number is not allowed"],
  },
  weight: {
    type: Number,
    min: [0, "Negative number is not allowed"],
  },
  reps: {
    type: Number,
    min: [0, "Negative number is not allowed"],
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not integer",
    },
  },
  sets: {
    type: Number,
    min: [0, "Negative number is not allowed"],
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not integer",
    },
  },
});
