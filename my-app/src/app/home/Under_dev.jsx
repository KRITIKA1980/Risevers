"use client";


export default function UnderDevelopment() {
  return (
  
    <div className="min-h-screen bg-gradient-to-br from-[#1c2e57] via-[#16325c] to-[#0f1f3a] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Clean Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20">
            <div className="text-4xl">⚙️</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-4">
            Under Development
          </h1>
          
          <p className="text-white/80 text-lg mb-6 leading-relaxed">
            We are currently working on enhancing our platform. Our services will be available shortly.
          </p>

          {/* Apology Message */}
          <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
            <p className="text-white font-medium">
              Sorry for the inconvenience. We appreciate your patience.
            </p>
          </div>

          {/* Services Coming Soon */}
          <div className="space-y-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl">👨‍🏫</div>
                <div>
                  <h3 className="text-white font-semibold">Mentorship Program</h3>
                  <p className="text-white/60 text-sm">Professional guidance and support</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="text-white font-semibold">Scheme Assistance</h3>
                  <p className="text-white/60 text-sm">Government program guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Stay Informed</h3>
            <p className="text-white/70 text-sm mb-3">We will notify you when we launch</p>
            
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm"
              />
              <button className="bg-white text-[#1c2e57] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                Get Notified
              </button>
            </div>
          </div>

          
        </div>

        {/* Footer */}
        <div className="mt-6 text-white/40 text-xs">
          <p>© 2025 CitizenSetu. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}