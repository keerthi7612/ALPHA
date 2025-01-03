const express = require("express");
const foodRoute = express.Router();
const foodControllers = require("../controller/food-controller");

foodRoute
  .route("/foods")
  .get((req, res) => foodControllers.getAllFoods(req, res))
  .post((req, res) => foodControllers.addOneFoods(req, res));

foodRoute
  .route("/foods/:_id")
  .get((req, res) => foodControllers.getOneFoods(req, res))
  .patch((req, res) => foodControllers.updateFoods(req, res));

foodRoute
  .route("/orderfood/:_id")
  .get((req, res) => foodControllers.getOrders(req, res));

// .get((req, res) => foodControllers.getOrders(req, res));

//.patch((req, res) => foodControllers.updateFoods(req, res));
/*
  .delete((req, res) => foodControllers.deleteOneFood(req, res))
foodRoute
  .route("/food/:fid")
  .get((req, res) => foodControllers.getOneFood(req, res))
  //.delete((req, res) => foodControllers.deleteOneFood(req, res))
  .patch((req, res) => foodControllers.updateFoods(req, res));

foodRoute.route("/foods").post(
  (req, res, next) => foodControllers.authenticationFoods(req, res, next),
  (req, res) => foodControllers.addOneFoods(req, res)
);
*/
module.exports = foodRoute;
