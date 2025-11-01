"use client";

import ChatbotWidget from "./components/ChatbotWidget";
import VideoMeetBox from "./components/VideoMeetBox";
import { FaWhatsapp, FaLightbulb, FaUsers } from "react-icons/fa";

export default function MentorPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#34312C]">
      {/* 🎯 Clean Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Connect with Startup Mentors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert guidance on your startup idea, validation, and growth strategy. 
            Chat with AI or connect live with experienced mentors.
          </p>
        </div>
      </div>

      {/* 🧩 Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* AI Chatbot Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 p-2 rounded-lg">
                <FaLightbulb className="text-blue-600 text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  AI Startup Guide
                </h2>
                <p className="text-gray-500 text-sm">
                  Ask about your startup idea and get instant feedback
                </p>
              </div>
            </div>
            <ChatbotWidget />
          </div>

          {/* Video Meet Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-50 p-2 rounded-lg">
                <FaUsers className="text-green-600 text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Live Mentor Session
                </h2>
                <p className="text-gray-500 text-sm">
                  Connect directly with experienced startup mentors
                </p>
              </div>
            </div>
            <VideoMeetBox />
          </div>
        </div>

        {/* 📞 Contact Card */}
        <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need immediate help?
          </h3>
          <p className="text-gray-600 mb-4">
            Connect with mentors directly on WhatsApp for personalized guidance on your startup journey
          </p>
          <a
            href="https://wa.me/7643922644"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* 💬 Simple Floating WhatsApp */}
      <a
        href="https://wa.me/7643922644"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}