import React from 'react'
import Icon from './Icon'

export default function Footer(){
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="fl">© {new Date().getFullYear()} David Phillipus. Built with intent.</div>
        <div className="foot-links">
          <a href="#top"><Icon name="arrow" size={14} /> <span>Back to top</span></a>
          <a href="mailto:david@example.com"><Icon name="mail" size={14} /> <span>Email</span></a>
          <a href="https://github.com" target="_blank" rel="noopener"><Icon name="github" size={14} /> <span>GitHub</span></a>
        </div>
      </div>
    </footer>
  )
}
