
const UserProfile=require("../UserModal/usermodel")
const userprofile=async(req,res)=>{
    const{skill,education,about,experience}=req.body;
    
    try{
          const userdata= new UserProfile({
               skill,
               education,
               about,
               experience
          })
          await userdata.save();
          return res.status(200).json({msg:"successfully userprofile add",userdata})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

const userprofilegetall=async(req,res)=>{
    

    try{
          
          const userdata=await UserProfile.find();
          return res.status(200).json({msg:"successfully userprofile all details",userdata})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

 
const userprofilegetone=async(req,res)=>{
    

    try{
          const {id}=req.params
          const userdata=await UserProfile.findById(id);
          if (!userdata) {
            return res.status(404).json({ msg: "User not found" });
          }
          return res.status(200).json({msg:"successfully userprofile one details",userdata})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

const userprofileupdate=async(req,res)=>{
    
    const { skill, education, about, experience } = req.body;
    try{
          const {id}=req.params
          const userdata=await UserProfile.findByIdAndUpdate(id,{
            skill,
            education,
            about,
            experience
          },
          {new:true}
        );
        if (!userdata) {
            return res.status(404).json({ msg: "User not found" });
          }
          return res.status(200).json({msg:"successfully userprofile updatelly",userdata})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

const userprofileoneupdate=async(req,res)=>{
   
    try{
          const {id}=req.params
        //   const updateData = req.body; 
          const userdata=await UserProfile.findByIdAndUpdate(id,{new:true})
           
        if (!userdata) {
            return res.status(404).json({ msg: "User not found" });
          }
          return res.status(200).json({msg:"successfully userprofile one updatelly",userdata})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}
module.exports={userprofile,userprofilegetall,userprofilegetone,userprofileupdate,userprofileoneupdate};