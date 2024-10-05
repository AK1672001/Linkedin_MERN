const mongoose=require("mongoose");

const userpostschema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    imagepost:{
        type:String,
        requried:false
    }
})

const UserPostModal= mongoose.model("UserPostModal",userpostschema);

module.exports=UserPostModal;