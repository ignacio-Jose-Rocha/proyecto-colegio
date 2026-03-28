import React from 'react'
import './Education.css'

const Education = () => {
  const levels = [
    {
      title: 'Nivel Inicial',
      subtitle: 'Sala de 3, 4 y 5 años',
      features: [
        'Estimulación temprana',
        'Desarrollo socioemocional',
        'Introducción al inglés'
      ]
    },
    {
      title: 'Nivel Primario',
      subtitle: '1° a 6° grado',
      features: [
        'Educación bilingüe',
        'Robótica y programación',
        'Deportes y arte'
      ]
    },
    {
      title: 'Nivel Secundario',
      subtitle: '1° a 6° año - Orientación en Programación y Sistemas',
      features: [
        'Bachillerato en Informática',
        'Programación y desarrollo de software',
        'Redes y sistemas operativos',
        'Bases de datos',
        'Diseño web y aplicaciones móviles'
      ]
    }
  ]

  return (
    <section id="educacion" className="education">
      <div className="container">
        <h2 className="section-title">Niveles Educativos</h2>
        <div className="education-grid">
          {levels.map((level, index) => (
            <div key={index} className="education-card">
              <h3 className="education-title">{level.title}</h3>
              <p className="education-subtitle">{level.subtitle}</p>
              <ul className="education-features">
                {level.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
