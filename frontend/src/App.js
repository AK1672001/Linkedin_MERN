import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { createContext} from "react";
import Alluser from "./component/Alluser";
import Profilepage from "./component/Profilepage";
import Jobdetails from "./component/Jobdetails";
import ListJob from "./component/ListJob";
import axios from "axios";
import Signup from "./pages/Signup";
import Signin from "./pages/Sigin";
import { ToastContainer } from "react-toastify";

import { useLocation } from 'react-router-dom';
const CreateContext = createContext();
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
function App() {
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;
  const {pathname} = useLocation();
  const [hasReloaded, setHasReloaded] = useState(false); 
  const [profileCardPage, setProfileCardPage] = useState(false);
  const [createpost, setCreatePost] = useState(false);
  const [islogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");
  const[userId,setUserId]=useState("")
  const [image, setImage] = useState("")
  const [position, setPosition] = useState("");
 const[bgImage,setBgImage]=useState("")
  const[imageupdate,setImageUpdate]=useState(false)
  const[mypost,setMyPost]=useState(false)
  const [userskill,setUserSkill]=useState(false);
  // const [showuserskill,setShowUserSkill]=useState(false)

  const[skilluser,setSkillUser]=useState([]);

  useEffect(()=>{
        const skilldata=async()=>{
            try{
                 const response=await axios.get("http://localhost:5000/getuserallprofile") 
                 console.log(response.data.userdata);
                 console.log("response.data>>",response.data.userdata);
                 const data=response.data.userdata
                const skills = data.map((user) => user.skill).flat();
                setSkillUser(skills);  
                console.log("skills:", skills);
                 
            }
            catch(err){
              console.log(err)
            }
        }
        skilldata();
  },[])
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/decode");
        console.log("response data>>",response.data)
        if (response.data && response.data.decodedToken) {
          setUser(response.data.decodedToken.user);
          console.log("user ",response.data.decodedToken.user.name)
          setPosition(response.data.decodedToken.position)
          setImage(response.data.decodedToken.userImage)
          setUserId(response.data.decodedToken.userId)
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [pathname]);
  
 


  return (
    <>
      <CreateContext.Provider
        value={{
          profileCardPage,
          setProfileCardPage,
          createpost,
          setCreatePost,
          setIsLogged,
          islogged,
          user,
          setUser,
          image,setImage,position,setPosition,
          imageupdate,setImageUpdate,
          bgImage,setBgImage,
          userId,setUserId,
          mypost,setMyPost,
          userskill,setUserSkill,
          // showuserskill,setShowUserSkill,
          skilluser,setSkillUser
        }}
      >
        <Navbar />
         
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profilepage />} />
              <Route path="/alluser" element={<Alluser />} />
              <Route path="/jobpage" element={<Jobdetails />} />
              <Route path="/listjob" element={<ListJob />} />
              
             
            </>
              ) : (  
                 <>
                 <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Signin />} />
                 </>
          ) 
       }  

          
        </Routes>
      </CreateContext.Provider>
    </>
  );
}

export default App;

export { CreateContext };
