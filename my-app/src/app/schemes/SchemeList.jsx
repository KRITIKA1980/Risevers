"use client";

import SchemeCard from "./SchemeCard";

const SchemeList = ({ schemes }) => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#34312C] mb-4">
          Government Startup Schemes 🚀
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore various government initiatives designed to support{" "}
          <span className="text-[#FD8F02] font-semibold">startups, innovators,</span> 
          and entrepreneurs in building their dreams.
        </p>
        <div className="mt-3 h-1 w-32 bg-[#FD8F02] mx-auto rounded-full"></div>
      </div>

      {/* Schemes Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchemeList;
