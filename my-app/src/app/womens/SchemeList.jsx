// src/app/women/WomenSchemeList.jsx
"use client";

import SchemeCard from "../womens/SchemeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const WomenSchemeList = ({ schemes }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1c2e57] mb-4">
          Women Empowerment Schemes
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover various government initiatives designed to support women in
          education, health, safety, and entrepreneurship
        </p>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto">
        <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-12"
>
  {schemes.map((scheme) => (
    <SwiperSlide key={scheme.id} className="flex justify-center">
      <SchemeCard scheme={scheme} />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default WomenSchemeList;