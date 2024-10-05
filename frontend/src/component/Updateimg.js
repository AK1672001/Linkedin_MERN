import React, { useState,useContext,useEffect } from 'react';
import { CreateContext } from "../App";
import { storage } from "../component/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
const Updateimg = () => {
  const{setImageUpdate,bgImage,setBgImage,user}=useContext(CreateContext)
  const [imageURL, setImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [background,setBackGround]=useState("");
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    if (background) {
      handleSaveImage();
    }
  }, [background]);
  const handleClose=()=>{
    setImageUpdate(false)
  }
  const handleImageChange = async (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImageURL(URL.createObjectURL(selectedImage));
      try {
        // Upload image to Firebase Storage
        const storageRef = ref(storage, `backgroundimages/${selectedImage.name}`);
        const snapshot = await uploadBytes(storageRef, selectedImage);
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log("Download URL:", downloadURL);
        setBackGround(downloadURL); // Set uploaded image URL

      } catch (error) {
        console.error("Error uploading or getting download URL:", error);
      }
    }
  };
  const handleSaveImage=async()=>{
    if (!background) {
      console.log("Background image is not ready yet.");
      return;
    }
    setIsSaving(true); 
    try {
      const response=await axios.post("http://localhost:5000/setuser",{background,user})
      console.log("response",response)
        setBgImage(response.data.bgimage)
    } catch (error) {
      console.log("error>>",error);
    }
    finally {
      setIsSaving(false);
      setImageUpdate(false);
    }
  }
  return (
    <div className="flex justify-center absolute top-5 z-40 items-center h-screen">
      
        <div  className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal content */}
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={handleClose}
            >
              &#x2715; {/* Close button (X) */}
            </button>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-64 h-64 border-2 border-dashed border-gray-300 flex justify-center items-center">
                {imageURL ? (
                  <img src={imageURL} alt="Uploaded" className="object-cover w-full h-full" />
                ) : (
                  <span className="text-gray-500">No image uploaded</span>
                )}
              </div>

              <div className="flex space-x-4">
                {imageURL?(
                  <button
                    onClick={handleSaveImage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                  >Save</button>
                ):(
                  <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  Upload Image
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>
                )}
                {imageURL && (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove Image
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Updateimg;
