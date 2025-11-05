'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StartupRegisterPage() {
  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    teamSize: '',
    startupInfo: '',
    location: '',
    documents: null,
    stage: '',
    industry: '',
    website: '',
    pitch: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      const submitData = {
        ...formData,
        documents: uploadedFiles
      };
      console.log('Startup registration data:', submitData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Startup registration successful! Welcome to RiseVerse ecosystem!');
    } catch (error) {
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'E-commerce',
    'Artificial Intelligence',
    'Clean Energy',
    'Biotechnology',
    'Entertainment',
    'Real Estate',
    'Food & Beverage',
    'Other'
  ];

  const stages = [
    'Ideation',
    'MVP Development',
    'Early Traction',
    'Growth Stage',
    'Scaling',
    'Established'
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Inspirational Background & Information */}
<div className="hidden lg:flex lg:w-1/2 lg:relative lg:overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url("https://img.freepik.com/premium-photo/elevating-entrepreneurship-launch-your-startup-success_1036975-110247.jpg")'
    }}
  >
    {/* Professional Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#34312C]/95 via-[#34312C]/80 to-[#FD8F02]/70"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 w-full flex items-center justify-center p-12">
    <div className="max-w-2xl text-center text-white">
      {/* Logo/Brand */}
      <div className="mb-16">
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
          RiseVerse
        </h1>
        <p className="text-xl text-gray-200 font-light">Where Startups Scale to Success</p>
      </div>

      {/* Main Feature Card */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="w-24 h-24 bg-gradient-to-br from-[#FD8F02] to-[#34312C] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Launch with Confidence
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed font-light">
            Join 500+ startups that found funding, mentorship, and growth opportunities through our curated ecosystem.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 gap-5 mb-16">
        {[
          { icon: '💼', title: 'Investor Network', desc: 'Access 200+ active investors' },
          { icon: '🎯', title: 'Expert Mentors', desc: '1-on-1 guidance' },
          { icon: '🌐', title: 'Global Reach', desc: 'Connect worldwide' },
          { icon: '📊', title: 'Growth Analytics', desc: 'Data-driven insights' }
        ].map((benefit, index) => (
          <div key={index} className="group">
            <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-[#FD8F02]/30 transition-all duration-500 hover:transform hover:-translate-y-1">
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h4 className="font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">{benefit.title}</h4>
              <p className="text-gray-300 text-xs font-light">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats with Improved Design */}
      <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 backdrop-blur-md border border-white/10">
        <h4 className="text-gray-200 font-semibold mb-6 text-sm uppercase tracking-wider">Our Impact</h4>
        <div className="grid grid-cols-3 gap-6 text-center">
          {[
            { number: '500+', label: 'Startups', color: 'from-[#FD8F02] to-orange-300' },
            { number: '$50M+', label: 'Raised', color: 'from-green-400 to-emerald-300' },
            { number: '200+', label: 'Mentors', color: 'from-blue-400 to-cyan-300' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-xs font-light uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-300 text-sm font-light">
            Join the fastest-growing startup ecosystem trusted by founders worldwide
          </p>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-8 flex items-center justify-center space-x-4 text-gray-300">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs font-light">Verified Investors</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-xs font-light">Secure Platform</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Right Side - Registration Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full max-w-2xl">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span style={{ color: '#34312C' }}>Rise</span>
              <span style={{ color: '#FD8F02' }}>Verse</span>
            </h1>
            <p className="text-gray-600 text-lg">Launch Your Startup Journey</p>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3" style={{ color: '#34312C' }}>
                Register Your Startup
              </h2>
              <p className="text-gray-600 text-lg">
                Join the RiseVerse ecosystem and accelerate your growth
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Startup Name & Founder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                    Startup Name *
                  </label>
                  <input
                    type="text"
                    name="startupName"
                    value={formData.startupName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                    placeholder="Enter startup name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                    Founder Name *
                  </label>
                  <input
                    type="text"
                    name="founderName"
                    value={formData.founderName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                    placeholder="Enter founder's name"
                  />
                </div>
              </div>

              {/* Team Size & Location */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                    Team Size *
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                  >
                    <option value="">Select team size</option>
                    <option value="1">Solo Founder</option>
                    <option value="2-5">2-5 members</option>
                    <option value="6-10">6-10 members</option>
                    <option value="11-20">11-20 members</option>
                    <option value="20+">20+ members</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              {/* Industry & Stage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                  >
                    <option value="">Select industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                    Startup Stage *
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                  >
                    <option value="">Select stage</option>
                    {stages.map(stage => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                  Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                  placeholder="https://yourstartup.com"
                />
              </div>

              {/* Startup Information */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                  Brief Information About Your Startup *
                </label>
                <textarea
                  name="startupInfo"
                  value={formData.startupInfo}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all resize-none"
                  placeholder="Describe your startup, mission, vision, and what problem you're solving..."
                />
              </div>

              {/* Elevator Pitch */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                  Elevator Pitch (Optional)
                </label>
                <textarea
                  name="pitch"
                  value={formData.pitch}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all resize-none"
                  placeholder="Describe your startup in 2-3 sentences..."
                />
              </div>

              {/* Document Upload */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#34312C' }}>
                  Upload Startup Documents
                </label>
                <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center transition-all hover:border-[#FD8F02] hover:bg-orange-50/50">
                  <input
                    type="file"
                    name="documents"
                    onChange={handleInputChange}
                    multiple
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    className="hidden"
                    id="documents-upload"
                  />
                  <label htmlFor="documents-upload" className="cursor-pointer">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: '#FD8F02' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-lg" style={{ color: '#FD8F02' }}>Click to upload documents</span>
                        <p className="text-gray-600 mt-2">Business Plan, Pitch Deck, Financials, etc.</p>
                        <p className="text-sm text-gray-500">PDF, DOC, PPT up to 10MB each</p>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium" style={{ color: '#34312C' }}>Uploaded Files:</p>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-sm text-gray-700">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: isSubmitting ? '#ccc' : '#FD8F02',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Launching Your Startup...
                  </div>
                ) : (
                  'Launch on RiseVerse 🚀'
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have a startup registered?{' '}
                <Link href="/login" className="font-semibold hover:text-[#34312C] transition-colors" style={{ color: '#FD8F02' }}>
                  Access your dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}