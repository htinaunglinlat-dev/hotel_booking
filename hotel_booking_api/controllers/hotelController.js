import Hotel from "../models/Hotel.js";

const createHotel = async (req, res, next) => {
   const newHotel = new Hotel(req.body);
   try{
      const savedHotel = await newHotel.save()
      return res.status(200).json(savedHotel)
   } catch(error) {
      return next(error)
   }
}

const updateHotel = async (req, res, next) => {
   try{
      const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true})
      return res.status(200).json(updatedHotel)
   } catch(error) {
      return next(error)
   }
}

const deleteHotel = async (req, res, next) => {
   try{
      await Hotel.findByIdAndDelete(req.params.id);
      return res.status(200).json({"message":"Hotel has been deleted."})
   } catch(error) {
      return next(error)
   }
}

const getHotel = async (req, res, next) => {
   try{
      const hotel = await Hotel.findById(req.params.id)
      return res.status(200).json(hotel)
   } catch(error) {
      return next(error)
   }
}

const getAllHotels = async (req, res, next) => {
   try{
      const { min, max, limit, ...others } = req.query;
      const hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999} }).limit(req.query.limit);
      return res.status(200).json(hotels)
   } catch(error) {
      return next(error)
   }
}

const countByCity = async (req, res, next) => {
   const cities = req.query.cities.split(",")
   try{
      const list = await Promise.all(cities.map( city => Hotel.countDocuments({ city: city }) ))
      return res.status(200).json(list)
   } catch(error) {
      return next(error)
   }
}

const countByType = async (req, res, next) => {
   try{
      const hotelCount = await Hotel.countDocuments({type: "hotel"})
      const apartmentCount = await Hotel.countDocuments({type: "apartment"})
      const resortCount = await Hotel.countDocuments({type: "resort"})
      const villaCount = await Hotel.countDocuments({type: "villa"})
      const cabinCount = await Hotel.countDocuments({type: "cabin"})
      return res.status(200).json([
         {type: "hotel", count: hotelCount},
         {type: "apartment", count: apartmentCount},
         {type: "resort", count: resortCount},
         {type: "villa", count: villaCount},
         {type: "list", count: cabinCount}
      ])
   } catch(error) {
      return next(error)
   }
}

// const countsMap = counts.reduce((acc, { type, count }) => {
//    acc[type] = count;
//    return acc;
// }, {});

// const countByType = async (req, res, next) => {
//    try{
//       const counts = await Hotel.aggregate([
//          {
//             $group: {
//                _id: "$type",
//                count: { $sum: 1}
//             }
//          }, 
//          {
//             $project:{
//                _id: 0,
//                type: "$_id",
//                count: 1
//             }
//          }
//       ])
//       res.status(200).json(counts);
//    } catch(error) {
//       return next(error)
//    }
// }

export {
   createHotel,
   updateHotel,
   deleteHotel,
   getHotel,
   getAllHotels,
   countByCity,
   countByType
}

// 27IT
// 28DO

// 28PH