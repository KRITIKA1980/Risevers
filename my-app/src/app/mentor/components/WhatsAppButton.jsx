"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917643922644" // ✅ Use country code (91) + number (no plus sign)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#FD8F02] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
