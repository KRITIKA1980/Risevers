'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import NewsSection from './home/Hero_Section';
import AboutSection from './home/about';
import FAQSection from './home/FAQSection';

const LayoffsPage = dynamic(() => import('./home/benefits'), { ssr: false });

function page() {
  return (
    <div>
       
        <NewsSection/>
        <AboutSection/>
        <LayoffsPage/>
        <FAQSection/>
    </div>
  )
}

export default page;