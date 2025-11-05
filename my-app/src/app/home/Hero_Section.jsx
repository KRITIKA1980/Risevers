'use client';

import { useState, useEffect } from 'react';
import {
  FaArrowLeft, FaArrowRight, FaCalendarAlt, FaUser, 
  FaChartLine, FaBriefcase, FaHandshake, FaMapMarkerAlt,
  FaUsers, FaRocket
} from 'react-icons/fa';

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      id: 1,
      title: "Tier-2 Cities Drive India's Startup Boom",
      excerpt: "46 Indian cities now feature in global startup rankings as ecosystem expands beyond metro hubs.",
      content: "Post-lockdown data reveals unprecedented growth in Tier-2 and Tier-3 cities, with startup activity spreading beyond traditional hubs like Bengaluru and Mumbai. Cities like Jaipur, Ahmedabad, and Kochi are emerging as new innovation centers, creating opportunities for localized startup ecosystems.",
      date: "Dec 15, 2024",
      author: "RiseVerse Insights",
      category: "Ecosystem",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop&auto=format",
      readTime: "4 min read",
      icon: FaMapMarkerAlt
    },
    {
      id: 2,
      title: "India Set to Cross 1.5L Startups by 2025",
      excerpt: "40% growth recorded in 2024 as professionals turn entrepreneurs amid global layoffs.",
      content: "India's startup ecosystem is witnessing explosive growth, with projections showing 1.5 lakh+ startups by 2025. The trend is fueled by global layoffs driving professionals toward entrepreneurship and increased digital adoption across Tier-2 and Tier-3 cities.",
      date: "Dec 10, 2024",
      author: "Growth Analytics",
      category: "Growth",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format",
      readTime: "3 min read",
      icon: FaRocket
    },
    {
      id: 3,
      title: "Collaboration Gap Hinders Early-Stage Startups",
      excerpt: "70% of Indian startups fail within 5 years due to fragmented ecosystems and mentorship gaps.",
      content: "New research highlights the critical challenges facing Indian startups: limited collaboration between students, mentors, and innovators, coupled with insufficient structured guidance. The lack of location-based support systems is particularly affecting startups in emerging cities.",
      date: "Dec 5, 2024",
      author: "Startup Research",
      category: "Challenges",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
      readTime: "5 min read",
      icon: FaUsers
    },
    {
      id: 4,
      title: "Geospatial Data Transforms Startup Discovery",
      excerpt: "Location-based analytics helping founders connect with local teammates and investors.",
      content: "Advanced mapping and clustering technologies are revolutionizing how startups discover opportunities. Heatmaps showing startup density, growth stages, and funding patterns are enabling smarter decisions for founders looking to build locally while thinking globally.",
      date: "Nov 28, 2024",
      author: "Tech Innovation",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop&auto=format",
      readTime: "3 min read",
      icon: FaChartLine
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
      { news: newsItems[prevIndex], position: 'prev' },
      { news: newsItems[currentSlide], position: 'current' },
      { news: newsItems[nextIndex], position: 'next' }
    ];
  };

  const visibleSlides = getVisibleSlides();
  const CurrentIcon = newsItems[currentSlide].icon;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side - Carousel */}
          <div className="relative h-80 w-full lg:h-96 lg:w-[30rem] mx-auto">
            {visibleSlides.map((slide) => (
              <div
                key={slide.news.id}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  slide.position === 'current'
                    ? 'z-30 scale-100 opacity-100'
                    : slide.position === 'prev'
                    ? 'z-20 scale-90 opacity-60 -translate-x-16'
                    : 'z-20 scale-90 opacity-60 translate-x-16'
                }`}
              >
                <div className={`bg-white rounded-xl shadow-lg h-full overflow-hidden border-2 ${
                  slide.position === 'current' ? 'border-[#FD8F02]' : 'border-gray-200'
                }`}>
                  <img 
                    src={slide.news.image} 
                    alt={slide.news.title} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-2 text-[#FD8F02] text-sm font-medium">
                        <slide.news.icon />
                        {slide.news.category}
                      </span>
                      <span className="text-gray-500 text-sm">{slide.news.readTime}</span>
                    </div>
                    <h3 className="font-bold text-[#34312C] text-lg mb-2 leading-tight">
                      {slide.news.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {slide.news.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
              <button 
                onClick={prevSlide} 
                className="w-10 h-10 bg-[#FD8F02] text-white rounded-full shadow-md flex items-center justify-center hover:bg-[#e68102] transition-colors"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextSlide} 
                className="w-10 h-10 bg-[#FD8F02] text-white rounded-full shadow-md flex items-center justify-center hover:bg-[#e68102] transition-colors"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Side - Current Article Details */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FD8F02] rounded-lg">
                  <CurrentIcon className="text-white text-lg" />
                </div>
                <span className="text-[#FD8F02] font-medium">
                  {newsItems[currentSlide].category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#34312C] mb-4 leading-tight">
                {newsItems[currentSlide].title}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {newsItems[currentSlide].date}
                </span>
                <span className="flex items-center gap-2">
                  <FaUser />
                  {newsItems[currentSlide].author}
                </span>
                <span>{newsItems[currentSlide].readTime}</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {newsItems[currentSlide].content}
              </p>

              <button className="bg-[#FD8F02] text-white px-6 py-2 rounded-lg hover:bg-[#e68102] transition-colors font-medium">
                Read Full Article
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#FD8F02] w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}