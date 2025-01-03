const express = require("express");
const roomRoute = express.Router();
const roomControllers = require("../controller/rooms-controllers");
const total_bill = require("../model/order-model");

roomRoute
  .route("/rooms")
  .get((req, res) => total_bill.getAllRooms(req, res))
  .delete((req, res) => roomControllers.deleteAllRooms(req, res));
/*
roomRoute
  .route("/:rooms/:Room_no")
  .get((req, res) => roomControllers.getOneRooms(req, res))
  .delete((req, res) => roomControllers.deleteOneRooms(req, res));

roomRoute
  .route("/rooms")
  .post((req, res) => roomControllers.addOneRooms(req, res));
*/
module.exports = roomRoute;
