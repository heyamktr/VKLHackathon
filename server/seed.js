const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mywebsite");

const Store = mongoose.model("Store", new mongoose.Schema({
  name: String,
  cuisine: String,
  price: String,
  distance: String,
}));

Store.insertMany([
  { name: "Sushi World", cuisine: "Japanese", price: "Medium", distance: "Near" },
  { name: "Pizza Palace", cuisine: "Italian", price: "Low", distance: "Far" },
]).then(() => {
  console.log("Seeded!");
  mongoose.disconnect();
});
