import React from 'react'
import { BUILDING } from '../data'

export default function Building(){
  return (
    <section className="section" id="building" style={{background:'var(--bg-1)'}}>
      <div className="wrap">
        <div className="eyebrow">What I'm Building</div>
        <h2 className="section-title">Current bets and what's next.</h2>
        <div className="build-grid">
          {BUILDING.map(b=> (
            <div className="build-card" key={b.t}>
              <div className={`build-status ${b.s}`}>{b.sl}</div>
              <h4>{b.t}</h4>
              <p>{b.x}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
