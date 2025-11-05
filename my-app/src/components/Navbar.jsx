"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const authDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close auth dropdown if clicked outside
      if (authDropdownRef.current && !authDropdownRef.current.contains(event.target)) {
        setIsAuthDropdownOpen(false);
      }
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[class*="md:hidden"]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllDropdowns = () => {
    setIsAuthDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="pt-6 px-4">
      <nav className="bg-white shadow-lg rounded-2xl p-4 flex justify-between items-center max-w-7xl mx-auto border border-gray-100 relative">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#FD8F02] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-base sm:text-lg">🚀</span>
          </div>
          <Link
            href="/"
            className="text-lg sm:text-2xl font-bold text-[#FD8F02] hover:text-gray-800 transition-colors truncate max-w-[120px] sm:max-w-full"
            onClick={closeAllDropdowns}
          >
            RiseVerse
          </Link>
        </div>

        {/* Desktop Links - Always Visible */}
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 items-center text-sm sm:text-base">
          <Link
            href="/schemes"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-50"
            onClick={closeAllDropdowns}
          >
            Schemes
          </Link>
          <Link
            href="/mentor"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-50"
            onClick={closeAllDropdowns}
          >
            Mentor
          </Link>
          <Link
            href="/location"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-50"
            onClick={closeAllDropdowns}
          >
            Location
          </Link>
          <Link
            href="/startups"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-50"
            onClick={closeAllDropdowns}
          >
            StartUp
          </Link>
        </div>

        {/* Auth Dropdown Desktop */}
        <div className="relative" ref={authDropdownRef}>
          <button
            onClick={() => {
              setIsAuthDropdownOpen(!isAuthDropdownOpen);
              setIsMobileMenuOpen(false); // Close mobile menu when opening auth dropdown
            }}
            className="flex items-center space-x-2 bg-[#FD8F02] text-white font-medium px-4 py-2.5 rounded-lg hover:bg-[#e07f02] transition-all duration-200 shadow-md border-2 border-[#FD8F02] hover:border-[#e07f02] hover:shadow-lg"
          >
            <span>Account</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isAuthDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isAuthDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-3 py-2 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Account Options</p>
              </div>
              <Link
                href="/register"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#fff7ef] hover:text-[#FD8F02] transition-colors group"
                onClick={closeAllDropdowns}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#FD8F02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Register</span>
              </Link>
              <Link
                href="/login"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#fff7ef] hover:text-[#FD8F02] transition-colors group"
                onClick={closeAllDropdowns}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#FD8F02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Login</span>
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link
                href="/register-startup"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#fff7ef] hover:text-[#FD8F02] transition-colors group font-semibold"
                onClick={closeAllDropdowns}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#FD8F02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Register Your Startup</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FD8F02] p-2 hover:bg-[#fff7ef] rounded-lg transition-colors"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsAuthDropdownOpen(false); // Close auth dropdown when opening mobile menu
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl z-40 max-h-[90vh] overflow-y-auto md:hidden rounded-b-2xl"
          >
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Navigation
              </h3>
            </div>
            {[
              ["schemes", "Schemes"],
              ["mentor", "Mentor"],
              ["location", "Location"],
              ["startups", "StartUp"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={`/${href}`}
                className="block px-6 py-4 text-gray-800 hover:text-[#FD8F02] hover:bg-[#fff7ef] border-b border-gray-50 transition-colors"
                onClick={closeAllDropdowns}
              >
                {label}
              </Link>
            ))}
            
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Account
              </h3>
            </div>
            {[
              ["register", "Register"],
              ["login", "Login"],
              ["register-startup", "Register Your Startup"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={`/${href}`}
                className="block px-6 py-4 text-gray-800 hover:text-[#FD8F02] hover:bg-[#fff7ef] border-b border-gray-50 transition-colors"
                onClick={closeAllDropdowns}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* REMOVED THE PROBLEMATIC OVERLAY - This was causing the black/invisible issue */}
      
      {/* Only show overlay when mobile menu is open on mobile devices */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-10 md:hidden"
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  );
}
