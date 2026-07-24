import React from 'react'
import { TIMELINE } from '../data'

export default function Timeline(){
  return (
    <section className="section" id="timeline" style={{background:'var(--bg-1)'}}>
      <div className="wrap">
        <div className="eyebrow">Journey</div>
        <h2 className="section-title">Education, founding, and everything between.</h2>
        <div className="timeline">
          {TIMELINE.map(item=> (
            <div className="t-item" key={item.d}>
              <div className="date">{item.d}</div>
              <h4>{item.t}</h4>
              <p>{item.x}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
