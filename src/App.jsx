import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Timeline from './pages/Timeline'
import Vision from './pages/Vision'
import Building from './pages/Building'
import Contact from './pages/Contact'
import bgVideo from './pics/s_t_a_l_k_e_r-2_wallsflow-com.mp4'

export default function App(){
  return (
    <div className="app-shell">
      <video className="app-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="app-video-overlay" />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/timeline" element={<Timeline/>} />
          <Route path="/vision" element={<Vision/>} />
          <Route path="/building" element={<Building/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
