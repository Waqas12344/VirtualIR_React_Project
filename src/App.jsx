import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className=' '>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px6">
      <HeroSection/>
      </div>
    </div>

  )
}

export default App