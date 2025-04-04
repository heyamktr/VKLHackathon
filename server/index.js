const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mywebsite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storeSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  price: String,
  distance: String,
});

const Store = mongoose.model("Store", storeSchema);

// Example route
app.post("/api/recommend", async (req, res) => {
  const { cuisine, price, distance } = req.body;
  const results = await Store.find({
    cuisine: { $regex: cuisine, $options: "i" },
    price: { $regex: price, $options: "i" },
    distance: { $regex: distance, $options: "i" },
  });
  res.json(results);
});

app.listen(5000, () => console.log("Server running on port 5000"));
