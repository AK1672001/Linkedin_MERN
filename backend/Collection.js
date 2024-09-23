const Jobschema=require("./model");

const jobheader=async(req,res)=>{
    const{title,company,location,description,Skill,qulification,responsibility}=req.body;
    try{

        const job= new Jobschema({
            title,
            company,
            location,
            description,
            Skill,
            qulification,
            responsibility
        })
        await job.save();
        console.log("job",job)
        return res.status(200).json({msg:"successfully delatils",job})
    }
    catch(err){
       return  res.status(500).json({msg:err.mesage})
    }
}


const jobget=async(req,res)=>{
 
    try{

        const data=await Jobschema.find();
        
        return res.status(200).json({msg:"successfully job all delatils",data})
    }
    catch(err){
       return  res.status(500).json({msg:err.mesage})
    }
}

module.exports={jobheader,jobget};