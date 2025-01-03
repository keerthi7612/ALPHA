const express = require("express");
const morgan = require("morgan");
const roomRoute = require("./routes/rooms-route");
const cusRoute = require("./routes/cus-route");
const foodRoute = require("./routes/food-route");
const orderRoute = require("./routes/order-route");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/r", roomRoute);
app.use("/api/v1/c", cusRoute);
app.use("/api/v1/f", foodRoute);
app.use("/api/v1/o", orderRoute);

module.exports = app;
//---------FOR ROOMS----------//
/*
// POST ADDING ONE ROOMS

// DELECT ALL DATA

// GET ALL ROOMS DATA

//GET ONE ROOM DATA

//-----------FOR CUSTOMERS------------//

const customer = JSON.parse(
  fs.readFileSync("./dev-data/customer.json", "utf-8")
);
//console.log(customer);
//FOR ALL CUSTOMER
app.get("/api/v1/customer", (req, res) => {
  res.status(200).json({ status: "Successful", data: customer });
});

//FOR-SINGLE-CUSTOMER
app.get("/api/v1/customer/:Customer_ID", (req, res) => {
  res.cust = customer.find((val) => val.Customer_ID == req.params.Customer_ID);
  if (res.cust) {
    res.status(200).json({ status: "successful", data: res.cust });
  } else {
    res
      .status(404)
      .json({ status: "unsuccessful", message: "Ther is no such data " });
  }
});
*/
