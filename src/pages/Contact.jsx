import React from 'react'
import Icon from '../components/Icon'

export default function Contact(){
  function onSubmit(e){
    e.preventDefault();
    alert('This is a demo form. Wire to your backend or email service.');
  }

  return (
    <section className="section" id="contact" style={{background:'var(--bg-1)'}}>
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h2 className="section-title" style={{marginBottom:26}}>Let's build something.</h2>
          <form id="contactForm" onSubmit={onSubmit}>
            <div className="field"><label htmlFor="cname">Name</label><input id="cname" type="text" placeholder="Your name" required/></div>
            <div className="field"><label htmlFor="cemail">Email</label><input id="cemail" type="email" placeholder="you@company.com" required/></div>
            <div className="field"><label htmlFor="cmsg">Message</label><textarea id="cmsg" placeholder="Tell me about the opportunity or idea..." required/></div>
            <button type="submit" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Building software and products with a founder’s mindset.</h3>
          <p>Whether it’s a product challenge, a technical build, or a conversation about turning an idea into something useful — my inbox is open.</p>
          <div className="social-row">
            <a href="https://github.com" target="_blank" rel="noopener" className="social-btn"><Icon name="github" size={15} /> <span>GitHub</span></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="social-btn"><Icon name="linkedin" size={15} /> <span>LinkedIn</span></a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="social-btn"><Icon name="twitter" size={15} /> <span>X / Twitter</span></a>
            <a href="mailto:david@example.com" className="social-btn"><Icon name="mail" size={15} /> <span>Email</span></a>
          </div>
          <div className="avail"><span className="d"></span> Available for product, engineering, and founder collaborations</div>
        </div>
      </div>
    </section>
  )
}
