const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

//schema
const GymAboutsSchema = new mongoose.Schema({
  title: String,
  desc: String,
  imageURL: String,
});

//model
const GymAboutsModel = new mongoose.model("GymAbouts", GymAboutsSchema);

//getAll
app.get("/api/gymabouts", async (req, res) => {
  const { name } = req.query;
  const gymAbouts = await GymAboutsModel.find();

  if (!name) {
    res.status(200).send(gymAbouts);
  } else {
    res
      .status(200)
      .send(
        gymAbouts.filter((x) =>
          x.title.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
      );
  }
});

//get by ID
app.get("/api/gymabouts/:id", async (req, res) => {
  const { id } = req.params;
  const gymAbout = await GymAboutsModel.findById(id);
  res.status(200).send(gymAbout);
});

//delete
app.delete("/api/gymabouts/:id", async (req, res) => {
  const { id } = req.params;
  await GymAboutsModel.findByIdAndDelete(id);
  res.send({ massage: "deleted  :(" });
});

//post
app.post("/api/gymabouts", async (req, res) => {
  const { title, desc, imageURL } = req.body;
  const newGymAbout = new GymAboutsModel({
    title: title,
    desc: desc,
    imageURL: imageURL,
  });
  await newGymAbout.save();
  res.send({ massage: "posted  :}" });
});

//edit
app.put("/api/gymabouts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, desc, imageURL } = req.body;
  const updatedAbout = {
    title: title,
    desc: desc,
    imageURL: imageURL,
  };
  await GymAboutsModel.findByIdAndUpdate(id, updatedAbout);
  res.send({ massage: "updated  :|" });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server: Zorduuu");
});

DB_CONNECTION = process.env.DB_CONNECTION;
DB_KEY = process.env.DB_KEY;
mongoose.connect(DB_CONNECTION.replace("<password>", DB_KEY)).then(() => {
  console.log("DB: Zorduu hə");
});
