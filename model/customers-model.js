const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    unique: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  from: {
    type: String,
    require: true,
  },
  No_of_rooms: {
    type: Number,
    default: 1,
  },
  rent: {
    type: Number,
    require: [true, "Must have a rate "],
  },
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
/*
const testcustomer = new Customer({
  customerName: "maya",
  emailId: "mayagmail.com",
  from: "chennai",
  No_of_rooms: 4,
  rent: 100,
  });
  testcustomer
  .save()
  .then(() => console.log("data is saved "))
  .catch((err) => console.log("the data is not saved "));
  */
