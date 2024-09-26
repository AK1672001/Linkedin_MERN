import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import { CreateContext } from "../App";
import { useContext } from "react";
const data={
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
}
const JobDetails = ({filter,setListJob,handlejobapplied}) => {
  console.log("job job page >>",filter)
 
  const { profileCardPage, setProfileCardPage } = useContext(CreateContext);
  const handleClick=()=>{
    toast.success('Applied successfully',data);
   
     setTimeout(()=>{
      handlejobapplied(filter[0]._id);
      setListJob(false)
      
     },3000)
  }
  const handlebutton=()=>{
    setListJob(false)
    setProfileCardPage(false)
  }
  return (
    <div className="job-details-container absolute z-50 top-2 sm:bg-slate-50  sm:shadow-lg  shadow-2xl  bg-blue-400 sm:top-0 max-w-4xl sm:ml-20 p-2 sm:p-6">
      {/* Job Title and Company Info */}
      <div>
      <RxCross2 onClick={()=>handlebutton()} className='text-black text-2xl items-center cursor-pointer absolute top-2 right-3 font-bold' />

      </div>
      <header className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{filter[0].title}</h1>
        <p className="text-gray-600 font-bold text-sm mt-2">company name {filter[0].company}</p>
        <p className="text-gray-500 font-bold text-sm mt-1">location {filter[0].location}</p>
      </header>

      {/* Job Description */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Job description</h2>
        <p className="text-gray-600 mt-4">
        {filter[0].description}
        </p>
      </section>

      
      {/* skill required */}
       
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <ul className="list-disc ml-5 mt-4 text-gray-600">
        {
          filter[0].Skill.map((item)=>(
            <li>{item}</li>
          ))
        }
        </ul>
      </section>
     
{/* Job Responsibilities */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Responsibilities</h2>
        <p className="list-disc ml-5 mt-4 text-gray-600">
        {filter[0].responsibility}
        </p>
      </section>

      {/* Qualifications */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Qualifications</h2>
        <p className="list-disc ml-5 mt-4 text-gray-600">
        {filter[0].qulification}
        </p>
      </section>

      {/* Apply Button */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <button onClick={handleClick} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500 transition">
          Apply Now
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;
