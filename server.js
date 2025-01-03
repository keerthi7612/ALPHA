const server = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "config.env" });
console.log(process.env.DB_USER);

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN);
    console.log("Connection Successful 😎");
  } catch {
    console.log("Connection Unsuccessful 😟");
  }
};
connection();

server.listen(8000, () => {
  console.log("server is listening on post 8000");
});
