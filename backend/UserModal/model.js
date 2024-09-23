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
    
    
})

const userModal= mongoose.model("userModal",userSchema);
module.exports=userModal;