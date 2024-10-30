"use client";

import React from "react";

export default function StatsBanner() {
  return (
    <div className="pt-14">
      {/* Main Gradient Banner */}
      <div
        style={{
          background: "linear-gradient(180deg, #3B4A9B 0%, #5868C4 100%)",
          padding: "4rem",
          color: "white",
        }}
      >
        <h2 className="text-center justify-center font-bold text-2xl md:text-3xl">
          INDIA&#39;S MOST LOVED CODING COMMUNITY &#9829;
        </h2>

        {/* Stats Section */}
        <div className="pt-10 text-xl md:text-2xl text-center flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0">
          <p>
            &#128101; 5,000,000+ 
            <span className="block text-sm md:text-lg">Happy Learners</span>
          </p>
          <p>
            &#10084; 2 Crore+
            <span className="block text-sm md:text-lg">Monthly Views</span>
          </p>
          <p>
            &#128279; 100,000+
            <span className="block text-sm md:text-lg">New Monthly Subscribers</span>
          </p>
        </div>
      </div>

      {/* New Batch Section */}
      <div className="pt-14">
        <h1 className="flex text-center justify-center font-bold text-blue-600 text-xl md:text-2xl">
          NEW NOV 1 2024 BATCH &#128293;
        </h1>
        <h1 className="flex text-center justify-center font-bold text-2xl md:text-3xl pt-4">
          Sigma 4.0: Development + DSA + Aptitude
        </h1>
        <h1 className="flex text-center justify-center text-lg md:text-xl pt-4">
          Start your placement preparation today!
        </h1>

        {/* Centered Button */}
        <div className="flex justify-center items-center pt-8 pb-14">
          <button className="bg-blue-600 w-44 h-12 md:h-14 text-white font-bold py-2 px-4 rounded">
            EXPLORE!
          </button>
        </div>
      </div>
    </div>
  );
}
