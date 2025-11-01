"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSchemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pt-6 px-4">
      <nav className="bg-white shadow-lg rounded-2xl p-4 flex justify-between items-center max-w-7xl mx-auto border border-gray-100 relative">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#1c2e57] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg">🛒</span>
          </div>
          <Link
            href="/"
            className="text-lg sm:text-2xl font-bold text-[#1c2e57] hover:text-[#16325c] transition-colors truncate max-w-[120px] sm:max-w-full"
          >
            CitizenSetu
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center text-sm sm:text-base">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsSchemeOpen(!isSchemeOpen)}
              className="text-[#1c2e57] font-medium hover:text-[#16325c] transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <span>Scheme</span>
              <svg
                className={`w-4 h-4 transition-transform ${isSchemeOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSchemeOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <Link
                  href="/students"
                  className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff] transition-colors"
                  onClick={() => setIsSchemeOpen(false)}
                >
                  Students
                </Link>
                <Link
                  href="/womens"
                  className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff] transition-colors"
                  onClick={() => setIsSchemeOpen(false)}
                >
                  Women
                </Link>
                <Link
                  href="/elder-citizens"
                  className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff] transition-colors"
                  onClick={() => setIsSchemeOpen(false)}
                >
                  Elder Citizens
                </Link>
                <Link
                  href="/farmers"
                  className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff] transition-colors"
                  onClick={() => setIsSchemeOpen(false)}
                >
                  Farmers
                </Link>
                <Link
                  href="/more"
                  className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff] transition-colors"
                  onClick={() => setIsSchemeOpen(false)}
                >
                  More
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/mentor"
            className="text-[#1c2e57] font-medium hover:text-[#16325c] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            Mentor
          </Link>
          <Link
            href="/location"
            className="text-[#1c2e57] font-medium hover:text-[#16325c] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            Location
          </Link>
        </div>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/signup"
            className="text-[#1c2e57] font-medium hover:text-[#16325c] transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-[#1c2e57] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#16325c] transition-colors shadow-md"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1c2e57] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 max-h-[90vh] overflow-y-auto">
            <Link
              href="/students"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Students
            </Link>
            <Link
              href="/womens"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              href="/elder-citizens"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Elder Citizens
            </Link>
            <Link
              href="/farmers"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Farmers
            </Link>
            <Link
              href="/more"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More
            </Link>
            <Link
              href="/mentor"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mentor
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 text-[#1c2e57] hover:bg-[#f0f4ff]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 bg-[#1c2e57] text-white rounded hover:bg-[#16325c] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Overlay for closing dropdown on mobile */}
      {isSchemeOpen && <div className="fixed inset-0 z-40" onClick={() => setIsSchemeOpen(false)} />}
    </div>
  );
}
