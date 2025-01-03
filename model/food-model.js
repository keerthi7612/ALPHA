const mongoose = require("mongoose");
//schema option - modelling of the data [type,validation and more]
//FOR FOOD
const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Must have a price"],
  },
  quanity: {
    type: Number,
    default: 1,
  },
  rating: {
    type: Number,
    defalut: 4.0,
  },
});
const Food = mongoose.model("Food", foodSchema);

const samplefood = new Food({
  foodName: "green-rice",
  price: 100,
  rating: 4.7,
});
samplefood
  .save()
  .then(() => console.log("Data Saved in the DB"))
  .catch((err) => console.log("The data cannot be saved "));

module.exports = Food;
