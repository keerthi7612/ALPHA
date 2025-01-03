/*const fs = require("fs");
const customers = JSON.parse(fs.readFileSync("./dev-data/customers.json"));
const foods = JSON.parse(fs.readFileSync("./dev-data/foods.json"));

//GET & DELETE ALL
module.exports.getAllCustomers = function (req, res) {
  const customers = JSON.parse(fs.readFileSync("./dev-data/customers.json"));
  res.status(200).json({ status: "successfull", data: customers });
};

module.exports.deleteAllCustomers = function (req, res) {
  fs.writeFileSync("./dev-data/customers.json", "[]");
  res
    .status(204)
    .json({ status: "successfull", message: "All Data has deleted" });
};

//GET & DELETE ONE CUSTOMER

module.exports.getOneCustomers = function (req, res) {
  const customer = customers.find(
    (val) => val.Customer_ID == req.params.Customer_ID
  );
  if (customer) {
    res.status(200).json({ status: "successful", data: customer });
  } else {
    res
      .status(404)
      .json({ status: "unsuccessfull", message: "There is no such data" });
  }
};

module.exports.deleteOneCustomers = function (req, res) {
  const customer = customers.find(
    (cur) => cur.Customer_ID == req.params.Customer_ID
  );
  customers.splice(customers.indexOf(customer), 1);
  fs.writeFileSync("./dev-data/customers.json", JSON.stringify(customers));
  res.status(204).json({ status: "success", message: "Data has been deleted" });
};

//ADD CUSTOMERS

module.exports.addOneCustomers = function (req, res) {
  const customer = {
    Customer_ID: `C0${customers.length + 1}`,
    details: req.body,
  };
  customers.push(customer);
  fs.writeFileSync("./dev-data/customers.json", JSON.stringify(customers));
  /*,
  (err) => {
    if (err) {
      res
      .status(400)
      .json({ status: "unsuccessful", message: "invalid data" });
      }
      }
      );
      res.status(201).json({
        status: "success",
        message: "data has been create",
        data: customer,
      });
    };
    //VALIDATION
    
    module.exports.validationCustomers = function (req, res, next) {
      const new_name = req.body;
      const condition = customers.find(
        (val) => val.details.Customer_name == new_name.Customer_name
  );
  if (condition) {
    res
    .status(400)
    .json({ status: "unsuccessful", message: "user name already exist" });
  } else {
    next();
}
};

// ORDER
module.exports.orders = function (req, res) {
  const orders = JSON.parse(fs.readFileSync("./dev-data/order-food.json"));
  const info = req.body._order;
  
  //add order ID value
  const now = new Data();
  const month = now.getMonth() + 1;
  const serial = function (num) {
    num = num.toString();
    while (num.length < 3) num = "0" + num;
    return num;
  };
  
  const newOrder = {
    _orderId: `0-${now.getDate()}-${
      (month < 10 ? "0" + month : month).toString() + now.getFullYear
    }-${serial(orders.length + 1)}`,
    _orderDet: {},
    _bill: 0,
    _orderCompTime: new Date().toISOString(),
    _about: {
      _f: "About Food",
      _d: "About Delivery person",
      _e: "About the Employee",
    },
  };

  // calculate total amount
  for (const [key, { _item, _qty }] of Object.entries(info)) {
    const food = foods.find((cur) => cur._fid == _item);
    newOrder._bill += food._details.price * _qty;
  }
  if (req.body.hasOwnProperty("_uID") && req.body.hasOwnProperty("_eID")) {
    newOrder._orderDet._userID = req.body._uID;
    newOrder._orderDet._empID = req.body._eID;
    //order
    newOrder._orderDet._order = new Array(...info);
    orders.push(newOrder);
    orders.push(newOrder);
    fs.writeFileSync("./dev-data/order-food.json", JSON.stringify(orders));
  } else {
  }
  res.status(400).json({ status: "Unacceptable", message: "Not enough info" });
};

//UPDATE CUSTOME

module.exports.updateCustomers = function (req, res) {
  const customer = customers.find(
    (cur) => cur.Customer_ID == req.params.customer_ID
  );
  const reqData = req.body;
  const ind = customers.indexOf(customer);
  if (!reqData.hasOwnProperty("Customer_ID")) {
    for (const [key, value] of Object.entries(req.body)) {
      customer.details[key] = value;
    }
    customers.splice(ind, 1, customer);
    fs.writeFileSync(`./dev-data/customers.json`, JSON.stringify(customers));
    res.status(200).json({ status: "success", data: customer });
  } else {
    res
  .status(400)
  .json({ status: "unsuccessful", message: "user ID cannot be changed" });
}
};
*/
//mongoose methods

const Customer = require("../model/customers-model");

//GET ALL CUSTOMER
module.exports.getAllCustomers = async function (req, res) {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      status: "successfull",
      message: "The data are saved",
      data: customers,
    });
  } catch {
    res
      .status(404)
      .json({ status: "unsuccessful", message: "The data is not found" });
  }
};

//GET ONE CUSTOMER
module.exports.getOneCustomers = async function (req, res) {
  try {
    const customers = await Customer.findById(req.params._id);
    res.status(200).json({ status: "successful", data: customers });
  } catch {
    res
      .status(404)
      .json({ status: "unsuccessful", message: "The data is not found" });
  }
};
//GET ORDER

module.exports.getOrders = async function (req, res) {
  try {
    const customer = await Customer.findById(req.params._id);
    const total = customer.No_of_rooms * customer.rent;
    console.log(total);
    res.status(200).json({
      //status: "success",
      data: {
        customerName: customer.customerName,
        No_of_rooms: customer.No_of_rooms,
        rent: customer.rent,
        total_Bill: total,
      },
    });
  } catch (err) {
    res.status(404).json({ message: "Unsuccessful" });
  }
};

//ADD THE CUSTOMER(post)

module.exports.addOneCustomer = async function (req, res) {
  try {
    const customers = await Customer.insertMany(req.body);
    res
      .status(201)
      .json({ status: "successful", message: "New customer", data: customers });
  } catch {
    res.status(400).json({ status: "unsuccessful", message: "Invalid Input " });
  }
};
