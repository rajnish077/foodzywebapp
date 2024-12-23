import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Foodzy",
    })
    .then(() => {
      console.log("Connected to Database Successfully!");
    })
    .catch((err) => {
      console.log(`Some Error occured while Connecting to Database! ${err}`);
    });
};
