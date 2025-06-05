import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Homepage/Home'
import WhatsAppButton from './Components/WhatsappButton/WhatsAppButton'
function App() {
  return (
    <>
      <Router>
        <WhatsAppButton/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
