import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cardpage from "../pages/Cardpage";
import { useContext } from "react";
import { CreateContext } from "../App";
import axios from "axios";
import JobDetails from "./Jobdetails";

const JobList = () => {
  const { profileCardPage, setProfileCardPage } = useContext(CreateContext);
  const [job, setJob] = useState([]);
  const [listjob, setListJob] = useState(false);
  const [id, setId] = useState(null);
  const [filter, setFilterJob] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const datajob = async () => {
      const response = await axios.get("http://localhost:5000/getjob");
      console.log("job data", response.data);
      setJob(response.data.data);
      //  console.log("response data is",response.data)
    };
    datajob();
  }, []);

  const handleClick = (jobId) => {
    const filteredJob = job.filter((job) => job._id === jobId);
    setFilterJob(filteredJob);
    setId(jobId);
    setListJob(true);
  };

  const handlejobapplied = (jobId) => {
    setAppliedJobs([...appliedJobs, jobId]);
  };
  return (
    <>
      <div className="job-list-container  max-w-6xl mx-auto p-6 absolute">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Available Jobs
        </h1>
        <div className="grid relative grid-cols-1 sm:grid-cols-3 sm:gap-2 p-3">
          <div>
            {job.map((job) => (
              <div
                key={job.id}
                className="job-card bg-white shadow-lg rounded-lg p-6 mb-6"
              >
                <h2 className="text-xl font-bold text-blue-800">{job.title}</h2>
                <p className="text-gray-600 mt-2">{job.company}</p>
                <p className="text-gray-500 mt-1">{job.location}</p>
                <p className="text-gray-600 mt-4">{job.description}</p>
                {/* <button
                onClick={() => handleClick(job._id)}
                className="bg-blue-600 text-white   px-4 rounded-lg hover:bg-blue-500 "
              >
                View Details
              </button> */}
                <button
                  onClick={() => handleClick(job._id)}
                  className={`${
                    appliedJobs.includes(job._id)
                      ? "bg-green-700 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500"
                  } text-white px-4 rounded-lg mt-2`}
                disabled={appliedJobs.includes(job._id)}
                >
                  {appliedJobs.includes(job._id) ? "Applied" : "View Details"}
                </button>
              </div>
            ))}
          </div>
          <div className="col-span-2">
            {listjob && (
              <>
                <JobDetails
                  setListJob={setListJob}
                  filter={filter}
                  handlejobapplied={handlejobapplied}
                  setAppliedJobs={setAppliedJobs}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {profileCardPage && <Cardpage className="" />}
    </>
  );
};

export default JobList;
