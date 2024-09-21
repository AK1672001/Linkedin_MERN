import React from 'react';

const JobDetails = () => {
  return (
    <div className="job-details-container max-w-4xl mx-auto p-6">
      {/* Job Title and Company Info */}
      <header className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Software Developer</h1>
        <p className="text-gray-600 mt-2">XYZ Company</p>
        <p className="text-gray-500 mt-1">Location: Remote</p>
      </header>

      {/* Job Description */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
        <p className="text-gray-600 mt-4">
          We are looking for a skilled software developer who will be responsible for designing, building, and maintaining high-quality applications. You will be part of a dynamic team focused on delivering innovative solutions.
        </p>
      </section>

      
      {/* skill required */}
       
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <ul className="list-disc ml-5 mt-4 text-gray-600">
          <li>Design, develop, and maintain software applications.</li>
          <li>Collaborate with cross-functional teams to define and implement new features.</li>
          <li>Ensure high-quality and performance of software applications.</li>
          <li>Debug and resolve technical issues.</li>
        </ul>
      </section>
     
{/* Job Responsibilities */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Responsibilities</h2>
        <ul className="list-disc ml-5 mt-4 text-gray-600">
          <li>Design, develop, and maintain software applications.</li>
          <li>Collaborate with cross-functional teams to define and implement new features.</li>
          <li>Ensure high-quality and performance of software applications.</li>
          <li>Debug and resolve technical issues.</li>
        </ul>
      </section>

      {/* Qualifications */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Qualifications</h2>
        <ul className="list-disc ml-5 mt-4 text-gray-600">
          <li>Bachelor’s degree in Computer Science or related field.</li>
          <li>Proficient in JavaScript, React, Node.js, and other web technologies.</li>
          <li>Strong problem-solving skills.</li>
          <li>Excellent communication and teamwork abilities.</li>
        </ul>
      </section>

      {/* Apply Button */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
