//FOR ROOMS
const roomSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    unique: true,
  },
  rent: {
    type: Number,
    required: [true, "Must have a price"],
  },
  rating: {
    type: Number,
    defalut: 4.0,
  },
  prices: {
    type: Number,
    required: [true, "Must have a price"],
  },
  from: {
    type: String,
    required: true,
  },
});
const room = mongoose.model("room", roomSchema);
const testroom = new room({
  customerName: "max",
  rent: 5000,
  rating: 4.7,
  from: "chennai",
});
testroom
  .save()
  .then(() => console.log("Data Saved in the DB"))
  .catch((err) => console.log("The data cannot be saved "));
