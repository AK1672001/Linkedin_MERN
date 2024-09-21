import React from "react";
import img from "../assets/image1.png";
import { useNavigate } from "react-router-dom";
const Cardpage = () => {
    const navigate=useNavigate();
    const viewprofile=()=>{
       navigate("/profile")
    }
  return (
    <>
      <div className=" p-4 -top-10 absolute z-50 right-10 rounded overflow-hidden bg-slate-200 shadow-2xl sm:w-52 mt-7 ml-0 sm:ml-20 lg:w-64">
        <div>
          <div className="flex flex-row">
            <img
              src={img}
              className="font-bold  flex flex-row  justify-center bg-teal-500 rounded-full w-16 h-16 "
            ></img>
            <div>
              <h2 className=" font-bold text-sm">
                amit kushwaha
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
            <p>signout</p>
          </div>
          <div className="border border-b-2 mt-6"></div>
          
        </div>
      </div>
    </>
  );
};

export default Cardpage;
