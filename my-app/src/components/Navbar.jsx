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
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#FD8F02] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-base sm:text-lg">🚀</span>
          </div>
          <Link
            href="/"
            className="text-lg sm:text-2xl font-bold text-[#FD8F02] hover:text-gray-800 transition-colors truncate max-w-[120px] sm:max-w-full"
          >
            RiseVerse
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center text-sm sm:text-base">
          <Link
            href="/schemes"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            onClick={() => setIsSchemeOpen(false)}
          >
            Schemes
          </Link>
          <Link
            href="/mentor"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            Mentor
          </Link>
        </div>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/signup"
            className="text-gray-800 font-medium hover:text-[#FD8F02] transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-[#FD8F02] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#e07f02] transition-colors shadow-md"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FD8F02] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 max-h-[90vh] overflow-y-auto">
            {[
              ["students", "Students"],
              ["womens", "Women"],
              ["elder-citizens", "Elder Citizens"],
              ["farmers", "Farmers"],
              ["more", "More"],
              ["mentor", "Mentor"],
              ["signup", "Sign Up"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={`/${href}`}
                className="block px-4 py-2 text-gray-800 hover:text-[#FD8F02] hover:bg-[#fff7ef]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-4 py-2 bg-[#FD8F02] text-white rounded hover:bg-[#e07f02] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Overlay for closing dropdown on mobile */}
      {isSchemeOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsSchemeOpen(false)}
        />
      )}
    </div>
  );
}
