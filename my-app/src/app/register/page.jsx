'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cv: null,
    role: '',
    terms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      console.log('Form data:', formData);
      // Add your API call here
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Registration successful! Welcome to RiseVerse!');
    } catch (error) {
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#34312C' }}>
            Join <span style={{ color: '#FD8F02' }}>RiseVerse</span>
          </h1>
          <p className="text-gray-600 text-lg">
            The Universe for Startups - Connect, Learn, and Grow Together
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#34312C' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#34312C' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#34312C' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#34312C' }}>
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD8F02] focus:border-transparent transition-all resize-none"
                placeholder="Enter your complete address"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#34312C' }}>
                Upload Your CV/Resume *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all hover:border-[#FD8F02]">
                <input
                  type="file"
                  name="cv"
                  onChange={handleInputChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="cv-upload"
                />
                <label htmlFor="cv-upload" className="cursor-pointer">
                  <div className="space-y-2">
                    <div className="mx-auto w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                      <svg className="w-6 h-6" style={{ color: '#FD8F02' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium" style={{ color: '#FD8F02' }}>Click to upload</span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </div>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </label>
                {formData.cv && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.cv.name}
                  </p>
                )}
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium mb-4" style={{ color: '#34312C' }}>
                Register As *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'applicant', label: '🚀 Applicant', description: 'Join startup teams, find co-founder roles' },
                  { value: 'mentor', label: '👨‍💼 Mentor', description: 'Guide startups with your expertise' },
                  { value: 'investor', label: '💰 Investor', description: 'Discover and fund promising startups' },
                  { value: 'startup-partner', label: '🤝 Startup Partner', description: 'Connect your startup with resources' }
                ].map((role) => (
                  <label
                    key={role.value}
                    className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none transition-all ${
                      formData.role === role.value 
                        ? 'border-[#FD8F02] bg-orange-50 ring-2 ring-[#FD8F02]' 
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.value}
                      checked={formData.role === role.value}
                      onChange={handleInputChange}
                      required
                      className="sr-only"
                    />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <div className="font-medium" style={{ color: '#34312C' }}>
                            {role.label}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {role.description}
                          </div>
                        </div>
                      </div>
                      <div className={`shrink-0 text-white ${formData.role === role.value ? 'block' : 'hidden'}`}>
                        <svg className="h-6 w-6" style={{ color: '#FD8F02' }} viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="currentColor"/>
                          <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-[#FD8F02] bg-gray-100 border-gray-300 rounded focus:ring-[#FD8F02] focus:ring-2"
              />
              <label className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="font-medium" style={{ color: '#FD8F02' }}>
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium" style={{ color: '#FD8F02' }}>
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.terms}
              className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
              style={{ 
                backgroundColor: isSubmitting ? '#ccc' : '#FD8F02',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Your RiseVerse Account...
                </div>
              ) : (
                'Join RiseVerse Universe'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium" style={{ color: '#FD8F02' }}>
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}