import React from "react";
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
const Postall = () => {
 const {user,setUser}=useContext(CreateContext);
  return (
    <>
      <div>
        {/* first box1 */}
        <div className="rounded overflow-hidden lg:-ml-32 lg:w-auto shadow-lg border border-white border-y-2 border-x-2 w-full max-w-2xl mx-auto mt-5">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row px-4 justify-between items-center mt-2">
        <p className="mt-4 text-sm sm:text-base text-center sm:text-left">
          Share an article, photo, or update
        </p>
        <MdPhotoCamera className="mt-4 text-3xl sm:text-4xl" />
      </div>

      {/* Divider */}
      <div className="border-t mt-4"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row px-4 mt-3 justify-between items-center">
        <div className="flex items-center space-x-2 mb-3 sm:mb-0">
          <MdNoteAlt className="text-2xl" />
          <p className="text-sm sm:text-base">Publish a post</p>
        </div>
        <button className="bg-blue-500 text-white font-bold text-xs sm:text-sm p-2 mb-2">
          Share
        </button>
      </div>
    </div>

        {/* end */}

        {/* seconde box2 */}
        <div className="rounded overflow-hidden mt-5 lg:-ml-32 lg:w-auto shadow-lg w-full max-w-4xl mx-auto">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row items-center p-4 space-y-4 sm:space-y-0">
            <img
              className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              src={img}
              alt="Profile"
            />
            <div className="sm:ml-4 text-center sm:text-left">
              <h1 className="font-bold text-xl sm:text-2xl">{user}</h1>
              <h2 className="text-sm text-gray-600">Web Developer</h2>
              <p className="text-xs text-gray-500">1 week ago</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-4 py-2">
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              deleniti, ratione expedita laudantium ipsam, exercitationem optio
              cupiditate facilis nobis quibusdam voluptatum ad dignissimos
              libero alias perspiciatis. Molestiae minima aut ipsam ipsa
              aspernatur commodi cum, placeat alias? Rem ut quod atque! Quaerat
              modi doloremque aliquam maxime.
            </p>

            {/* Image */}
            <img
              src={img}
              className="font-bold bg-teal-500 w-full h-56 object-cover mb-4"
              alt="Post Image"
            />

            {/* Like and Comments Count */}
            <div className="flex flex-row items-center space-x-2 text-sm text-gray-600">
              <AiOutlineLike className="text-blue-600" />
              <FcLike />
              <PiHandsClappingDuotone className="text-green-600" />
              <p>520</p>
              <span className="font-bold">·</span>
              <p>20 comments</p>
            </div>

            {/* Divider */}
            <div className="border-t mt-4"></div>

            {/* Like, Comment, Share Actions */}
            <div className="flex justify-around py-2 mt-2">
              <div className="flex items-center space-x-2">
                <AiOutlineLike className="text-xl" />
                <h2 className="font-bold text-sm">Like</h2>
              </div>

              <div className="flex items-center space-x-2">
                <FaCommentDots className="text-xl" />
                <h2 className="font-bold text-sm">Comment</h2>
              </div>

              <div className="flex items-center space-x-2">
                <FaShareSquare className="text-xl" />
                <h2 className="font-bold text-sm">Share</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postall;
