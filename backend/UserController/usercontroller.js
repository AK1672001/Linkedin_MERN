const userModal = require("../UserModal/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookies = require("cookies");
dotenv.config();
const signup = async (req, res) => {
  const { name, email, password,position,image } = req.body;
  if (!name || !email || !password||! position || !image)
    return res.status(404).json({ msg: "please fill all tha details" });
  try {
    const data = await userModal.findOne({ email });

    if (data) return res.status(404).json({ msg: "already email exist" });
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModal({
      name,
      email,
      position,
      password: hashPassword,
      image,
      
    });
    await user.save();

    return res.status(200).json({ msg: "successfully create account", user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};



const sigin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json({ msg: "please fill all tha details" });
  try {
    const user = await userModal.findOne({ email });
    if (!user)
      return res.status(404).json({ msg: "please provid a correct email" });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(404).json({ msg: "Please correct this password" });

    const token = await jwt.sign(
      { userId: user._id, user: user.name,userImage:user.image,position:user.position },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.cookie("token_amit", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
  
    .status(200)
      .json({ msg: "Logged in successfully!", user,token });
      
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const decodeToken = async (req, res) => {
    try {
      
      const token = req.cookies.token_amit;
  
      
      if (!token) {
        return res.status(401).json({ msg: "No token provided" });
      }
  
      
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
      console.log("Decoded Token:", decodedToken);
  
      
      return res.status(200).json({ msg: "Token decoded successfully", decodedToken });
    } catch (err) {
      
      return res.status(401).json({ msg: "Invalid or expired token", error: err.message });
    }
  };
  

const logout = async (req, res) => {
    console.log("req.cookies.token_amit;",req.cookies.token_amit)
    try {

  const data=   res
        .clearCookie("token_amit")
        .status(200)
        .json({ msg: "user logout successfully" });
      console.log("sdljgra",req.cookies.token_amit) 
      return data;
    } catch (err) {

      return res.status(500).json({ msg: err.message });
    }
  };



  const getalluser=async(req,res)=>{
      try{
            const user=await userModal.find();
            return res.status(200).json({msg:"all user details here",user})
      }
      catch(err){
        return res.status(404).json({msg:err.message})
      }
  }

  const deleteuser=async(req,res)=>{
        try{
          const {id}=req.params
           const user=await  userModal.findByIdAndDelete(id);
           if (!user) {
            return res.status(404).json({ msg: "User not found" });
          }
           return res.status(200).json({msg:"deleted successfully user"})
        }
        catch(err){
          return res.status(404).json({msg:err.message})
        }
  }
  const setuser = async (req, res) => {
    const { user,background } = req.body;
    if (!user|| !background)
      return res.status(404).json({ msg: "please provide backgroundImage" });
    try {
      
      const updatedUser = await userModal.findOneAndUpdate(
        { name:user }, // Find user by 'user' field
        { $set: { backgroundimage: background } }, // Update background image
        { new: true } // Return the updated document
      );
      if (updatedUser) {
        console.log("Updated user>>", updatedUser);
        return res.status(200).json({ msg: "Background image updated successfully",bgimage:updatedUser.backgroundimage});
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };
module.exports = { signup, sigin, logout,decodeToken ,getalluser,deleteuser,setuser};
