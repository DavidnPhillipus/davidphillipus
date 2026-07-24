import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="topbar" id="topbar">
      <div className="topbar-spacer"></div>

      <button
        className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`top-actions ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}><Icon name="home" size={16} /> <span>Home</span></NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}><Icon name="about" size={16} /> <span>About</span></NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}><Icon name="skills" size={16} /> <span>Skills</span></NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}><Icon name="projects" size={16} /> <span>Projects</span></NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}><Icon name="contact" size={16} /> <span>Contact</span></NavLink>
      </div>
    </header>
  )
}
