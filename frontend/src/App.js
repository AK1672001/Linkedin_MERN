import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import { createContext, Provider, useContext } from "react";
import Alluser from "./component/Alluser";
import Profilepage from "./component/Profilepage";
import Jobdetails from "./component/Jobdetails";
import ListJob from "./component/ListJob";
import axios from "axios";
import Signup from "./pages/Signup";
import Signin from "./pages/Sigin";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
// import 'react-toastify/dist/ReactToastify.css';
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

  const [profileCardPage, setProfileCardPage] = useState(false);
  const [createpost, setCreatePost] = useState(false);
  const [islogged, setIsLogged] = useState(false);
  
  
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
          
        }}
      >
        <Navbar />

        <Routes>
         
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profilepage />} />
              <Route path="/alluser" element={<Alluser />} />
              <Route path="/jobpage" element={<Jobdetails />} />
              <Route path="/listjob" element={<ListJob />} />
           

        
          
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Signin />} />
            
            
        
        </Routes>
      </CreateContext.Provider>
    </>
  );
}

export default App;

export { CreateContext };
