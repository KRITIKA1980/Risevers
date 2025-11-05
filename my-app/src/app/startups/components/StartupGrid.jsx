'use client';

import { useState } from 'react';
import StartupCard from './StartupCard';
import StartupModal from './StartupModal';
import { startups } from '../data/startups';

const StartupGrid = () => {
  const [filter, setFilter] = useState('all');
  const [selectedStartup, setSelectedStartup] = useState(null);

  const industries = ['all', ...new Set(startups.map(startup => startup.industry))];
  
  const filteredStartups = filter === 'all' 
    ? startups 
    : startups.filter(startup => startup.industry === filter);

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#34312C] mb-2">Browse Startups</h2>
            <p className="text-gray-600">Discover innovative companies across industries</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium text-sm">Filter by industry:</span>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setFilter(industry)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                filter === industry
                  ? 'bg-[#FD8F02] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {industry === 'all' ? 'All' : industry}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-[#34312C] font-medium">
          Showing {filteredStartups.length} startup{filteredStartups.length !== 1 ? 's' : ''}
          {filter !== 'all' && ` in ${filter}`}
        </p>
      </div>

      {/* Startups Grid */}
      {filteredStartups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map(startup => (
            <StartupCard 
              key={startup.id} 
              startup={startup} 
              onViewDetails={(s) => setSelectedStartup(s)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No startups found</h3>
          <p className="text-gray-500 text-sm">Try selecting a different industry filter</p>
        </div>
      )}

      {/* Modal for selected startup */}
      {selectedStartup && (
        <StartupModal startup={selectedStartup} onClose={() => setSelectedStartup(null)} />
      )}
    </div>
  );
};

export default StartupGrid;