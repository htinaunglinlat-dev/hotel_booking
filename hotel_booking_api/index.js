import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./databases/mongodb.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();

const app = express();
// connect to DB
connectDB()

mongoose.connection.on("connected", () => {
   console.log("mongodb connected")
   app.listen(8000, () => {
      console.log("Server is running at PORT 8000")
   })
})

// routes
import authRoute from "./routes/auth.js"   
import usersRoute from "./routes/users.js"   
import hotelsRoute from "./routes/hotels.js"   
import roomsRoute from "./routes/rooms.js"   

app.use(cors({
   origin: "http://localhost:5173",
}))
app.use(express.json());
app.use(cookieParser())
// middlewares 
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

// middleware
app.use((error, req, res, next) => {
   const errorStatus = error.status || 500;
   const errorMessage = error.message || "Something went wrong!";
   return res.status(errorStatus).json({
      "success": false,
      "status": errorStatus,
      "message": errorMessage,
      "stack": error.stack
   })
})