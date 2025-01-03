/*const express = require("express");
const orderRoute = express.Route();

const Customer = require("../model/customers-model");
const Food = require("../model/food-model");
const Order = require("../model/order-model");

module.exports.orderBill = async function (req, res) {
  try {
    const { cusmoterName, foodName } = req.body;
    let totalAmount = 0;
    for (let item of foodName) {
      const food = await Food.findById(item.food);
      if (!food) return res.status(404).send("food item is not found");
      totalAmount += food.price * item.quantity;
    }
    const order = new Order({
      customer: customerName,
      foodItems: foodName,
      totalAmount: totalAmount,
    });
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(500).send("There is some error");
  }
};

module.exports = orderRoute;
/*
const ordermodel = require("../models/order-model");
module.exports.getOrders = async function (req, res) {
  try {
    const orders = await ordermodel.find();
    res.status(200).json({ status: "success", orders });
  } catch (error) {
    res.status(400).json({ status: "Bad Request", message: error });
  }
};
*/

const Order = require("../model/order-model");

//GET ORDER

module.exports.getAllOrder = async function (req, res) {
  try {
    const order = await Order.find();
    res.status(200).json({ status: "successfull", data: order });
  } catch {
    res.status(404).json({ status: "unsuccessful", message: "data is not " });
  }
};

module.exports.addOneOrder = async function (req, res) {
  try {
    const order = await Order.insertMany(req.body);
    res
      .status(201)
      .json({ status: "successful", message: "order inserted", data: order });
  } catch {
    res
      .status(404)
      .json({ status: "unsuccessfull", message: "Invalid Input " });
  }
};

module.exports.getOrder = async function (req, res) {
  try {
    const order = await Order.findById(req.params._id);
    const total = order.qty * order.price;
    res.status(200).json({
      data: {
        item: order.item,
        userId: order.userId,
        orderPlaceAt: order.orderPlaceAt,
        qty: order.qty,
        price: order.price,
        total_Bill: total,
        orderStatus: order.orderStatus,
      },
    });
  } catch (err) {
    res.status(404).json({ message: "unsuccessful" });
  }
};

//POST FOR BILL

module.exports.newOrder = async function (req, res) {
  try {
    const newOrder = new Order({
      items: req.body.items,
      userId: req.body.userId,
      delAddress: req.body.delAddress,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (err) {
    res.status(400).json({ message: "Invalid Input" });
  }
};

//GET IN NEW BILL

module.exports.newBill = async function (req, res) {
  try {
    const order = await Order.findById(req.params._id);

    // Calculate the total bill
    const total = order.items.reduce(
      (rate, item) => rate + item.qty * item.price,
      0
    );

    res.status(200).json({
      data: {
        items: order.items,
        total_Bill: total,
      },
    });
  } catch (err) {
    res.status(404).json({ message: "Order not found" });
  }
};
