// import React, { useEffect, useState } from "react";
// import img from "../assets/image1.png";
// import { MdDelete } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import { CreateContext } from "../App";
// import { useContext } from "react";
// import Cardpage from "../pages/Cardpage";
// import axios from "axios";

// const Alluser = () => {
//   const { profileCardPage, setProfileCardPage } = useContext(CreateContext);
//   const [alluser,setAllUser]=useState([]);

//   useEffect(()=>{
//       const userall=async()=>{
//           const response=await axios.get("http://localhost:5000/getallsignup")
//           console.log(response.data.user)
//           setAllUser(response.data.user)
//       }
//       userall();
//   },[])
 
//   return (
//     <>
//       <div className="alluser sm:grid-cols-3 grid-cols-1 lg:grid-cols-4 relative sm:p-36 p-4">
//         <div className="rounded sm:grid-cols-3 grid-cols-1 lg:grid-cols-4 sm:overflow-hidden items-center shadow-lg sm:p-6 p-4">
       
//           <div className="flex text-center sm:grid-cols-3 grid-cols-1 lg:grid-cols-4 sm:flex-row sm:justify-around font-bold flex-col">
//            {
//              alluser.map((user)=>{
//                   return (
//                      <>
//                       <div>
//               <h1>name</h1>

//               <div className="flex sm:flex-row flex-col ">
//                 <img
//                   className="rounded-full ml-32 w-24 h-24 sm:-ml-5 sm:mt-0 mt-3"
//                   src={img}
//                   alt=""
//                 />
//                 <h2 className="mt-6 text-sm ml-2">{user.name}</h2>
//               </div>
//             </div>
//             <div className="sm:mt-0 mt-6 ">
//               <h1>email</h1>
//               <h1 className="sm:mt-6 text-sm sm:text-sm">{user.email}</h1>
//             </div>

//             <div className="sm:mt-0 mt-3">
//               <h1>Position</h1>
//               <p className="sm:mt-6 mt-1 text-sm">{user.position}</p>
//             </div>
//             <div className="sm:mt-0 mt-3">
//               <h1>Delete</h1>
//               <MdDelete className="font-bold text-2xl text-red-700 sm:mt-6 sm:ml-0 ml-40" />
//             </div>
//                      </>
//                   )
//              })
//            }
//           </div>
          
//         </div>
//       </div>
//       {profileCardPage && <Cardpage className="" />}
//     </>
//   );
// };

// export default Alluser;



import React, { useEffect, useState } from "react";
import img from "../assets/image1.png";
import { MdDelete } from "react-icons/md";
import { CreateContext } from "../App";
import { useContext } from "react";
import Cardpage from "../pages/Cardpage";
import axios from "axios";

const Alluser = () => {
  const { profileCardPage, setProfileCardPage } = useContext(CreateContext);
  const [allUsers, setAllUsers] = useState([]);
  const [success, setSuccess] = useState("");
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getallsignup");
        console.log(response.data.user);
        setAllUsers(response.data.user);
        
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchAllUsers();
  }, []);
  const handledelete=async(id)=>{
        try{
           const response=await axios.delete(`http://localhost:5000/deleteuser/${id}`)
           console.log(response.data);
           const updatedUsers = allUsers.filter((user) => user._id !== id);
           setAllUsers(updatedUsers);
           setSuccess(response.data.msg);
          setTimeout(()=>{
            setSuccess();

          },1000)
          

        }
        catch(err){
          console.log(err)
        }
  }
  return (
    <>
      <div className="alluser grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {success && (
          <>
            <div className="text-green-800 ">{success}</div>
          </>
        )}
        {/* Mapping through all users */}
        {allUsers.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4"
          >
            <img
              className="rounded-full w-24 h-24"
              src={img}
              
            />
            <div className="text-center">
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">{user.position}</p>
            </div>
            <div className="text-center">
              <button
                className="text-red-600 text-2xl hover:text-red-800 transition duration-200"
                onClick={() =>handledelete(user._id)} // Add your delete functionality here
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>

      {profileCardPage && <Cardpage className="" />}
    </>
  );
};

export default Alluser;
