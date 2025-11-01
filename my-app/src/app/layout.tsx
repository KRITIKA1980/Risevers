// File: src/app/layout.tsx h
import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next E-commerce",
  description: "A clean white-themed e-commerce frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="px-4 py-6 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
