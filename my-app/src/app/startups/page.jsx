'use client';

import StartupGrid from './components/StartupGrid';
import StartupDashboard from './components/StartupDashboard';
import { startups } from './data/startups';

export default function StartupsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50/10 via-cyan-50/5 to-purple-50/5 backdrop-blur-[1px]">
      {/* Animated Water Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200/5 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Enhanced Glass Morphism Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#FD8F02] mr-4"></div>
            <span className="text-[#FD8F02] font-semibold text-sm uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg">
              Innovation Ecosystem
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#FD8F02] ml-4"></div>
          </div>
          
          {/* 3D Text Effect */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#34312C] mb-6 leading-tight drop-shadow-lg">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD8F02] to-amber-600">Groundbreaking</span><br />
            <span className="relative">
              Startups
              <div className="absolute inset-0 text-[#34312C] blur-sm opacity-30 -z-10">Startups</div>
            </span>
          </h1>
          
          {/* 3D Accent Line */}
          <div className="relative w-20 h-1 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FD8F02] to-amber-500 rounded-full shadow-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FD8F02] to-amber-500 rounded-full blur-sm opacity-50"></div>
          </div>
        </div>

        {/* Content with 3D Perspective */}
        <div className="space-y-12">
          <div className="transform transition-all duration-500 hover:scale-[1.01]"
               style={{ transformStyle: 'preserve-3d' }}>
            <StartupGrid />
          </div>
          
          <div className="transform transition-all duration-500 hover:scale-[1.01]"
               style={{ transformStyle: 'preserve-3d' }}>
            <StartupDashboard startups={startups} />
          </div>
        </div>

        {/* Enhanced Glass CTA Section */}
        <div className="text-center mt-20 pt-16 border-t border-white/30 relative">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FD8F02] to-transparent rounded-full"></div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-[#34312C] mb-4 bg-gradient-to-r from-[#34312C] to-[#FD8F02] bg-clip-text text-transparent">
              Ready to Make Waves?
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Join our exclusive network of industry-shaping innovators.
            </p>
            <button className="group relative bg-gradient-to-r from-[#FD8F02] to-amber-500 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Submit Your Startup</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(-5px) translateX(-5px);
          }
        }
      `}</style>
    </div>
  );
}