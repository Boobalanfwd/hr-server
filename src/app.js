import express from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose";

config();

const PORT = 8081;

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

mongoose
  .connect(
    "mongodb+srv://boobalan12:3gWlMpNud4dhzxL4@boobalan12.aqlq7oj.mongodb.net/hr"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.listen(PORT, () => {
  console.log(`Server is running in the port ${PORT}`);
});
