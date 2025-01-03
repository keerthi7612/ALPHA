/*const fs = require("fs");
const rooms = JSON.parse(fs.readFileSync("./dev-data/rooms.json"));

// GET ALL ROOMS
module.exports.getAllRooms = function (req, res) {
  const rooms = JSON.parse(fs.readFileSync("./dev-data/rooms.json"));
  res.status(200).json({ status: "successful", data: rooms });
};

module.exports.deleteAllRooms = function (req, res) {
  fs.writeFileSync("./dev-data/rooms.json", "[]");
  res
    .status(204)
    .json({ status: "successfull", message: "all data has delected" });
};

//GET ONE ROOM

module.exports.deleteOneRooms = function (req, res) {
  const room = rooms.find((cur) => cur.Room_no == req.params.Room_no);
  rooms.splice(rooms.indexOf(room), 1);
  fs.writeFileSync("./dev-data/rooms.json", JSON.stringify(rooms));
  res.status(204).json({ status: "success", message: "Data has been deleted" });
};

module.exports.getOneRooms = function (req, res) {
  const room = rooms.find((val) => val.Room_no == req.params.Room_no);
  if (room) {
    res.status(200).json({ status: "successful", data: room });
  } else {
    res
      .status(404)
      .json({ status: "unsuccessfull", message: "There is no such data" });
  }
};

//ADDING ONE ROOMS

module.exports.addOneRooms = function (req, res) {
  const room = { Room_no: `R0${rooms.length + 1}`, details: req.body };
  rooms.push(room);
  fs.writeFileSync("./dev-data/rooms.json", JSON.stringify(rooms), (err) => {
    if (err) {
      res.status(400).json({ status: "unsuccessful", message: "invalid data" });
    }
  });
  res.status(201).json({
    status: "success",
    message: "data has been created",
    data: room,
  });
};
*/
