import React from 'react'
import profilePic from '../pics/IMG-20260413-WA0103.jpg'

export default function About(){
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="photo-card">
          <img
            src={profilePic}
            alt="David Phillipus"
            className="profile-photo"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <div className="photo-initials">DP</div>
        </div>

        <div className="about-body">
          <div className="eyebrow">About</div>
          <h2 className="section-title">A builder shaped by discipline, ambition, and real-world experience.</h2>
          <div style={{marginTop:26}}>
            <p>I’m David Phillipus, a final-year Software Engineering student at NUST, and I’ve spent the last 3 years learning by building — from interfaces and APIs to deployment workflows and practical product solutions.</p>
            <p>I completed 3 certifications through Course Careers in Frontend, Backend, and DevOps, and I’m motivated by the idea of creating work that matters: software that is thoughtful, reliable, and built with intention. I want to grow into the kind of engineer who doesn’t just write code, but creates impact.</p>
          </div>
          <div className="stats-row">
            <div className="stat"><div className="num" data-count="3">3</div><div className="lbl">Years Experience</div></div>
            <div className="stat"><div className="num" data-count="12">12</div><div className="lbl">Projects Built</div></div>
            <div className="stat"><div className="num" data-count="20">20</div><div className="lbl">Technologies</div></div>
            <div className="stat"><div className="num" data-count="480">480</div><div className="lbl">Cups of Coffee</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
