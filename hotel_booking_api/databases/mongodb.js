import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectDB = async() => {
   try{
      mongoose.connect(process.env.DATABASE_ACCESS_MONGO);
   } catch (err) {
      console.log(err);
   }
}

export default connectDB