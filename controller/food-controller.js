//const fs = require("fs");
/*
const foods = JSON.parse(fs.readFileSync("./dev-data/foods.json"));
//GET & DELETE ALL
module.exports.getAllFoods = function (req, res) {
  const foods = JSON.parse(fs.readFileSync("./dev-data/foods.json"));
  res.status(200).json({ status: "successfull", data: foods });
  };
  
  module.exports.deleteAllFoods = function (req, res) {
    fs.writeFileSync("./dev-data/foods.json", "[]");
    res
    .status(204)
    .json({ status: "successfull", message: "All Data has deleted" });
    };
    */
//GET & DELETE ONE FOOD
/*
   module.exports.getOneFood = function (req, res) {
    const food = foods.find((val) => val.fid == req.params.fid);
    if (food) {
      res.status(200).json({ status: "successful", data: food });
      } else {
        res
      .status(404)
      .json({ status: "unsuccessfull", message: "There is no such data" });
  }
};
*/
/*
module.exports.deleteOneFood = function (req, res) {
  const food = foods.find((cur) => cur.fid == req.params.fid);
  foods.splice(foods.indexOf(food), 1);
  fs.writeFileSync("./dev-data/foods.json", JSON.stringify(foods));
  res.status(204).json({ status: "success", message: "Data has been deleted" });
  };
  */
//ADD ONE FOOD
/*
 module.exports.addOneFoods = function (req, res) {
  const food = { fid: `F0${foods.length + 1}`, details: req.body };
  foods.push(food);
  fs.writeFileSync("./dev-data/foods.json", JSON.stringify(foods), (err) => {
    if (err) {
      res.status(400).json({ status: "unsuccessful", message: "invalid data" });
      }
  });
  res.status(201).json({
    status: "success",
    message: "data has been create",
    data: food,
    });
    };
    module.exports.authenticationFoods = function (req, res, next) {
  const new_food = req.body;
  const condition = foods.find(
    (val) => val.details.foodName == new_food.foodName
    );
    if (condition) {
      res.status(400).json({
        status: "unseccessful",
        message: "The food is already placed,please order anyother 🙏",
        });
  } else {
    next();
}
};
//UPDATE FOODS

module.exports.updateFoods = function (req, res) {
  const food = foods.find((cur) => cur.fid == req.params.fid);
  const reqData = req.body;
  const ind = foods.indexOf(food);
  if (!reqData.hasOwnProperty("fid")) {
    for (const [key, value] of Object.entries(req.body)) {
      food.details[key] = value;
      }
    foods.splice(ind, 1, food);
    fs.writeFileSync(`./dev-data/foods.json`, JSON.stringify(foods));
    res.status(200).json({ status: "success", data: food });
    } else {
      res
    .status(400)
    .json({ status: "unsuccessful", message: "user ID cannot be changed" });
    }
    };
    */

/// MongoDB-SCHEMA-TODO

const Food = require("../model/food-model");

//GET ALL

module.exports.getAllFoods = async function (req, res) {
  try {
    const foods = await Food.find();
    res.status(200).json({ status: "successful", data: foods });
  } catch {
    res
      .status(404)
      .json({ status: "unsuccessful", message: "data is not found" });
  }
};

//ADD ONE DATA(post)

module.exports.addOneFoods = async function (req, res) {
  try {
    const foods = await Food.insertMany(req.body);
    res
      .status(201)
      .json({ status: "successful", message: "Food create", data: foods });
  } catch {
    res.status(400).json({ status: "unsuccessful", message: "Invalid Input " });
  }
};

//UPDATED FOOD
module.exports.updateFoods = async function (req, res) {
  try {
    const updates = req.body;
    const foods = await Food.findByIdAndUpdate(req.params._id, updates, {
      new: true,
    });
    res.status(404).json({ message: "the food is updated", data: foods });
  } catch (error) {
    res.status(404).json({ message: "the data is not updated" });
  }
};

// ONE FOOD

module.exports.deleteOneFood = async function (req, res) {
  try {
    const foods = await Food.delete(req.params._id);
    res.status(204).json({
      status: "successful",
      message: "data been deleted",
      data: foods,
    });
  } catch {
    res
      .status(404)
      .json({ status: "unsuccessful", message: "Data is not deleted" });
  }
};

//GET ONE FOOD
module.exports.getOneFoods = async function (req, res) {
  try {
    const foods = await Food.findById(req.params._id);
    res.status(200).json({ status: "successful", data: foods });
  } catch {
    res.status(404).json({ status: "unsuccessful", message: "Invalid data" });
  }
};

// GET ORDER

module.exports.getOrders = async function (req, res) {
  try {
    const food = await Food.findById(req.params._id);
    const total = food.quanity * food.price;
    console.log(total);
    res.status(200).json({
      data: {
        foodName: food.foodName,
        quanity: food.quanity,
        price: food.price,
        total_Bill: total,
      },
    });
  } catch (err) {
    res.status(404).json({ message: "Unsuccessful" });
  }
};
