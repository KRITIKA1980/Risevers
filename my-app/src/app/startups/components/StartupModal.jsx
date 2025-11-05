"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const StartupModal = ({ startup, onClose }) => {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      {/* modal panel */}
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh]">
        <div className="relative h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
          {startup.coverImage && (
            <Image
              src={startup.coverImage}
              alt={`${startup.name} cover image`}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-3xl font-bold text-white">{startup.name}</h3>
            <p className="text-lg text-[#FD8F02]">{startup.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-xl p-4 -mt-20 relative z-10 shadow-lg border border-gray-100">
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  {startup.logo ? (
                    <Image
                      src={startup.logo}
                      alt={`${startup.name} logo`}
                      width={128}
                      height={128}
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-gray-500">
                      {startup.name.split(' ').map(w => w[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mt-2">📍 {startup.location}</p>
                  <p className="text-sm text-gray-600">🏢 {startup.industry}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 pt-4">
              <p className="text-gray-700 leading-relaxed mb-4">{startup.fullDescription || startup.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {startup.tags?.map((tag, i) => (
                  <span key={i} className="bg-[#34312C] text-white px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Founded</div>
                  <div className="font-bold text-[#34312C]">{startup.founded}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Funding</div>
                  <div className="font-bold text-[#FD8F02]">{startup.fundingAmount}</div>
                </div>
              </div>

              <a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FD8F02] text-white px-6 py-3 rounded-lg font-semibold"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* founders */}
          <div>
            <h4 className="text-xl font-semibold text-[#34312C] mb-3">Leadership</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {startup.founders?.map((f, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#FD8F02] rounded-full flex items-center justify-center text-white font-bold">{f.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div>
                    <div className="font-semibold text-[#34312C]">{f.name}</div>
                    <div className="text-sm text-gray-600">{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupModal;
