'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FaArrowLeft, FaArrowRight, FaCalendarAlt, FaUser
} from 'react-icons/fa';

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      id: 1,
      title: "New Digital Governance Initiative Launched",
      excerpt: "Government introduces innovative digital solutions to streamline citizen services.",
      content: "The new digital governance framework aims to revolutionize how citizens interact with government services, reducing processing times by 70% and increasing accessibility for rural communities.",
      date: "Dec 15, 2024",
      author: "Ministry of Electronics & IT",
      category: "Government",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Citizen Setu Reaches 1 Million Users",
      excerpt: "Platform achieves milestone in user adoption, demonstrating growing trust.",
      content: "With over 1 million active users, Citizen Setu has become the preferred platform for accessing government services, showing 95% user satisfaction rates.",
      date: "Dec 10, 2024",
      author: "Digital India",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "New Security Features Added to Platform",
      excerpt: "Enhanced security protocols implemented to protect user data.",
      content: "Latest security update includes end-to-end encryption, two-factor authentication, and advanced threat detection systems.",
      date: "Dec 5, 2024",
      author: "Cyber Security Team",
      category: "Security",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Mobile App Update with New Features",
      excerpt: "Latest app version includes offline access and regional language support.",
      content: "Users can now access essential services offline and use the app in 12 regional languages for better accessibility.",
      date: "Nov 28, 2024",
      author: "Development Team",
      category: "Update",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      readTime: "3 min read"
    }
  ];

  // Auto slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const getVisibleSlides = () => {
    const prevIndex = (currentSlide - 1 + newsItems.length) % newsItems.length;
    const nextIndex = (currentSlide + 1) % newsItems.length;

    return [
      { news: newsItems[prevIndex], position: 'prev', rotation: -8 },
      { news: newsItems[currentSlide], position: 'current', rotation: 0 },
      { news: newsItems[nextIndex], position: 'next', rotation: 8 }
    ];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Overlapping Slides */}
          <div className="relative h-64 w-full lg:h-[22rem] lg:w-[28rem] mx-auto lg:pr-6">
            {visibleSlides.map((slide) => (
              <div
                key={slide.news.id}
                className={`absolute inset-0 transition-all duration-500 ease-out transform ${slide.position === 'current'
                  ? 'z-30 scale-100 translate-x-0'
                  : slide.position === 'prev'
                    ? 'z-20 scale-90 -translate-x-20 -rotate-8'
                    : 'z-20 scale-90 translate-x-20 rotate-8'
                  }`}
                style={{
                  transform: `rotate(${slide.rotation}deg) scale(${slide.position === 'current' ? 1 : 0.9}) translateX(${slide.position === 'prev' ? '-80px' : slide.position === 'next' ? '80px' : '0'})`,
                  transition: 'all 0.5s ease-out'
                }}
              >
                <div className={`bg-white rounded-xl shadow-lg h-full overflow-hidden border-2 relative cursor-pointer ${slide.position === 'current' ? 'border-gray-300' : 'border-gray-200'}`}>
                  <img src={slide.news.image} alt={slide.news.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent flex flex-col justify-end p-4">
                    <span
                      className="inline-block text-white px-3 py-1 rounded-full text-xs font-medium mb-3 self-start border border-white/30"
                      style={{ backgroundColor: '#1c2e57' }}
                    >
                      {slide.news.category}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">{slide.news.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">{slide.news.excerpt}</p>
                    <div className="flex items-center justify-between text-gray-300 text-xs">
                      <span className="flex items-center"><FaCalendarAlt className="mr-1" />{slide.news.date}</span>
                      <span>{slide.news.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
              <button onClick={prevSlide} className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200" style={{ color: '#1c2e57' }}>
                <FaArrowLeft />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200" style={{ color: '#1c2e57' }}>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="lg:pl-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <span className="inline-block text-white px-3 py-1 rounded-full text-xs font-medium mb-4 border" style={{ backgroundColor: '#1c2e57', borderColor: '#1c2e57' }}>
                {newsItems[currentSlide].category}
              </span>
              <h3 className="text-2xl font-bold mb-4 leading-tight" style={{ color: '#1c2e57' }}>
                {newsItems[currentSlide].title}
              </h3>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                <span className="flex items-center"><FaCalendarAlt className="mr-2" />{newsItems[currentSlide].date}</span>
                <span className="flex items-center"><FaUser className="mr-2" />{newsItems[currentSlide].author}</span>
                <span>{newsItems[currentSlide].readTime}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{newsItems[currentSlide].content}</p>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}