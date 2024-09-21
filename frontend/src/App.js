
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import { createContext,Provider,useContext } from "react";
import Alluser from "./component/Alluser";
import Profilepage from "./component/Profilepage";
import Jobdetails from "./component/Jobdetails";
import ListJob from "./component/ListJob";
const CreateContext=createContext();
function App() {
 
  const[profileCardPage,setProfileCardPage]=useState(false);
  const[createpost,setCreatePost]=useState(false);
  return (
    <>
    <CreateContext.Provider value={{profileCardPage,setProfileCardPage,createpost,setCreatePost}}>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profilepage/>}/>
      <Route path="/alluser" element={<Alluser/>}/>
      <Route path="/jobpage" element={<Jobdetails/>}/>
      <Route path="/listjob" element={<ListJob/>}/>

    </Routes>
    </CreateContext.Provider>
    
    </>
    
  );
}

export default App;

export {CreateContext}
