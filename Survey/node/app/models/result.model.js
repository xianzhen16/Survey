const mongoose = require("mongoose");

const Result = mongoose.model(
  "Result",
  new mongoose.Schema({
    satisfaction: String,
    cafeteria: String,
    quality_rate: String,
    improvement: String,
    food:String,
    retail:String,
    convenience:String,
    special:String,
    delivery:String,
    meal_plan:String
  })
);

module.exports = Result;