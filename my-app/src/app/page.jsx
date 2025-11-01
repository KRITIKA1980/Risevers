import React from 'react'
import NewsSection from './home/Hero_Section'
import AboutSection from './home/about'
import LayoffsPage from './home/benefits'
import  FAQSection from './home/FAQSection'
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

export default page