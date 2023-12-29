import { Router } from "express"
import { register, login } from "../controllers/authController.js";
const router = Router();

router
   .post("/register", register)
   .post("/login", login)

export default router