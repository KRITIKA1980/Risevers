"use client";

import SchemeCard from './SchemeCard';

const SchemeList = ({ schemes }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1c2e57] mb-4">
          Farmer Welfare Schemes
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover various government initiatives, subsidies, and financial support programs 
          designed to empower farmers and improve agricultural productivity.
        </p>
      </div>
      
      {/* Schemes Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchemeList;
