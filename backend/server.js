const express =require("express");
const dotenv=require("dotenv");
dotenv.config();

const server=express();

server.use(express.json());

server.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})