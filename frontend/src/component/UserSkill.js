import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CreateContext } from "../App";
import { useContext } from "react";
import axios from "axios";

const UserSkill = () => {
    const {setUserSkill,skilluser,setSkillUser} = useContext(CreateContext);
    const [skill,setSkill]=useState("")
    // const [saveskill,setSaveSkill]=useState([]);
    
   console.log("skill user anil is>>>",skilluser)
    const handleCross=()=>{
        setUserSkill(false)
     }
    
     
    const handleClick=async(e)=>{
        e.preventDefault();
         try{
            
            const response= await axios.post("http://localhost:5000/userpost",{skill})

         console.log("response>>",response.data.userdata.skill)
         
         setSkill("")
             setTimeout(()=>{
               
               console.log("skilluser time out>>",skilluser) 
                
             },2000)
         }
         catch(err){
            console.log(err)
         }
    }
  return (
    <>
      <div className="p-2 left-40 flex absolute z-50 bg-white rounded-2xl  mt-6 justify-center">
        <div className="overflow-hidden shadow-2xl bg-white rounded-2xl p-2 w-[40rem] h-full ">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-2xl p-2">add skills</h1>
            <h1 onClick={()=>handleCross()}  className="justify-end cursor-pointer  text-black flex font-bold text-5xl">
              <RxCross2 />
            </h1>
          </div>
          <div className="mt-8 p-2 space-x-2">
            <span>skills</span>
            <input
              type="text"
              value={skill}
              onChange={(e)=>setSkill(e.target.value)}
              className=" rounded-2xl px-3 py-3 border border-x-black border-y-black"
              placeholder="enter skills.."
            />
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={handleClick} className="bg-blue-800 text-white px-5 py-2 rounded-2xl p-2 ">
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSkill;
