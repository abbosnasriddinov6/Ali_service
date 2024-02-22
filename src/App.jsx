import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import Register from './pages/registr/Register'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='register' element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App