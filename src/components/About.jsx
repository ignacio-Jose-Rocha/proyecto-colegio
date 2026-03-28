import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Visión Global',
      description: 'Preparamos estudiantes para un mundo interconectado, fomentando el respeto y la comprensión intercultural.'
    },
    {
      icon: '📚',
      title: 'Excelencia Académica',
      description: 'Programas educativos de alta calidad con metodologías innovadoras y tecnología de vanguardia.'
    },
    {
      icon: '🤝',
      title: 'Valores Universales',
      description: 'Promovemos la paz, la solidaridad y el respeto por los derechos humanos en cada actividad.'
    }
  ]

  return (
    <section id="nosotros" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-grid">
          {features.map((feature, index) => (
            <div key={index} className="about-card">
              <div className="about-icon">{feature.icon}</div>
              <h3 className="about-card-title">{feature.title}</h3>
              <p className="about-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
