import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <div className=' '>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px6">
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      </div>
    </div>

  )
}

export default App