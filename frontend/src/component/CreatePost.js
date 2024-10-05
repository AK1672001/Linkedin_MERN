import React, { useContext, useState } from "react";

import { RxCross2 } from "react-icons/rx";
import img from "../assets/image1.png";
import { CreateContext } from "../App";
import { storage } from "../component/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
const CreatePost = () => {
  const { createpost, setCreatePost, user, setUser, image } =
    useContext(CreateContext);
  const [uploading, setUpLoading] = useState(true);
  const [description, setDesCription] = useState("");
  const [imagepost, setImagePost] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    setDesCription(e.target.value);
  };
  const handleFileChange = async (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImagePost(URL.createObjectURL(selectedImage));
    }
    try {
      const storageRef = ref(storage, `imagepost/${selectedImage.name}`);
      const snapshot = await uploadBytes(storageRef, selectedImage);
      const imageURL = await getDownloadURL(snapshot.ref);

      console.log("Download URL:", imageURL);
      setImagePost(imageURL);
      setUpLoading(false);
      setTimeout(()=>{
        setUpLoading(true);
      },5000)
    } catch (error) {
      console.error("Error uploading or getting download URL:", error);
    }
  };
  const handlebuttonclick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/userpostdetails",
        { description, imagepost }
      );
      console.log("response>>>", response.data.post);
      console.log("message", description);
      setDesCription("");
      setImagePost(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    setCreatePost(false);
  };

  return (
    <>
      <div>
        <div className="rounded absolute z-40 top-96 sm:ml-96 bg-white shadow-black shadow-2xl  text-white overflow-hidden mt-2   w-96 p-7 ">
          <div>
            <RxCross2
              onClick={() => handleClick()}
              className="text-black text-2xl items-center cursor-pointer absolute top-2 right-3 font-bold"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center p-4 space-y-4 sm:space-y-0">
            <img
              className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              src={image}
              alt="Profile"
            />
            <div className="sm:ml-4 text-center text-black sm:text-left">
              <h1 className="font-bold text-xl sm:text-2xl">{user}</h1>
              <h2 className="text-sm font-bold">post to anyway</h2>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-4 py-2">
            <textarea
              value={description}
              onChange={handlechange}
              type="text"
              placeholder="message type here..."
              className="  text-black  px-4 w-full h-36  rounded-2xl  mb-4"
            ></textarea>

            {/* Image */}
            <img
              src={imagepost}
              className="font-bold bg-teal-500 w-full h-56 object-cover mb-4"
              alt="Post Image"
            />

            <div className="border-t mt-4"></div>
            <div className="flex flex-row justify-between items-center">
              {
                !imagepost?(
                  <>
                  <input
                onChange={handleFileChange}
                className="mt-2"
                id="file-input"
                type="file"
                accept="image/*"
              />
                  </>
                ):(
                  <button
                
                onClick={handlebuttonclick}
                className={`w-48 p-2 ml-auto rounded-xl mt-2 ${
                  uploading
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-blue-800 text-white"
                }`}
              >
                post
              </button>
                )
              }

              {
                description && !imagepost?(
                  <>
                  <button
              
                onClick={handlebuttonclick}
                className="w-48 bg-blue-500 p-2 ml-auto rounded-xl mt-3"
              >
                post
              </button>
                  </>
                ):(
                  null
                )
              }





            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
