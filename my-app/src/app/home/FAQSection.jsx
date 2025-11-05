'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaRocket, FaUsers, FaGraduationCap, FaLightbulb, FaChartLine, FaMapMarkerAlt, FaHandshake } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqItems = [
    {
      question: "How does RiseVerse solve the 70% startup failure rate?",
      answer: "We address core failure reasons: lack of reliable data, poor market understanding, limited collaboration, and insufficient mentorship through location-based insights and structured guidance.",
      icon: FaRocket,
      category: "Problem Solving"
    },
    {
      question: "How does location analytics help Tier-2 city startups?",
      answer: "Our geospatial data shows startup density, growth stages, and funding patterns specific to each region, helping founders discover local opportunities metro-centric platforms miss.",
      icon: FaMapMarkerAlt,
      category: "Location Analytics"
    },
    {
      question: "What makes RiseVerse different from other platforms?",
      answer: "We specialize in connecting India's fragmented ecosystems, bridging Tier-2/3 cities with national networks through hyper-local insights and collaboration tools.",
      icon: FaUsers,
      category: "Platform"
    },
    {
      question: "How do you bridge the student-innovator collaboration gap?",
      answer: "Structured interaction zones where students find startup opportunities and startups discover fresh talent from local colleges, creating symbiotic ecosystems.",
      icon: FaHandshake,
      category: "Collaboration"
    },
    {
      question: "What location-based mentorship do you provide?",
      answer: "Founders connect with experts who understand regional market dynamics, providing guidance relevant to local ecosystems rather than generic metro-centric advice.",
      icon: FaGraduationCap,
      category: "Mentorship"
    },
    {
      question: "How do you support 46+ Indian startup cities?",
      answer: "City-specific discovery, local investor networks, regional mentorship, and location analytics help emerging hubs develop their identity while staying nationally connected.",
      icon: FaChartLine,
      category: "Ecosystem Growth"
    }
  ];

  const categories = ['All', ...new Set(faqItems.map(item => item.category))];

  const filteredQuestions = faqItems.filter(item =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-[#FD8F02] to-orange-500 p-3 rounded-full shadow-lg">
              <FaRocket className="text-white text-xl" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h1>
          
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Quick answers about RiseVerse and India's startup ecosystem
          </p>

        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent bg-white shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FD8F02] bg-white shadow-sm text-gray-700"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* FAQ Items - Compact Design */}
        <div className="space-y-3">
          {filteredQuestions.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-[#FD8F02] transition-all duration-200 shadow-sm hover:shadow-md">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-4 py-4 text-left flex items-start justify-between hover:bg-orange-50 transition-colors rounded-lg"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="bg-[#FD8F02] p-2 rounded-lg mt-0.5 flex-shrink-0">
                    <item.icon className="text-white text-xs" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight pr-2">{item.question}</h4>
                  </div>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#FD8F02] flex-shrink-0 ml-2 mt-1" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0 ml-2 mt-1" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="px-4 pb-4 border-t border-gray-100 mt-2">
                  <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
          
          {filteredQuestions.length === 0 && (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <FaSearch className="w-8 h-8 text-gray-300 mx-auto mb-3" />
              <h4 className="text-base font-semibold text-gray-600 mb-1">No results found</h4>
              <p className="text-gray-500 text-sm">Try different keywords or select another category</p>
            </div>
          )}
        </div>

        {/* Compact Help Section */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#FD8F02]/10 to-orange-100 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need more help?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Join India's fastest growing startup ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button className="px-4 py-2 bg-[#FD8F02] text-white rounded-lg font-medium hover:bg-[#e68102] transition-colors text-sm">
              Join Community
            </button>
            <button className="px-4 py-2 border border-[#FD8F02] text-[#FD8F02] rounded-lg font-medium hover:bg-[#FD8F02] hover:text-white transition-colors text-sm">
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;