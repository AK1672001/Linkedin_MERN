const  mongoose= require("mongoose")

const userSchema=new mongoose.Schema({
   
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

const UserProfile= mongoose.model("UserProfile",userSchema);

module.exports=UserProfile;