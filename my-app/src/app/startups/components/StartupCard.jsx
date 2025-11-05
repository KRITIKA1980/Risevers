"use client";
import Image from 'next/image';

const StartupCard = ({ startup, onViewDetails }) => {
  return (
    <div className="block group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FD8F02]/20 cursor-pointer h-full flex flex-col overflow-hidden">
        
        {/* Company Logo & Header */}
        <div className="relative h-40 bg-[#34312C] overflow-hidden">
          {startup.coverImage && (
            <Image
              src={startup.coverImage}
              alt={`${startup.name} cover image`}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {/* Logo */}
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
              {startup.logo ? (
                <Image
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-xs font-bold text-[#34312C]">
                  {startup.name.split(' ').map(word => word[0]).join('')}
                </div>
              )}
            </div>
          </div>

          {/* Industry Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-[#FD8F02] text-white px-2 py-1 rounded-full text-xs font-semibold">
              {startup.industry}
            </span>
          </div>

          {/* Company Name */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-1">{startup.name}</h3>
            <p className="text-[#FD8F02] font-medium text-sm">{startup.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 grow flex flex-col">
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
            {startup.description}
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-2 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Founded</div>
              <div className="font-semibold text-[#34312C] text-sm">{startup.founded}</div>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Funding</div>
              <div className="font-semibold text-[#FD8F02] text-sm">{startup.fundingAmount}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {startup.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-[#34312C] px-2 py-1 rounded-full text-xs font-medium border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-500 text-xs mt-auto">
            <span>📍 {startup.location}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-[#34312C] border-t border-gray-200">
          <button
            onClick={(e) => { e.stopPropagation(); onViewDetails?.(startup); }}
            className="w-full flex justify-between items-center text-white font-medium text-sm focus:outline-none hover:text-[#FD8F02] transition-colors duration-200"
            aria-label={`View details for ${startup.name}`}
          >
            View Details
            <span className="text-white group-hover:text-[#FD8F02] transform group-hover:translate-x-1 transition-all duration-200">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;