import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utilities/error.js";

const createRoom = async (req, res, next) => {
   const newRoom = new Room(req.body)
   try{
      const updateRoom = await newRoom.save()
      const updateHotel = await Hotel.findByIdAndUpdate(req.params.hotelId, {$push: { rooms: updateRoom._id }}, { new: true } )
      return res.status(201).json({"hotel": updateHotel, "room":updateRoom })
   } catch(error) {
      return next(error);
   }
}

const updateRoom = async (req, res, next) => {
   try{
      const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      return res.status(200).json(updateRoom)
   } catch(error) {
      return next(error);
   }
}
 
const deleteRoom = async (req, res, next) => {
   try{
      await Room.findByIdAndDelete(req.params.id)
      await Hotel.findByIdAndUpdate(req.params.hotelId, { $pull: { rooms: req.params.id } })
      return res.status(200).json("Room has been deleted.")
   } catch(error) {
      return next(error)
   }
}

const getRoom = async (req, res, next) => {
   try{
      const room = await Room.findById(req.params.id);
      return res.status(200).json(room)
   } catch(error) {
      return next(error)
   }
}

const getAllRooms = async (req, res, next) => {
   try{
      const rooms = await Room.find();
      return res.status(200).json(rooms)
   } catch(error) {
      return next(error)
   }
}

export {
   createRoom,
   updateRoom,
   deleteRoom,
   getRoom,
   getAllRooms
}