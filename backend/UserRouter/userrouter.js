const {signup,sigin,logout,decodeToken,getalluser,deleteuser}=require("../UserController/usercontroller");
const express=require("express");

const userrouter=express.Router();
userrouter.get("/getallsignup",getalluser);
userrouter.post("/signup",signup);
userrouter.delete("/deleteuser/:id",deleteuser);

userrouter.post("/login",sigin);
userrouter.post("/logout",logout);
userrouter.get("/decode",decodeToken);
module.exports=userrouter;