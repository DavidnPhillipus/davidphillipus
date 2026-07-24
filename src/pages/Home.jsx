import React, { useEffect, useRef } from 'react'
import { TECH } from '../data'
import profilePic from '../pics/IMG-20260413-WA0103.jpg'

export default function Home() {
  const marqueeRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const track = marqueeRef.current
    if (!track) return
    track.innerHTML = ''
    ;[...TECH, ...TECH].forEach((tech) => {
      const item = document.createElement('div')
      item.className = 'marquee-item'
      item.innerHTML = `<span class="sw"></span>${tech}`
      track.appendChild(item)
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrame
    let particles = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const initParticles = () => {
      particles = []
      const count = Math.min(70, Math.floor(canvas.width / 22))
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(148,157,220,0.45)'
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })
      animationFrame = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    resizeCanvas()
    initParticles()
    draw()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      <section className="hero" id="top">
        <canvas id="particles" ref={canvasRef}></canvas>
        <div className="mesh">
          <div className="blob blob-a"></div>
          <div className="blob blob-b"></div>
          <div className="blob blob-c"></div>
        </div>

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="status-pill"><span className="live"></span> Software developer • founder • product builder</div>
            <h1>Designing <span className="grad">clarity</span>, speed, and <span className="grad">trust</span> into software.</h1>
            <p className="lead">I build resilient systems, thoughtful product experiences, and practical AI tools for ambitious teams — with a lean, user-first approach grounded in real-world constraints.</p>
            <div className="hero-ctas">
              <a href="/projects" className="btn btn-primary">See projects →</a>
              <a href="/about" className="btn btn-ghost">About me</a>
              <a href="/contact" className="btn btn-ghost">Let’s talk</a>
            </div>

            <div className="hero-highlights">
              <div className="highlight-card">
                <strong>4+</strong>
                <span>years shipping software</span>
              </div>
              <div className="highlight-card">
                <strong>3</strong>
                <span>focus areas: product, systems, AI</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-glow"></div>
              <div className="hero-card-shell">
                <img src={profilePic} alt="David Phillipus" className="hero-avatar hero-avatar-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee-fade l"></div>
        <div className="marquee-fade r"></div>
        <div className="marquee-track" ref={marqueeRef}></div>
      </section>
    </>
  )
}
