const UserPostModal=require("../UserModal/userpostmodal");
const UserModal=require("../UserModal/model")
const userpostdetails=async(req,res)=>{
    const{description,imagepost,userId}=req.body;
    console.log("req.body",req.body)
    try{
        const post= await UserPostModal({
            description,
            imagepost,
            user: userId
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
        const post= await UserPostModal.find().populate('user', 'name email position image');
       
        return res.status(200).json({msg:"post getall successfully",post});
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    } 
}

const usergetonepost=async(req,res)=>{
    try {
        const {id}=req.params
        const post = await UserPostModal.findOne({ user: id }).populate('user', 'name email position image');

        if (!post) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json({msg:"user one here",post});
      } catch (error) {
        res.status(500).json({ message: "Error fetching user details", error });
      }
}
const usergetonepostall=async(req,res)=>{
    try {
        const {id}=req.params
        const post = await UserPostModal.find({ user: id }).populate('user', 'name email position image');

        if (!post) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json({msg:"user one here",post});
      } catch (error) {
        res.status(500).json({ message: "Error fetching user details", error });
      }
}
module.exports={userpostdetails,userpostgetall,usergetonepost,usergetonepostall};