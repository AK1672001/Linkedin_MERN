const UserPostModal=require("../UserModal/userpostmodal");

const userpostdetails=async(req,res)=>{
    const{description,imagepost}=req.body;
    try{
        const post= await UserPostModal({
            description,
            imagepost
        })
        await post.save();
        return res.status(200).json({msg:"post is created successfully",post});
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}
const userpostgetall=async(req,res)=>{
    try{
        const user= await UserPostModal.find();
       
        return res.status(200).json({msg:"post getall successfully",user});
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    } 
}
module.exports={userpostdetails,userpostgetall};