import React, { useEffect, useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { PiHandsClappingDuotone } from "react-icons/pi";
import img from "../assets/image1.png";
import { CreateContext } from "../App";
import { useContext } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
const MyPost = () => {
  const { user, setUser, image, userId, setUserId ,setMyPost} = useContext(CreateContext);
  console.log("userID>>", userId);
  const [getone, setGetOne] = useState([]);
  useEffect(() => {
   
    const getOne = async () => {
      const response = await axios.get(
        `http://localhost:5000/userpostgetoneall/${userId}`
      
      );
      console.log("Amit", response.data.post);
       setGetOne(response.data.post);
      
      
    };
    getOne();
  }, [userId]);
  useEffect(() => {
   
    const getOne = async () => {
      const response = await axios.get(
        `http://localhost:5000/userpostgetone/${userId}`
      
      );
      console.log("Amit", response.data.post);
      //  setGetOne(response.data.post);
      
      
    };
    getOne();
  }, [userId]);
  const handleCross=()=>{
     setMyPost(false)
  }
  return (
    <>
      <div className="p-14 absolute z-40 top-96 sm:left-96 sm:top-20 sm:mt-auto mt-auto bg-slate-100 rounded-2xl shadow-2xl">
        <div>
          <h1 onClick={()=>handleCross()} className="justify-end flex font-bold text-3xl"><RxCross2 /></h1>
        </div>
        <div className="mt-7 ">
          <div className="rounded-xl overflow-hidden mt-5  lg:w-96 shadow-2xl w-full max-w-4xl mx-auto">
            {getone.map((item,index) => {
              return (
                <>
                  <div key={item._id || index} className="flex flex-col  sm:flex-row items-center p-4 space-y-4 sm:space-y-0">
                    <img
                      className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
                      src={item?.user?.image || ""}
                      alt="Profile"
                    />
                    <div className="sm:ml-4 text-center sm:text-left">
                      <h1 className="font-bold text-xl sm:text-2xl">
                        {item?.user?.name}
                      </h1>
                      <h2 className="text-sm text-gray-600">
                        {item?.user?.position}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  
                  <div className="px-4 py-2">
                    <p className="text-sm text-gray-700 mb-4">
                      {item.description}
                    </p>
                    <img
                      src={item.imagepost}
                      className="font-bold bg-slate-100 w-full h-56 object-cover mb-4"
                      alt="Post Image"
                    />

                    
                    

                    
                    <div className="border-t mt-4"></div>

                   

                     

                    
                    <div className="border border-t mt-4 border-t-black"></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPost;
