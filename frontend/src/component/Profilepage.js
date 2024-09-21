import React, { useContext, useEffect } from "react";
import img from "../assets/image1.png";
import { CreateContext } from "../App";
import CreatePost from "./CreatePost";
const Profilepage = () => {
  const {createpost,setCreatePost,profileCardPage,setProfileCardPage}=useContext(CreateContext);
  useEffect(()=>{
   setProfileCardPage(false);
  },[])
   const handleClick=()=>{
    setCreatePost(!createpost);
    

   }
  return (
    <>
      <div className=" relative px-4 sm:px-8 lg:px-16 py-7 grid grid-cols-1 sm:grid-cols-2 gap-6  mt-5">
        <div>
          <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 ">
            <img className="w-full  h-48" src={img} alt="" />
            <div>
              <img
                className=" rounded-full w-24 relative z-50 -mt-16 ml-5  h-24"
                src={img}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="p-4">
                <h2 className="px-0 -mt-1 font-bold text-2xl items-center">
                  amit kushwaha
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
            {createpost&&(
              <>
              <CreatePost/>
              </>
            )}
            <div className="rounded overflow-hidden shadow-lg w-full sm:ml-32 mt-7">
              <div className="flex flex-row justify-between ">
                <h1 className="font-bold text-2xl p-2">Activity</h1>
                <button onClick={(e)=>handleClick(e)} className="bg-blue-800 text-white rounded-2xl w-28 items-center p-2 z-10 relative cursor-pointer mr-11">create a post</button>
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
              <div>
                <h1 className="font-bold text-2xl p-2">Skills</h1>
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
              <button className="w-24 rounded-2xl bg-green-600 text-white ">English</button>
              <button className="w-24 rounded-2xl bg-white border border-x-black border-y-black">Hindi</button>
            </div>
            <div className="border border-b-white border-b-2 mt-4"></div>
            <div>
              <h2 className="mt-3 text-xl font-bold items-center p-2">Public Profile and Url</h2>
              <p className="p-2">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="rounded overflow-hidden w-full sm:max-w-64 shadow-lg sm:ml-56 p-3">
            <p className="font-bold text-sm">
             Add to you feed
            </p>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />
              
              <div>
              <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3 rounded-2xl text-white font-bold text-sm">+ follow</button>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />
              
              <div>
              <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3  rounded-2xl text-white font-bold text-sm">+ follow</button>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />
              
              <div>
              <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3  rounded-2xl text-white font-bold text-sm">+ follow</button>
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <img className="w-14 h-14 rounded-full" src={img} alt="" />
              
              <div>
              <h2 className="font-bold text-sm p-2 -mt-2">The Company</h2>
                <p className="p-2 -mt-5 text-sm">real state</p>
                <button className="bg-blue-800 w-20 p-1 ml-3  rounded-2xl text-white font-bold text-sm">+ follow</button>
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
    </>
  );
};

export default Profilepage;
