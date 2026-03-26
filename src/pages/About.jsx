import React from 'react'
import Hero from '../components/about/Hero'
import Features from '../components/about/Features'
import Stats from '../components/about/Status'
import WhyChooseUs from '../components/about/WhyChooseUs'

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Hero/>
        <Features/>
        <Stats/>
        <WhyChooseUs/>
    </div>
  )
}

export default About