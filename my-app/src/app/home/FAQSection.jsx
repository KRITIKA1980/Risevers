'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaRocket, FaUsers, FaGraduationCap, FaLightbulb, FaChartLine } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = [
    {
      question: "What is RiseVerse and how does it help startups?",
      answer: "RiseVerse is an all-in-one platform that supports startups from idea stage to successful brand. We connect founders, mentors, investors, and tech enthusiasts through location-based discovery, learning resources, mentorship, and AI-powered analysis to help you learn, collaborate, and grow together.",
      icon: FaRocket,
      category: "Platform"
    },
    {
      question: "How does the location-based startup discovery work?",
      answer: "Our platform shows you startups in your specific area, allowing you to see which ones are growing, hiring, or seeking partners. This helps you connect with local ecosystem players, find nearby opportunities, and understand regional startup trends through our RiseVerse Index reports.",
      icon: FaUsers,
      category: "Discovery"
    },
    {
      question: "What learning resources and government schemes do you cover?",
      answer: "We provide comprehensive guidance on Startup India registration, MSME certification, DPIIT recognition, and other government schemes. Our step-by-step modules help you navigate legal requirements, understand compliance, and access benefits available for startups in India.",
      icon: FaGraduationCap,
      category: "Learning"
    },
    {
      question: "How does the mentorship program work?",
      answer: "Connect with verified, experienced mentors who review your startup idea through our platform. After AI analysis, you can book paid sessions for personalized guidance. Mentors provide actionable feedback on your business model, growth strategy, and help you avoid common pitfalls.",
      icon: FaUsers,
      category: "Mentorship"
    },
    {
      question: "What opportunities are available for tech professionals and students?",
      answer: "Developers, designers, and students can discover startup job opportunities, co-founder roles, and internship positions based on their skills and location. Our matching algorithm connects tech talent with startups that need their specific expertise.",
      icon: FaChartLine,
      category: "Opportunities"
    },
    {
      question: "How does the AI-powered idea analyzer work?",
      answer: "Our AI analyzes your startup idea and provides instant feedback with a 'Startup Readiness Score'. This evaluates market potential, scalability, and implementation feasibility. Based on the score, we connect you with relevant mentors for deeper expert advice.",
      icon: FaLightbulb,
      category: "AI Features"
    },
    {
      question: "What is the RiseVerse Index and how can it help me?",
      answer: "The RiseVerse Index provides monthly data-driven reports on local startup ecosystems. It shows growth trends, investment patterns, and success metrics for startups in your region, helping you make informed decisions and spot emerging opportunities.",
      icon: FaChartLine,
      category: "Insights"
    },
    {
      question: "What is your revenue model and pricing structure?",
      answer: "We offer paid mentorship sessions, premium job listings for startups, subscription plans for investors/incubators, and sponsored learning modules. All pricing is transparent with no hidden fees - you only pay for the specific services you need.",
      icon: FaChartLine,
      category: "Pricing"
    },
    {
      question: "How do I register my startup on RiseVerse?",
      answer: "Simply create an account, complete your profile, and use our guided registration process. We'll help you through DPIIT recognition, legal formalities, and connecting with relevant stakeholders in your startup journey.",
      icon: FaRocket,
      category: "Onboarding"
    },
    {
      question: "Do you only serve Indian startups or is it global?",
      answer: "While we deeply align with Startup India and Digital India missions, our platform is designed to support startups globally. However, our strongest features and ecosystem connections are currently focused on the Indian startup landscape.",
      icon: FaUsers,
      category: "Platform"
    }
  ];

  const filteredQuestions = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [...new Set(faqItems.map(item => item.category))];

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-[#FD8F02] p-3 rounded-full">
              <FaRocket className="text-white text-2xl" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#34312C]">
            RiseVerse
            <br />
            <span className="text-[#FD8F02]">FAQ Center</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Everything you need to know about building and growing your startup with RiseVerse
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions, categories, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent bg-white shadow-sm"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(category)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-[#FD8F02] hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {searchTerm && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#34312C]">
                Search Results
              </h3>
              <span className="text-sm text-gray-500">
                {filteredQuestions.length} results found for "{searchTerm}"
              </span>
            </div>
            
            <div className="space-y-4">
              {filteredQuestions.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-[#FD8F02] transition-colors">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FD8F02] p-2 rounded-lg mt-1">
                        <item.icon className="text-white text-sm" />
                      </div>
                      <div className="text-left">
                        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium mb-2">
                          {item.category}
                        </span>
                        <h4 className="font-semibold text-[#34312C] text-lg pr-4">{item.question}</h4>
                      </div>
                    </div>
                    {activeIndex === index ? (
                      <FaChevronUp className="text-[#FD8F02] flex-shrink-0 ml-4" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {filteredQuestions.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <FaSearch className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">No results found</h4>
                  <p className="text-gray-500">Try different keywords or browse by categories above</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Questions */}
        {!searchTerm && (
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#FD8F02]">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FD8F02] p-2 rounded-lg mt-1">
                      <item.icon className="text-white text-sm" />
                    </div>
                    <div className="text-left">
                      <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium mb-2">
                        {item.category}
                      </span>
                      <h4 className="font-semibold text-[#34312C] text-lg pr-4">{item.question}</h4>
                    </div>
                  </div>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-[#FD8F02] flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

       
      </div>
    </section>
  );
};

export default FAQSection;