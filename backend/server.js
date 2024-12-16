import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://greatstack:135792468@cluster0.wmgwk.mongodb.net/?
//nJNlCzqrf4tCudv3

//The good one
//Y2xqfilFabAE2M2B
//mongodb+srv://greatstack:135792468@cluster0.vo5pp.mongodb.net/?
