const express = require("express");
const cusRoute = express.Router();
const cusControllers = require("../controller/cus-controllers");
const totalBill = require("../controller/order-controllers");

cusRoute
  .route("/customer/order")
  .post((req, res) => totalBill.orderBill(req, res));

cusRoute
  .route("/customers")
  .get((req, res) => cusControllers.getAllCustomers(req, res))
  .post((req, res) => cusControllers.addOneCustomer(req, res));
// .delete((req, res) => cusControllers.deleteAllCustomers(req, res));

cusRoute
  .route("/customers/:_id")
  .get((req, res) => cusControllers.getOneCustomers(req, res))
  .delete((req, res) => cusControllers.deleteOneCustomers(req, res))
  .patch((req, res) => cusControllers.updateCustomers(req, res));

cusRoute
  .route("/orderfood/:_id")
  .get((req, res) => cusControllers.getOrders(req, res));

module.exports = cusRoute;
