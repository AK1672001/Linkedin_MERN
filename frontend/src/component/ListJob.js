import React from 'react';
import { Link } from 'react-router-dom';
import Cardpage from '../pages/Cardpage';
import { useContext } from 'react';
import { CreateContext } from "../App";

const JobList = () => {
    const {profileCardPage,setProfileCardPage}=useContext(CreateContext);
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "XYZ Company",
      location: "Remote",
      description: "We are looking for a skilled software developer...",
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "ABC Inc.",
      location: "San Francisco, CA",
      description: "Join our frontend team to build amazing UI...",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Tech Solutions",
      location: "New York, NY",
      description: "Full stack development with a focus on MERN stack...",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        company: "Tech Solutions",
        location: "New York, NY",
        description: "Full stack development with a focus on MERN stack...",
      },
    // Add more job objects here...
  ];

  return (
    <>
    <div className="job-list-container relative max-w-6xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Available Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="job-card bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600 mt-2">{job.company}</p>
            <p className="text-gray-500 mt-1">{job.location}</p>
            <p className="text-gray-600 mt-4">{job.description}</p>
            <Link to="/jobpage" className="bg-blue-600 text-white   px-4 rounded-lg hover:bg-blue-500 ">
              View Details
            </Link>
          </div>
        ))}
      </div>
      
    </div>
   
    {profileCardPage &&(
     <Cardpage className=""/>
      )}
 
   
    </>
  );
};

export default JobList;
