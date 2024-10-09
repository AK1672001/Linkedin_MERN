const {signup,sigin,logout,decodeToken,getalluser,deleteuser,setuser}=require("../UserController/usercontroller");
const express=require("express");
const {userprofile,userprofilegetall,userprofilegetone,userprofileupdate,userprofileoneupdate}=require("../UserController/userprofilecontroller")
const userrouter=express.Router();
userrouter.get("/getallsignup",getalluser);
userrouter.post("/signup",signup);
userrouter.delete("/deleteuser/:id",deleteuser);

userrouter.post("/login",sigin);
userrouter.post("/logout",logout);
userrouter.get("/decode",decodeToken);
userrouter.post('/setuser',setuser)

userrouter.post("/userpost",userprofile);

userrouter.get("/getuserallprofile",userprofilegetall);
userrouter.get("/getuseroneprofile/:id",userprofilegetone);
userrouter.put("/updateuserprofile/:id",userprofileupdate)
userrouter.get("/updateoneuserprofile/:id",userprofileoneupdate)
module.exports=userrouter;