import React from 'react'
import "./App.css"
import AboutUs from './components/AboutUs'
import FAQs from './components/FAQs'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Homepage />
      <FAQs />
      <AboutUs />
    </div>
  )
}

export default App