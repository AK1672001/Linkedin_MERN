import React from "react";
import img from "../assets/image1.png";
import { MdDelete } from "react-icons/md";

const Alluser = () => {
  return (
    <>
      <div className="alluser sm:p-36 p-4">
        <div className="rounded  sm:overflow-hidden items-center shadow-lg sm:p-6 p-4">
          <div className="flex text-center sm:flex-row sm:justify-around font-bold flex-col">
            <div>
              <h1>name</h1>

              <div className="flex sm:flex-row flex-col ">
                <img
                  className="rounded-full ml-32 w-24 h-24 sm:-ml-5 sm:mt-0 mt-3"
                  src={img}
                  alt=""
                />
                <h2 className="mt-6 text-sm ml-2">amitkushwaha</h2>
              </div>
            </div>
            <div className="sm:mt-0 mt-6 ">
              <h1>email</h1>
              <h1 className="sm:mt-6 text-sm sm:text-sm">ak12@gmail.com</h1>
            </div>

            <div className="sm:mt-0 mt-3">
              <h1>Position</h1>
              <p className="sm:mt-6 mt-1 text-sm">software developer</p>
            </div>
            <div className="sm:mt-0 mt-3">
              <h1>Delete</h1>
              <MdDelete className="font-bold text-2xl text-red-700 sm:mt-6 sm:ml-0 ml-40" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Alluser;
