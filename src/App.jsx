import { useState } from 'react'
import './App.css'
import SonicWaveform from './components/SonicWaveform'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">TNH Studio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>TNH Studio</h1>
            <p>Professional Audio Production</p>
            <SonicWaveform />
          </div>
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Recording</h3>
              <p>Professional recording services with state-of-the-art equipment</p>
            </div>
            <div className="service-card">
              <h3>Mixing</h3>
              <p>Expert mixing to bring your tracks to life</p>
            </div>
            <div className="service-card">
              <h3>Mastering</h3>
              <p>Final polish for radio-ready sound</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Us</h2>
          <p>TNH Studio is a professional audio production facility dedicated to delivering exceptional sound quality.</p>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 TNH Studio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
