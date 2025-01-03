const express = require("express");
const orderRoute = express.Router();
const orderControllers = require("../controller/order-controllers");
orderRoute
  .route("/order")
  .get((req, res) => orderControllers.getAllOrder(req, res))
  .post((req, res) => orderControllers.addOneOrder(req, res))
  // new bill order
  .post((req, res) => orderControllers.newOrder(req, res));
orderRoute
  .route("/order/:_id")
  //new bill total calculation
  .get((req, res) => orderControllers.newBill(req, res))
  .get((req, res) => orderControllers.getOrder(req, res));

module.exports = orderRoute;
