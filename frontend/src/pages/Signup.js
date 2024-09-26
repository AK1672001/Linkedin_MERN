import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    position:""
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   useEffect(() => {
  //     const data = async () => {
  //       const response = await axios.post(
  //         "http://localhost:5000/signup",
  //         formData
  //       );
  //       console.log(response.data);
  //       setTimeout(() => {
  //         setSuccess(response.data.msg);
  //         // navigate("/login")
  //       }, 1000);

  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 4000);
  //     };
  //     data();
  //   }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      console.log(response.data);

      setTimeout(() => {
        setSuccess(response.data.msg);
        // navigate("/login")
      }, 1000);
      setTimeout(() => {
        navigate("/login");
      }, 4000);

      console.log("Form submitted:", formData);
    } catch (err) {
      console.log(err);
      setTimeout(()=>{
        setError();
      },3000)
      if (err.response && err.response.data) {

        setError(err.response.data.msg);
      } else {
        setError("Something went wrong, please try again."); // Fallback error message
      }
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Join LinkedIn
        </h1>
        {error && (
            <>
              <div className="text-red-500 ">{error}</div>
            </>
          )}
        {success && (
          <>
            <div className="text-green-800 ">{success}</div>
          </>
        )}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="mt-4">
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
              placeholder="Create a password"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700"
            >
              position
            </label>
            <input
              type="position"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="software developer"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
