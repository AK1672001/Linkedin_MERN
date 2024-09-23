import React, { useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CreateContext } from "../App";

const Navbar = () => {
  const {profileCardPage,setProfileCardPage}=useContext(CreateContext);
  const clickbutton=()=>{
    setProfileCardPage(!profileCardPage)
  }
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between shadow-lg bg-slate-200 sm:h-20 h-auto p-2">
        <div className="flex items-center space-x-4">
          <div className="">
          <FaLinkedin className="text-blue-600 sm:text-5xl bg-white text-5xl" />
          </div>
          <input
            className="px-7 w-full border border-x-black border-y-black sm:w-60 md:w-80 py-2 focus:outline-none rounded-2xl"
            type="text"
            placeholder="search here.."
          />
        </div>
        <div className="flex sm:flex-row flex-wrap gap-7  sm:gap-6 md:h-4 ml-12 mt-4 sm:ml-0 sm:mt-0">
          <Link to="/" className="flex flex-col items-center">
            <AiFillHome className="text-black  text-2xl sm:text-2xl" />
            <h3 className="text-black font-bold text-xs sm:text-sm hidden sm:block">Home</h3>
          </Link>
          <Link to="/alluser" className="flex flex-col items-center ">
            <FaUserGroup className="text-black sm:text-2xl text-2xl" />
            <h3 className="text-black font-bold text-xs sm:text-sm hidden sm:block">person</h3>
          </Link>
          <Link to='/listjob' className="flex flex-col items-center">
            <MdWork className="text-black sm:text-2xl text-2xl" />
            <h3 className="text-black font-bold text-xs sm:text-sm hidden sm:block">job</h3>
          </Link>
          <div className="flex flex-col items-center">
            <FaFacebookMessenger className="text-black sm:text-2xl text-2xl" />
            <h3 className="text-black font-bold text-xs sm:text-sm hidden sm:block">message</h3>
          </div>
          <div className="flex flex-col items-center">
            <IoMdNotifications  className="text-black sm:text-2xl text-2xl" />
            <h3 className="text-black font-bold text-xs sm:text-sm hidden sm:block">notifications</h3>
          </div>
          <div onClick={()=>clickbutton()} className="flex flex-col items-center cursor-pointer">
            <CgProfile  className="text-black sm:text-2xl text-2xl" />
            <button  className="text-black font-bold text-xs sm:text-sm hidden sm:block">profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
