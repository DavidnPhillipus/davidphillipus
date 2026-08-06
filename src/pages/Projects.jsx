import React from 'react'
import { PROJECTS } from '../data'

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function Projects(){
  return (
    <section className="section compact-page" id="projects">
      <div className="wrap">
        <div className="eyebrow">Featured Work</div>
        <h2 className="section-title">Products, not prototypes.</h2>
        <p className="section-sub">Live sites I’ve designed and shipped — click any preview to open it.</p>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a
              className="proj-card proj-card-link"
              key={p.n}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.n} live website`}
            >
              <div className="browser-frame">
                <div className="browser-chrome">
                  <div className="browser-dots" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-url">
                    <svg className="browser-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                    {hostname(p.url)}
                  </div>
                  <span className="browser-live">Live</span>
                </div>
                <div className="browser-viewport">
                  {p.preview ? (
                    <img src={p.preview} alt={`${p.n} landing page`} loading="lazy" />
                  ) : (
                    <iframe
                      src={p.url}
                      title={`${p.n} live preview`}
                      loading="lazy"
                      tabIndex={-1}
                      sandbox="allow-scripts allow-same-origin"
                    />
                  )}
                  <div className="browser-shade">
                    <span>Visit live site →</span>
                  </div>
                </div>
              </div>
              <div className="proj-body">
                <h3>{p.n}</h3>
                <p>{p.d}</p>
                <div className="badges">{p.t.map(t => <span className="badge" key={t}>{t}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
