const asyncHandler = require('express-async-handler')
const User = require('../models/UserSchema')
const generateToken = require('../utils/generateToken')

const bcrypt = require('bcrypt')

const regesterUser = asyncHandler(async (req,res) => {
   const {fullName, username, email, password, pic} = req.body;

   const userExists = await User.findOne({email});
   if(userExists){
       res.status(400)
       throw new Error("User Already Exist")
   }
   const user = await User.create({
    fullName,
    username,
    email,
    password,
    pic,
   
   })
   if(user){
       res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
       })
   }else{
       res.status(400)
       throw new Error("Error Occured")
   }


})

const authUser = asyncHandler(async (req,res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
     
    }
  });

module.exports = {regesterUser, authUser}