const {userpostdetails,userpostgetall,usergetonepost,usergetonepostall}=require("../UserController/userpostcontroller");
const express=require("express");
const userpostrouter=express.Router();

userpostrouter.post("/userpostdetails",userpostdetails);
userpostrouter.get("/userpostgetall",userpostgetall);
userpostrouter.get("/userpostgetone/:id",usergetonepost);
userpostrouter.get("/userpostgetoneall/:id",usergetonepostall);
module.exports=userpostrouter;