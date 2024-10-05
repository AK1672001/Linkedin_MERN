const {userpostdetails,userpostgetall}=require("../UserController/userpostcontroller");
const express=require("express");
const userpostrouter=express.Router();

userpostrouter.post("/userpostdetails",userpostdetails);
userpostrouter.get("/userpostgetall",userpostgetall);
module.exports=userpostrouter;