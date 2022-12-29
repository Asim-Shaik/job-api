import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import job from "./routes/job.js";
import login from "./routes/login.js";
import user from "./routes/user.js";

app.use(express.json());
dotenv.config();

app.use(cors());

app.use("/api/jobs", job);
app.use("/api/user", user);
app.use("/api/login", login);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
