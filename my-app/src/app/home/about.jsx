import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1c2e57] mb-4">
            About SchemeTeches
          </h2>
          <div className="w-20 h-1 bg-[#1c2e57] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Every Indian with Comprehensive Knowledge of Government Schemes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-[#1c2e57]">SchemeTeches</span>, 
              your trusted platform dedicated to simplifying government schemes for every section of society. 
              We believe that awareness is the first step toward empowerment.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to bridge the information gap by providing clear, step-by-step guidance 
              on various government initiatives, ensuring that benefits reach those who need them the most.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#1c2e57] rounded-full"></div>
                <span className="text-gray-700 font-medium">Step-by-Step Guides</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#1c2e57] rounded-full"></div>
                <span className="text-gray-700 font-medium">Expert Mentor Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#1c2e57] rounded-full"></div>
                <span className="text-gray-700 font-medium">Detailed Video Tutorials</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#1c2e57] rounded-full"></div>
                <span className="text-gray-700 font-medium">Multi-Language Support</span>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-gradient-to-br from-[#1c2e57] to-[#2d4a8a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Who We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Students & Children</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Women & Youth</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Senior Citizens</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Farmers & Agriculturists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Entrepreneurs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Small Business Owners</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#1c2e57] text-white rounded-lg font-semibold hover:bg-[#2d4a8a] transition duration-300">
              Explore Schemes
            </button>
            <button className="px-8 py-3 border-2 border-[#1c2e57] text-[#1c2e57] rounded-lg font-semibold hover:bg-[#1c2e57] hover:text-white transition duration-300">
              Meet Our Mentors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;