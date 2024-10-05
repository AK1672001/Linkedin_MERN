import React, { useState,useContext, useEffect } from "react";
import img from "../assets/image1.png";
import NewsCard from "./NewsCard";
import Postall from "../component/Postall";
import { CreateContext } from "../App";
import Cardpage from "./Cardpage";
import { useLocation } from 'react-router-dom';
const Home = () => {
  const {profileCardPage,setProfileCardPage,user,setUser,image,setImage,position,setPosition}=useContext(CreateContext);
  const {pathname} = useLocation();
  const [hasReloaded, setHasReloaded] = useState(false); 
  const isHome=pathname=="/"
  console.log("location>>",isHome)
  return (
    <div className="relative px-4 sm:px-8 lg:px-16 py-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 bg-gray-50">
      {/* first div start */}
      <div>
        <div className="rounded overflow-hidden shadow-lg sm:w-52  lg:w-64">
          <img
            className="w-full h-24 sm:h-20 "
            src={img}
            alt="Sunset in the mountains"
          />

          <img
            src={image}
            className="font-bold ml-36 sm:ml-20  -mt-8 sm:-mt-8 relative z-40 sm:z-40 flex flex-row  justify-center bg-teal-500 rounded-full w-20 h-20 text-xl"
          ></img>
          <div>
            <h2 className="flex flex-row justify-center font-bold text-sm mt-3 sm:mt-3">
            {user}
            </h2>
            <p className="flex flex-row justify-center text-sm">
            {position}
            </p>
            <div className="border border-b-2 mt-6"></div>
          </div>
          <div>
            <span className="justify-center flex flex-row font-bold text-2xl mt-4 text-blue-700">
              65
            </span>
            <p className=" justify-center flex flex-row font-bold text-sm">
              who's viewed your profile
            </p>
            <div className="border border-b-2 mt-6"></div>
            <span className="justify-center flex flex-row font-bold text-2xl mt-4 text-blue-700">
              65
            </span>
            <p className=" justify-center flex flex-row font-bold text-sm">
              viewes of your photo
            </p>
            <div className="border border-b-2 mt-6"></div>
          </div>
        </div>
      </div>
      {/* first section end */}

      {/* second div section start */}
     <Postall/>
      {/* second dev end */}

      {/* third section start */}
      <div>
        <div className="rounded overflow-hidden shadow-lg ">
          <NewsCard />
        </div>
      </div>
      {/* third section end */}
      {profileCardPage &&(
     <Cardpage/>
      )}
    </div>
  );
};

export default Home;
