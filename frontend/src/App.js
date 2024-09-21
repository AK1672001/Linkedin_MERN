
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import { createContext,Provider,useContext } from "react";
import CreatePost from "./component/CreatePost";
import Profilepage from "./component/Profilepage";
const CreateContext=createContext();
function App() {
 
  const[profileCardPage,setProfileCardPage]=useState(false);
  const[createpost,setCreatePost]=useState(false);
  return (
    <>
    <CreateContext.Provider value={{profileCardPage,setProfileCardPage,createpost,setCreatePost}}>
    <Navbar/>
    {/* <CreatePost/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profilepage/>}/>
      
    </Routes>
    </CreateContext.Provider>
    
    </>
    
  );
}

export default App;

export {CreateContext}
