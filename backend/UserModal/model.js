const mongoose=require("mongoose")
const validator=require("validator")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"please provide a valid email"]

    },
    password:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    backgroundimage:{
        type:String,
        required:false
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserPostModal"  // Refers to the Post schema
      }],
    skill:{
        type:[String],
        required:false
    },
    about:{
        type:String,
        required:false
    },
    education:{
        type:[String],
        required:false
    },
    experience:{
        type:[String],
        required:false
    }
    
})

const userModal= mongoose.model("userModal",userSchema);
module.exports=userModal;