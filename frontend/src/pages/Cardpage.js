
import img from "../assets/image1.png";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CreateContext } from "../App";
import React, { useContext ,useEffect} from 'react'
import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
const Cardpage = () => {
  const {profileCardPage,setProfileCardPage,user,setUser,image}=useContext(CreateContext);
  const [success, setSuccess] = useState("");
   
   
    const navigate=useNavigate();
    const viewprofile=()=>{
       navigate("/profile")
    }
    const handleClick=()=>{
      setProfileCardPage(false)
    }
    
    
    const handlelogout=async()=>{
          try{
               const response=await axios.post("http://localhost:5000/logout");
               console.log(response.data);
              //  Cookies.remove("token", { path: "/" });
              
               setTimeout(() => {
                setSuccess(response.data.msg);
                

              }, 2000);
              setTimeout(() => {
                setUser(null)
             
               navigate("/login")
                setProfileCardPage(false)
               
              }, 4000);
          }
          catch(err){
             console.log(err)
          }
    }
  return (
    <>
      <div className=" p-4 -top-10 absolute z-50 right-10 rounded overflow-hidden bg-slate-200 shadow-2xl sm:w-52 mt-7 ml-0 sm:ml-20 lg:w-64">
      <div>
            <RxCross2 onClick={()=>handleClick()} className='text-black text-2xl items-center cursor-pointer absolute top-2 right-3 font-bold' />
        </div>
        <div>
          <div className="flex flex-row">
            <img
              src={image}
              className="font-bold  flex flex-row  justify-center bg-teal-500 rounded-full w-16 h-16 "
            ></img>
            <div>
              <h2 className=" font-bold text-sm">
                {user}
              </h2>
              <p className="p-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                molestiae iure cum perspiciatis!
              </p>
             
            </div>
          </div>
           <div className="">
              <button onClick={()=>viewprofile()} className=" bg-slate-200 border border-x-blue-800 border-y-blue-800 border-x-2 border-y-2 w-full rounded-2xl">view profile</button>
           </div>
          <div className="border border-b-2 mt-6"></div>
        </div>
        <div>
          
          <p className="  font-bold text-sm">
            Account
          </p>
          <div>
            <p>sitting and privecy</p>
            <p>Help</p>
            <p>Language</p>
          </div>
          <div className="border border-b-2 mt-6"></div>
          <p className="  font-bold text-sm">
            Manage
          </p>
          <div>
            <p>post and activity</p>
            <p>Job posting account</p>
            {success && (
          <>
            <div className="text-green-800 ">{success}</div>
          </>
        )}
            <button onClick={handlelogout} className="font-bold bg-blue-800 text-sm mt-2 text-white p-2 rounded-2xl">signout</button>
          </div>
          <div className="border border-b-2 mt-6"></div>
          
        </div>
      </div>
    </>
  );
};

export default Cardpage;
