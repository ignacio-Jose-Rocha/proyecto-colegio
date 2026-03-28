import React from 'react'
import Carousel from './Carousel'
import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Formando Ciudadanos del Mundo</h1>
          <p className="hero-subtitle">Educación integral con perspectiva global y valores universales</p>
          <a href="#contacto" className="cta-button">Conoce Más</a>
        </div>
        <div className="hero-carousel">
          <Carousel />
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  )
}

export default Hero
