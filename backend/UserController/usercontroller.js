const userModal=require("../UserModal/model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name||!email || !password)
        return res.status(404).json({msg:"please fill all tha details"})
    try{
        const data=await userModal.findOne({email});
        
        if(data)return res.status(404).json({msg:"already email exist"})
        const hashPassword=await bcrypt.hash(password,10);
         const user= await userModal({
            name,
            email,
            password:hashPassword

         })
         await user.save();
         
         return res.status(200).json({msg:"successfully create account",user})
    }
    catch(err){
      return res.status(500).json({msg:err.message});
    }
}
const sigin=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password)
        return res.status(404).json({msg:"please fill all tha details"})
    try{
        const user=await userModal.findOne({email})
        if(!user) return res.status(404).json({msg:"please provid a correct email"});
        const validPassword= await bcrypt.compare(password,user.password);
        if(!validPassword)return res.status(404).json({msg:"Please correct this password"});

        const token= await jwt.sign(
            {userId:user._id,
              user:user.name
            },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        return res.status(200).json({msg:"successfully login",user,token});
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

const logout=async(req,res)=>{
    
}
module.exports={signup,sigin};