const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ntruong2028:<db_password>@cluster0.lxp5sik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

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
