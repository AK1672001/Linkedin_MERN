const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    Skill:{
        type:[String],
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    qulification:{
        type:String,
        required:true
    },
    responsibility:{
        type:String,
        required:true
    }
})

const Jobschema= mongoose.model("Jobschema",dataSchema);

module.exports=Jobschema;