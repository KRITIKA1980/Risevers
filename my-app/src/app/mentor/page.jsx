"use client";

import ChatbotWidget from "./components/ChatbotWidget";
import VideoMeetBox from "./components/VideoMeetBox";
import { FaWhatsapp } from "react-icons/fa";

export default function MentorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#34312C] relative overflow-hidden">
      {/* 🧩 Main Content */}
  <main className="flex flex-1 flex-col lg:flex-row justify-center items-start px-4 py-3 gap-5 lg:gap-6">
        {/* 🧠 Chatbot Panel */}
        <section className="w-full lg:w-1/2 bg-gray-100 rounded-2xl shadow-md p-5 flex flex-col">
          <h2 className="text-xl font-semibold text-[#34312C] mb-3 border-b-2 border-[#FD8F02] pb-1">
            Startup Guide 🤖
          </h2>
          <div className="mt-2 w-full">
            <ChatbotWidget />
          </div>
        </section>

        {/* 🎥 Video Meet */}
        <section className="w-full lg:w-1/2 bg-gray-100 rounded-2xl shadow-md p-5 flex flex-col">
          <h2 className="text-xl font-semibold text-[#34312C] mb-3 border-b-2 border-[#FD8F02] pb-1">
            Live Meet 🎥
          </h2>
          <div className="mt-2 w-full">
            <VideoMeetBox />
          </div>
        </section>
      </main>

      {/* 💬 Floating WhatsApp Button */}
      <a
        href="https://wa.me/7643922644"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#FD8F02] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
