import { Router } from "express";
import { verifyAdmin } from "../utilities/verifyToken.js";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";

const router = Router()

router
   .post("/:hotelId", verifyAdmin, createRoom )
   .put("/:id", verifyAdmin, updateRoom )
   .delete("/:hotelId/:id", verifyAdmin, deleteRoom )
   .get("/:id", getRoom )
   .get("/", getAllRooms )

export default router;