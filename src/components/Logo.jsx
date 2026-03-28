import React from 'react'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <svg viewBox="0 0 100 100" className="logo-svg">
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#991b1b', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#redGradient)" stroke="white" strokeWidth="3" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="1.5" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="2" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="2" />
          <path d="M 20 20 Q 50 30 80 20" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M 20 80 Q 50 70 80 80" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="5" fill="#fbbf24" />
        </svg>
      </div>
      <div className="logo-text">
        <div className="logo-title">COLEGIO</div>
        <div className="logo-name">Naciones Unidas</div>
        <div className="logo-subtitle">del Mundo</div>
      </div>
    </div>
  )
}

export default Logo
