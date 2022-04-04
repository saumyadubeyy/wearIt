import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import AboutUs from './components/AboutUs'
import FAQs from './components/FAQs'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Error from './components/Error'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/wearIt" element={<Homepage />} />
          <Route path="/wearIt/AboutUs" element={<AboutUs />} />
          <Route path="/wearIt/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App