const {signup,sigin,logout}=require("../UserController/usercontroller");
const express=require("express");

const userrouter=express.Router();

userrouter.post("/signup",signup);

userrouter.post("/login",sigin);
userrouter.post("/logout",logout);

module.exports=userrouter;