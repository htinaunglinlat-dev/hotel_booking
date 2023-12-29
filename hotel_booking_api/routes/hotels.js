import { Router } from "express";
import Hotel from "./../models/Hotel.js"

import { createError } from "./../utilities/error.js"
import { 
   countByCity,
   createHotel,
   deleteHotel,
   getAllHotels,
   getHotel,
   updateHotel ,
   countByType
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utilities/verifyToken.js";


const router = Router()

router
   .get("/countByCity", countByCity)
   .get("/countByType", countByType)

router
   .get("/", getAllHotels)
   .get("/:id", getHotel)

router.use(verifyAdmin)

router.post("/", createHotel)

router.route("/:id")
   .put(updateHotel)
   .delete(deleteHotel)

// router
//    .post("/", verifyAdmin, createHotel)
//    .put("/:id", verifyAdmin, updateHotel)
//    .delete("/:id", verifyAdmin, deleteHotel)

//    .get("/countByCity", countByCity)
//    .get("/countByType", countByType)

//    .get("/:id", getHotel)
//    .get("/", getAllHotels)

export default router;