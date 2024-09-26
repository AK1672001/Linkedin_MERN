const express =require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cookieParser = require('cookie-parser');
dotenv.config();
const router=require("./Router")
const userrouter=require("./UserRouter/userrouter")
const cors=require("cors")
const server=express();
server.use(cookieParser());
server.use(express.json());
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err);
})
server.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})

server.use(cors({
   origin:"http://localhost:3000" ,
   credentials:true
}))
server.use(router)
server.use(userrouter)
