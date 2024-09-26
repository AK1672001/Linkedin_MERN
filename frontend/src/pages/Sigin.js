import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CreateContext } from "../App";
import Cookies from "js-cookie";
const Signin = ({ onSwitch }) => {
  const navigate = useNavigate("");
  const { islogged, setIsLogged } = useContext(CreateContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
        
      );
      console.log(response.data);
      // console.log("token>>",response.data.token)
      Cookies.set("token", response.data.token, { expires: 7, path: "/" });
      console.log("Token set in cookies:", response.data.token);
      
     
      setTimeout(() => {
        setSuccess(response.data.msg);
        setIsLogged(true);
        
        navigate("/");
      }, 1000);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        setError();
      }, 3000);
      if (err.response && err.response.data) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {error && (
          <>
            <div className="text-red-500 ">{error}</div>
          </>
        )}
        {success && (
          <>
            <div className="text-green-500 ">{success}</div>
          </>
        )}
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Sign in to LinkedIn
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">
            New to LinkedIn?{" "}
            <Link
              to="/signup"
              onClick={onSwitch}
              className="text-blue-600 hover:underline"
            >
              Join now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
