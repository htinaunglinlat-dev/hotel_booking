import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// const verifyToken = async (req, res, next) => {
//    const token = req.cookies.access_token
//    console.log("=>", token);
//    if(!token) return next(createError(401, "You are not authenticated."))
//    console.log("pass here")
//    jwt.verify(
//       token,
//       process.env.JWT,
//       (err, decode) => {
//          if(err) return res.status(403).json({"message": "Token is invalid!"})
//          req.user = decode
//          console.log("hello world")
//          next()
//       }
//    )
// }

const verifyToken = async (req, res, next, cb) => {
   // console.log("=> hello",req.user)
   const token = req.cookies.access_token
   // console.log("=>", token);
   if(!token) return next(createError(401, "You are not authenticated."))
   console.log("pass here")
   jwt.verify(
      token,
      process.env.JWT,
      (err, decode) => {
         if(err) return res.status(403).json({"message": "Token is invalid!"})
         return cb(decode)
      }
   )
}

const verifyAdmin = async (req, res, next) => {
   verifyToken( req, res, next, (user) => {
      // console.log("=>", user)
      if(user.isAdmin) {
         return next();
      } else {
         return next(createError(401, "Your are not authorized!"))
      }
   })
}

const verifyUser = async (req, res, next) => {
   verifyToken( req, res, next, (user) => {
      if(user.id === req.params.id || user.isAdmin) {
         return next();
      } else {
         return next(createError(401, "Your are not authorized!"))
      }
   })
}

export {
   verifyToken,
   verifyUser,
   verifyAdmin
}



