import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import BookRoute from "./routes/books";
import UserRoute from "./routes/users";
import CategoryRoute from "./routes/category";
import OrderRoute from "./routes/orders";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", BookRoute);
app.use("/api", UserRoute);
app.use("/api", CategoryRoute);
app.use("/api", OrderRoute);

mongoose
  .connect("mongodb://localhost:27017/bookstore")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error", err);
  });
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
