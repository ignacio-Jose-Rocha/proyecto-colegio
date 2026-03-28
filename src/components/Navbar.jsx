import React from 'react'
import Logo from './Logo'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Logo />
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#educacion" onClick={() => setMenuOpen(false)}>Educación</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
