import User from "../models/User.js";

const updateUser = async (req, res, next) => {
   try{
      const updatedUser = await User.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true}
      )
      return res.status(200).json(updatedUser)
   } catch(error) {
      return next(error);
   }
}

const deleteUser = async (req, res, next) => {
   try{
      await User.findByIdAndDelete(req.params.id)
      return res.status(200).json({"message":"User has been deleted successfully."})
   } catch(error) {
      return next(error)
   }
}

const getUser = async (req, res, next) => {
   try{
      const user = await User.findById(req.params.id)
      return res.status(200).json(user)
   } catch(error) {
      return next(error)
   }
}

const getAllUsers = async (req, res, next) => {
   try{
      const users = await User.find()
      console.log(typeof users, users)
      return res.status(200).json(users)
   } catch(error) {
      return next(error)
   }
}

export {
   updateUser,
   deleteUser,
   getUser,
   getAllUsers
}