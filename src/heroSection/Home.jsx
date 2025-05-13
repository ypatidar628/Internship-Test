import React from 'react';
import { Link } from 'react-router-dom';
import Page1 from './Page1';

const Home = () => {
  return (
    <div className="p-4">
        
      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl text-center font-bold mt-12 sm:mt-16">
          Science Fiction Stories
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white">New</button>
        <button className="px-4 py-2 rounded-2xl bg-amber-400 text-white">In Progress</button>
        <button className="px-4 py-2 rounded-2xl bg-green-500 text-white">Completed</button>
        <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-[#875898] to-indigo-500 text-white">
          Clear All
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 px-4">
        <Link
          to="/page1"
          className="bg-gradient-to-r from-[#875898] to-indigo-500 px-4 py-2 rounded-xl text-white"
        >
          Previous
        </Link>
        <Link
          to="/page2"
          className="bg-gradient-to-r from-[#875898] to-indigo-500 px-4 py-2 rounded-xl text-white"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Home;
