import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

//Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Connection error => ", err));

//middlewares

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//authload the routes
readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
