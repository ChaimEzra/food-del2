import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:135792468@cluster0.vo5pp.mongodb.net/food-del2"
    )
    .then(() => console.log("DB connected"));
};
