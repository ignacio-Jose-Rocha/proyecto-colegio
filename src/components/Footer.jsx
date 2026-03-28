import React from 'react'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="footer-info">
            <p>&copy; 2026 Colegio Naciones Unidas del Mundo. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
