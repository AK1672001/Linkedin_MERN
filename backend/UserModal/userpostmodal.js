const mongoose=require("mongoose");

const userpostschema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    imagepost:{
        type:String,
        requried:false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModal",  
        required: true
      },
    createdAt: { type: Date, default: Date.now }
})

const UserPostModal= mongoose.model("UserPostModal",userpostschema);

module.exports=UserPostModal;