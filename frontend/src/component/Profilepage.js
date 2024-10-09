import React, { useContext, useEffect, useState } from "react";
import img from "../assets/image1.png";
import { CreateContext } from "../App";
import CreatePost from "./CreatePost";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Updateimg from "./Updateimg";
import axios from "axios";
import MyPost from "./MyPost";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import UserSkill from "./UserSkill";
// import ShowuserSkill from "./UpdateSkill";
const Profilepage = () => {
  const {
    createpost,
    setCreatePost,
    setProfileCardPage,
    user,
    image,
    imageupdate,
    setImageUpdate,
    bgImage,
    setBgImage,
    mypost,
    userId,
    setMyPost,
    userskill,
    setUserSkill,
    showuserskill,
    setShowUserSkill,
    skilluser,
    setSkillUser,
  } = useContext(CreateContext);
  const [getone, setGetOne] = useState([]);
  console.log("skilluser is skill only", skilluser);
  useEffect(() => {
    setProfileCardPage(false);
  }, []);
  const handleClick = () => {
    setCreatePost(!createpost);
  };
  const handleedit = () => {
    setImageUpdate(true);
    console.log("imageupload", imageupdate);
  };

  const handlepostclick = () => {
    setMyPost(true);
  };

  useEffect(() => {
    const getOne = async () => {
      const response = await axios.get(
        `http://localhost:5000/userpostgetone/${userId}`
      );
      console.log("Amit", response.data.post);
      setGetOne([response.data.post]);
    };
    getOne();
  }, [userId]);

  const handleplusclick = () => {
    setUserSkill(true);
  };
  // const handleeditshow=()=>{
  //   setShowUserSkill(true)
  // }
  return (
    <>
      <div className=" relative px-4 sm:px-8 lg:px-16 py-7 grid grid-cols-1 sm:grid-cols-2 gap-6  mt-5">
        <div>
          <div className="rounded relative overflow-hidden shadow-lg w-full sm:ml-32 ">
            <img className="w-full  h-48" src={bgImage || ""} alt="" />
            <MdOutlineModeEditOutline
              onClick={handleedit}
              className="absolute  cursor-pointer text-blue-800 font-bold text-2xl right-2 top-1 "
            />

            <div>
              <img
                className=" rounded-full w-24 relative z-50 -mt-16 ml-5  h-24"
                src={image}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="p-4">
                <h2 className="px-0 -mt-1 font-bold text-2xl items-center">
                  {user}
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolore aperiam molestias illo asperiores?
                </p>
                <span>Lorem ipsum dolor sit.</span>
                <p className="mt-1">300 connection</p>
              </div>
              <div className="-mt-16">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi, laboriosam!
                </p>
              </div>
            </div>
            <div className="flex flex-row p-4 space-x-4 items-center">
              <button className="bg-blue-900 w-24  text-white rounded-2xl border border-x-blue-800 border-y-blue-800 border-x-2 border-y-2">
                open to
              </button>
              <button className="bg-slate-200  w-36 font-bold text-sm text-blue-900 rounded-2xl border border-x-blue-800 border-y-blue-800 border-x-2 border-y-2">
                add profile section
              </button>
              <button className="bg-slate-200  w-36 font-bold text-sm text-blue-900 rounded-2xl border border-x-blue-800 border-y-blue-800 border-x-2 border-y-2">
                Enhance profile
              </button>
              <button className="bg-white w-24  text-blue rounded-2xl border border-x-blue-800 border-y-blue-800 border-x-2 border-y-2">
                more
              </button>
            </div>
          </div>
          <div>
            <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 mt-7">
              <div>
                <h1 className="font-bold text-2xl p-2">About</h1>
              </div>
              <div>
                <p className="mt-5 p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illum sed dolor aliquid rem quibusdam distinctio in provident,
                  accusantium sequi iste dolorem dolores. Placeat odit incidunt
                  ducimus aliquam excepturi necessitatibus suscipit nam et quos
                  nulla aut quibusdam minus voluptates repudiandae nostrum sed
                  omnis ratione, deserunt quod! Reiciendis corporis quas vel ex.
                  Ratione nemo odio inventore.
                </p>
              </div>
            </div>
            {createpost && (
              <>
                <CreatePost />
              </>
            )}
            <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 mt-7">
              <div className="flex flex-row justify-between ">
                <h1 className="font-bold text-2xl p-2">Activity</h1>

                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-blue-800 text-white rounded-2xl w-28 items-center p-2 z-10 relative cursor-pointer mr-11"
                >
                  create a post
                </button>
              </div>
              <div>
                {mypost && (
                  <>
                    <p className="mt-5 p-2">
                      <MyPost />
                    </p>
                  </>
                )}
              </div>
              <div>
                {getone.map((item, index) => {
                  return (
                    <>
                      <div
                        key={item._id || index}
                        className="flex flex-col  sm:flex-row items-center p-4 space-y-4 sm:space-y-0"
                      >
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

                        <div>
                          <button
                            onClick={() => handlepostclick()}
                            className="bg-blue-600 ml-24 sm:ml-52 p-2 rounded-2xl mt-2 font-bold text-white"
                          >
                            show all post
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 mt-7">
              <div>
                <h1 className="font-bold text-2xl p-2">Experions</h1>
              </div>
              <div>
                <p className="mt-5 p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illum sed dolor aliquid rem quibusdam distinctio in provident,
                  accusantium sequi iste dolorem dolores. Placeat odit incidunt
                  ducimus aliquam excepturi necessitatibus suscipit nam et quos
                  nulla aut quibusdam minus voluptates repudiandae nostrum sed
                  omnis ratione, deserunt quod! Reiciendis corporis quas vel ex.
                  Ratione nemo odio inventore.
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 mt-7">
              <div className="flex flex-row justify-between p-2 items-center">
                <h1 className="font-bold text-2xl p-2">Skills</h1>
                <div className="flex flex-row cursor-pointer gap-5">
                  <span
                    onClick={(e) => handleplusclick(e)}
                    className="font-bold text-2xl relative z-auto cursor-pointer"
                  >
                    <FaPlus />
                  </span>
                  {userskill && (
                    <>
                      <UserSkill />
                    </>
                  )}
                  <span className="font-bold text-2xl relative z-auto cursor-pointer">
                    <MdEdit />
                  </span>
                </div>
              </div>
              <div>
                <p className="mt-5 p-8 grid gap-2 sm:gap-3 sm:grid-cols-3 grid-cols-1">
                  {skilluser.length > 0 ? (
                    skilluser.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 w-full p-2 rounded-2xl text-sm font-bold text-gray-700"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p>No skills added yet.</p>
                  )}
                  {/* {
                    skilluser.map((skill,index)=>{
                      return (
                        <>
                        <span key={index}>{skill}</span>
                        </>
                      )
                    }) */}
                  {/* } */}
                </p>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 mt-7">
              <div>
                <h1 className="font-bold text-2xl p-2">Education</h1>
              </div>
              <div>
                <p className="mt-5 p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illum sed dolor aliquid rem quibusdam distinctio in provident,
                  accusantium sequi iste dolorem dolores. Placeat odit incidunt
                  ducimus aliquam excepturi necessitatibus suscipit nam et quos
                  nulla aut quibusdam minus voluptates repudiandae nostrum sed
                  omnis ratione, deserunt quod! Reiciendis corporis quas vel ex.
                  Ratione nemo odio inventore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded overflow-hidden w-full sm:max-w-64 shadow-lg sm:ml-56 p-3">
            <div>
              <h2 className="font-bold text-2xl">Profile language</h2>
            </div>
            <div className="space-x-3 flex flex-row mt-4">
              <button className="w-24 rounded-2xl bg-green-600 text-white ">
                English
              </button>
              <button className="w-24 rounded-2xl bg-white border border-x-black border-y-black">
                Hindi
              </button>
            </div>
            <div className="border border-b-white border-b-2 mt-4"></div>
            <div>
              <h2 className="mt-3 text-xl font-bold items-center p-2">
                Public Profile and Url
              </h2>
              <p className="p-2">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="rounded overflow-hidden w-full sm:max-w-64 shadow-lg sm:ml-56 p-3">
            <p className="font-bold text-sm">Add to you feed</p>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />

              <div>
                <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3 rounded-2xl text-white font-bold text-sm">
                  + follow
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />

              <div>
                <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3  rounded-2xl text-white font-bold text-sm">
                  + follow
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />

              <div>
                <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3  rounded-2xl text-white font-bold text-sm">
                  + follow
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />

              <div>
                <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3  rounded-2xl text-white font-bold text-sm">
                  + follow
                </button>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden w-full sm:max-w-64 shadow-lg sm:ml-56 p-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              laboriosam tempora error molestias quo laudantium laborum quod
              atque iure voluptatum necessitatibus dolorum exercitationem
              temporibus, expedita soluta aliquid, adipisci quibusdam odio
              reprehenderit cum eligendi nihil!
            </p>
          </div>
        </div>
      </div>
      {imageupdate && (
        <>
          <Updateimg />
        </>
      )}
    </>
  );
};

export default Profilepage;
