import React from 'react'

export default function Vision(){
  return (
    <section className="section compact-page" id="vision">
      <div className="wrap">
        <div className="vision reveal">
          <div className="vision-bg"></div>
          <div className="vision-content">
            <div className="eyebrow" style={{color:'#fff'}}>Startup Vision</div>
            <h2>Technology built in Africa, competitive anywhere.</h2>
            <p>I'm not interested in building copies of Silicon Valley products for a local market. I want to build systems that solve problems specific to how Africa banks, farms and grows.</p>
            <div className="pillars">
              <div className="pillar">Financial inclusion</div>
              <div className="pillar">Food security</div>
              <div className="pillar">AI-native tooling</div>
              <div className="pillar">Infrastructure over apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
