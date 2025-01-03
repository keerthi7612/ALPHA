const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      item: { type: String, required: true, unique: true },
      qty: { type: Number, default: 1 },
      price: {
        type: Number,
        required: [true, "Must have a price"],
        defalut: 1,
      },
    },
  ],
  userId: {
    unique: true,
    type: String,
    required: [true, "User need to be Logged in to the application."],
  },
  orderPlaceAt: { type: Date, default: Date.now() },
  delAddress: {
    type: String,
    required: [true, "To  place a order delivery addess is needed"],
  },
  orderStatus: {
    type: String,
    default: "unconfirmed",
  },
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
/*
const testorder = new Order({
  item: "veg-biryani",
  qty: 3,
  price: 200,
  userId: "O01",
  delAddress: "no 9 MGR str, periyar nagar, chennai",
});



testorder
  .save()
  .then(() => console.log("Data is saved"))
  .catch((err) => console.log("Data is not saved"));
*/

/*
  const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    foodItems: [
      {
        food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
        quanity: { type: Number, required: true },
      },
    ],
    totalAmount: Number,
    orderDate: { type: Date, default: Date.now },
  });
  */
