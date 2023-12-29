import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../utilities/error.js";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
   try{
      const salt = await bcrypt.genSalt(10)
      const hashPwd = await bcrypt.hash(req.body.password, salt)

      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashPwd
      })
      await newUser.save();
      return res.status(201).json(newUser);
   } catch(error) {
      return next(error)
   }
}

const login = async (req, res, next) => {
   try{ 
      const foundUser = await User.findOne({username: req.body.username})
      if(!foundUser) return next(createError("404", "User not found"))  

      // bcrypt password
      const isPwdCorrect = await bcrypt.compare(req.body.password, foundUser.password)
      console.log(isPwdCorrect)

      if(!isPwdCorrect) return next(createError("401","Uncorrected Password!"))
      
      // generate token
      const token = jwt.sign(
         { id: foundUser._id, isAdmin: foundUser.isAdmin },
         process.env.JWT
      )

      const { password, isAdmin, ...others } = foundUser._doc;
      return res.cookie("access_token", token, { httpOnly: true }).status(200).json(others)
   } catch(error) {
      return next(error);
   }
}

export {
   register,
   login
}