const express=require("express");
const {jobheader,jobget}=require("./Collection");
const router=express.Router();

router.post("/jobdetails",jobheader);
router.get("/getjob",jobget);

module.exports=router;