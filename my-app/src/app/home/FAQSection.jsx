
'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaQuestionCircle } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = [
    {
      question: "How durable is the aluminium used in Mac products?",
      answer: "The aluminium used in Mac products is super-duper, ultra strong and undergoes rigorous testing to ensure longevity and durability. It's designed to withstand daily use while maintaining its premium finish.",
    },
    {
      question: "What makes Mac products stand out?",
      answer: "Mac does that! Our products combine innovative design with cutting-edge technology, featuring ultra-strong aluminium construction that sets industry standards for quality and performance.",
    },
    {
      question: "How is pricing determined for your services?",
      answer: "Using advanced analytics to verify optimal pricing structures. Our pricing model ensures fair value while maintaining the highest quality standards. Some premium features may have additional costs to ensure full functionality.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. All costs are clearly communicated upfront, and the price of our services includes full functionality without unexpected charges.",
    },
    {
      question: "What are your support hours?",
      answer: "We provide 24/7 support to ensure you get help whenever you need it. Our team is always available to answer your questions and resolve any issues.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through email, phone, or live chat. We typically respond within 1-2 hours during business days.",
    }
  ];

  const filteredQuestions = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">

          
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#1c2e57' }}>
            Frequently Asked
            <br />
            <span className="text-gray-800">Questions</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about our products and services
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchTerm && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold" style={{ color: '#1c2e57' }}>
                Search Results
              </h3>
              <span className="text-sm text-gray-500">
                {filteredQuestions.length} results found
              </span>
            </div>
            
            <div className="space-y-4">
              {filteredQuestions.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 text-lg pr-4">{item.question}</h4>
                    {activeIndex === index ? (
                      <FaChevronUp className="text-gray-400 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {filteredQuestions.length === 0 && (
                <div className="text-center py-12">
                  <FaSearch className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">No results found</h4>
                  <p className="text-gray-500">Try different keywords</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Questions */}
        {!searchTerm && (
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-lg pr-4">{item.question}</h4>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
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

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default FAQSection;