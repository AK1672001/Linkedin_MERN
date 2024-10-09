import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CreateContext } from "../App";
import { useContext } from "react";
const UpdateSkill = () => {
    const {showuserskill,setShowUserSkill}=useContext(CreateContext);
    const handleCross=()=>{
        setShowUserSkill(false)
    }
  return (
    <>
    <div className="p-2 left-40 flex absolute z-50 bg-white rounded-2xl  mt-6 justify-center">
        <div className="overflow-hidden shadow-2xl bg-white rounded-2xl p-2 w-[40rem] h-full ">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-2xl p-2">show skills</h1>
            <h1 onClick={()=>handleCross()}  className="justify-end cursor-pointer  text-black flex font-bold text-5xl">
              <RxCross2 />
            </h1>
          </div> 
        </div>
      </div>
    </>
  )
}

export default UpdateSkill
