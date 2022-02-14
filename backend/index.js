import express from "express";
import cors from "cors";
import db from "./db/db.js";
import animalRoute from "./routes/animalRoute.js";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());
app.use("/api/animal", animalRoute);
app.use("/api/user", userRoute)


app.listen(process.env.PORT, () => console.log("Backend server running on port: "+process.env.PORT));

db.dbconnection();