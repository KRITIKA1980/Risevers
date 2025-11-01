// src/app/elder-citizens/SchemeCard.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

const SchemeCard = ({ scheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    
    return url;
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (url) => {
    if (!url) return '/images/default-thumb.jpg';
    
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    
    return '/images/default-thumb.jpg';
  };

  // Get the best available thumbnail
  const getThumbnail = () => {
    if (scheme.thumbnail && !imageError) {
      return scheme.thumbnail;
    }
    return getYouTubeThumbnail(scheme.videoUrl);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-sm mx-4 my-4">
        {/* Video Thumbnail */}
        <div 
          className="relative w-full h-48 bg-[#4b3f72] cursor-pointer overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={getThumbnail()} 
            alt={scheme.name}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            onError={handleImageError}
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#4b3f72] bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-all duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            Watch Video
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-[#4b3f72] text-xl font-semibold mb-2 leading-tight">
            {scheme.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {scheme.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {scheme.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-purple-50 text-[#4b3f72] px-2 py-1 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* View Details Button */}
          <Link 
            href={scheme.link}
            className="inline-block bg-[#4b3f72] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#352b56] transition-colors duration-300 text-center w-full"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* YouTube Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={getYouTubeEmbedUrl(scheme.videoUrl)}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={scheme.name}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SchemeCard;
