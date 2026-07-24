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
          <h2 className="section-title">From first lines of code to product systems.</h2>
          <div style={{marginTop:26}}>
            <p>I bring 3 years of experience in software development, and I built my foundation in frontend, backend, and DevOps through Course Careers. I’m focused on turning ideas into reliable software that people actually use.</p>
            <p>I care about quality, reliability, and products that can scale with care, speed, and real-world practicality — whether I’m building interfaces, APIs, or deployment workflows.</p>
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
