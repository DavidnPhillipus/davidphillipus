import React from 'react'
import { PROJECTS } from '../data'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="eyebrow">Featured Work</div>
        <h2 className="section-title">Products, not prototypes.</h2>
        <p className="section-sub">A handful of the systems I've designed and shipped.</p>
        <div className="projects-marquee">
          <div className="projects-track">
            {[...PROJECTS, ...PROJECTS].map((p, index) => (
              <div className="proj-card" key={`${p.n}-${index}`}>
                <div className="proj-media" style={{background:'linear-gradient(135deg, var(--primary), var(--accent))'}}>
                  <div className="glyph">{p.g}</div>
                </div>
                <div className="proj-body">
                  <h3>{p.n}</h3>
                  <p>{p.d}</p>
                  <div className="badges">{p.t.map(t=> <span className="badge" key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
