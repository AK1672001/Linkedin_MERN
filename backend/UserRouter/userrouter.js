const {signup,sigin}=require("../UserController/usercontroller");
const express=require("express");

const userrouter=express.Router();

userrouter.post("/signup",signup);

userrouter.post("/login",sigin);
module.exports=userrouter;