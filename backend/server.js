import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req, res) => {
//   //root route http://localhost:5000/
//   res.send("Hello server is up!!");
// });

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

//Middleware for auth routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Sever is running on ${PORT}`);
});
