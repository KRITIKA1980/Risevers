"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const circleData = [
    {
      id: 1,
      size: "w-28 h-28",
      position: "top-8 left-0",
      label: "Founders",
      image: "/images/founders.jpg",
      delay: 0,
      floating: {
        y: [0, -12, 8, -4, 0],
        x: [0, 6, -8, 4, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0 }
      }
    },
    {
      id: 2,
      size: "w-32 h-32",
      position: "bottom-0 right-12",
      label: "Investors",
      image: "/images/investors.jpg",
      delay: 0.5,
      floating: {
        y: [0, -8, 12, -6, 0],
        x: [0, -6, 8, -4, 0],
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
      }
    },
    {
      id: 3,
      size: "w-24 h-24",
      position: "-left-12 top-1/2 ",
      label: "Students",
      image: "/images/students.jpg",
      delay: 0.2,
      floating: {
        y: [0, -10, 6, -8, 0],
        x: [0, 8, -6, 10, 0],
        transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
      }
    },
    {
      id: 4,
      size: "w-28 h-28",
      position: "-right-12 top-1/3 -translate-y-1/2",
      label: "Mentors",
      image: "/images/mentors.jpg",
      delay: 0.7,
      floating: {
        y: [0, -6, 10, -5, 0],
        x: [0, -8, 5, -10, 0],
        transition: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
      }
    },
    {
      id: 5,
      size: "w-20 h-20",
      position: "top-0 right-24",
      label: "Advisors",
      image: "/images/advisors.jpg",
      delay: 0.3,
      floating: {
        y: [0, -8, 5, -7, 0],
        x: [0, 7, -5, 8, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
      }
    },
    {
      id: 6,
      size: "w-24 h-24",
      position: "bottom-0 left-20",
      label: "Incubators",
      image: "/images/incubators.jpg",
      delay: 0.6,
      floating: {
        y: [0, -7, 9, -6, 0],
        x: [0, -7, 6, -9, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
      }
    }
  ];

  return (
    <section className="py-16 bg-white text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#34312C] mb-4">
            About RiseVerse
          </h2>
          <div className="w-20 h-1 bg-[#FD8F02] mx-auto mb-4"></div>
          <p className="text-xl text-[#34312C] max-w-3xl mx-auto">
            Empowering India's Startup Ecosystem — One Idea at a Time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <p className="text-lg text-[#34312C] leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-[#FD8F02]">RiseVerse</span>, a
              platform built to ignite innovation, collaboration, and growth in
              India's startup ecosystem. Whether you're a budding entrepreneur,
              a mentor, or an investor, RiseVerse helps you connect, learn, and
              scale your vision.
            </p>

            <p className="text-lg text-[#34312C] leading-relaxed">
              Our mission is to simplify the journey from idea to impact by
              providing access to mentorship, funding opportunities, and a
              thriving startup community. At RiseVerse, we believe in turning
              ambitions into action.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Startup Mentorship",
                "Networking Events",
                "Funding Access",
                "Startup Resources",
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#FD8F02] rounded-full"></div>
                  <span className="text-[#34312C] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Side with Non-Overlapping Circles */}
          <div className="relative flex  ml-20 justify-center items-center h-[450px]">
            {/* Center Circle */}
            <motion.div
              className="absolute z-20 flex justify-center items-center w-32 h-32 rounded-full bg-gradient-to-br from-[#FD8F02] to-[#ff9a2e] text-[#34312C] font-bold text-lg shadow-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                boxShadow: "0 20px 40px rgba(253, 143, 2, 0.3), 0 0 0 8px rgba(253, 143, 2, 0.1)"
              }}
            >
              <div className="text-center">
                <div className="text-base font-bold">Who We</div>
                <div className="text-base font-bold">Empower</div>
              </div>
            </motion.div>

            {/* Floating Circles with Optimized Positioning */}
            {circleData.map((circle) => (
              <motion.div
                key={circle.id}
                className={`absolute ${circle.position} ${circle.size} z-10`}
                animate={circle.floating}
              >
                <div className="relative group">
                  {/* Circle with Image */}
                  <div className={`${circle.size} rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:border-[#FD8F02]`}>
                    {/* Image Placeholder - Replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-[#FD8F02] to-[#ff9a2e] flex items-center justify-center text-[#34312C] font-semibold text-xs text-center p-2">
                      {circle.label}
                    </div>
                    {/* Actual image would be:
                    <img 
                      src={circle.image} 
                      alt={circle.label}
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>

                  {/* Rectangle Label at Bottom */}
                  <motion.div 
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-[#34312C] px-3 py-2 rounded-lg shadow-lg min-w-max border border-gray-200"
                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: circle.delay + 0.3, duration: 0.5 }}
                  >
                    <div className="text-xs font-bold whitespace-nowrap">
                      {circle.label}
                    </div>
                    {/* Triangle pointer */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Background Orbit Lines */}
            <div className="absolute inset-0 rounded-full border-2 border-[#FD8F02] opacity-10"></div>
            {/* Background Orbit Lines - Glowing and Animated */}
            <motion.div
              className="absolute inset-0 rounded-full border-[3px] border-[#FD8F02]/30 shadow-[0_0_20px_rgba(253,143,2,0.4)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />

            {/* <motion.div
              className="absolute inset-4 rounded-full border-[2px] border-dashed border-[#FD8F02]/50 shadow-[0_0_15px_rgba(253,143,2,0.3)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute inset-8 rounded-full border-[1.5px] border-[#FD8F02]/40 blur-[1px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            /> */}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#FD8F02] text-[#34312C] rounded-lg font-semibold hover:bg-[#e07e00] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Join RiseVerse
            </button>
            <button className="px-8 py-3 border-2 border-[#FD8F02] text-[#FD8F02] rounded-lg font-semibold hover:bg-[#FD8F02] hover:text-[#34312C] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Meet Mentors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;