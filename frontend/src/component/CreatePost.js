import React, { useContext } from 'react'

import { RxCross2 } from "react-icons/rx";
import img from "../assets/image1.png";
import { CreateContext } from '../App';
const CreatePost = () => {
    const {createpost,setCreatePost,user,setUser}=useContext(CreateContext);
    const handleClick=()=>{
     setCreatePost(false);
    }
  return (
    <>
     <div>
        
        <div className="rounded absolute z-40 top-96 sm:ml-96 bg-white shadow-black shadow-2xl  text-white overflow-hidden mt-2   w-96 p-7 ">
        <div>
            <RxCross2 onClick={()=>handleClick()} className='text-black text-2xl items-center cursor-pointer absolute top-2 right-3 font-bold' />
        </div>
          <div className="flex flex-col sm:flex-row items-center p-4 space-y-4 sm:space-y-0">
            <img
              className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              src={img}
              alt="Profile"
            />
            <div className="sm:ml-4 text-center text-black sm:text-left">
              <h1 className="font-bold text-xl sm:text-2xl">{user}</h1>
              <h2 className="text-sm font-bold">post to anyway</h2>
              
            </div>
          </div>

          {/* Card Body */}
          <div className="px-4 py-2">
            <p className="  text-black text-sm  mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
             
            
            </p>

            {/* Image */}
            <img
              src={img}
              className="font-bold bg-teal-500 w-full h-56 object-cover mb-4"
              alt="Post Image"
            />

            {/* Like and Comments Count */}
            

            {/* Divider */}

            <div className="border-t mt-4"></div>
            <div className='flex flex-row justify-between items-center'>
            <input className='mt-2' id="file-input" type="file" accept="image/*" />
            <button className='bg-blue-800 w-full p-2 -m-3 rounded-xl  text-white  mt-2'>post</button>
            </div>
            {/* Like, Comment, Share Actions */}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost