import { Router } from "express";
import { 
   updateUser,
   deleteUser,
   getUser,
   getAllUsers
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utilities/verifyToken.js";

const router = Router()

router
   .get("/verifyAuthentication", verifyToken, (req, res, next) => {
      return res.status(201).json({"message":"Hello user. Your are authenticated. "})
   })
   .get("/checkuser/:id", verifyUser, (req, res, next) => {
      return res.status(200).json({"message":"Hello user, you are logged in and now you can deleted your accound."})
   })
   .put("/:id", verifyUser, updateUser)
   .delete("/:id", verifyUser, deleteUser)
   .get("/:id", verifyUser, getUser)
   .get("/", verifyAdmin, getAllUsers)

export default router