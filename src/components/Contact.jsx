import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nivel: '',
    mensaje: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/rochaignaciojose@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          nivel: formData.nivel,
          mensaje: formData.mensaje,
          _subject: 'Nueva consulta desde Colegio Naciones Unidas del Mundo',
          _template: 'table'
        })
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          nivel: '',
          mensaje: ''
        })
        
        setTimeout(() => {
          setStatus('')
        }, 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Visitanos</h3>
            <div className="info-item">
              <strong>Dirección:</strong>
              <p>José Remigio López 2257<br/>San Miguel<br/>Código postal 1663<br/>Buenos Aires - Argentina</p>
            </div>
            <div className="info-item">
              <strong>Teléfono/Fax:</strong>
              <p>(011) 4455-1849<br/>(011) 4455-3481</p>
            </div>
            <div className="info-item">
              <strong>WhatsApp:</strong>
              <p>11 2624-5628</p>
            </div>
            <div className="info-item">
              <strong>Emails:</strong>
              <p>Información General: info@cnum.edu.ar<br/>
              Inicial y Primaria: primaria@cnum.edu.ar<br/>
              Nivel Secundario: secundaria@cnum.edu.ar</p>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps?q=José+Remigio+López+2257,+San+Miguel,+Buenos+Aires,+Argentina&output=embed" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                title="Ubicación del colegio"
              ></iframe>
            </div>
          </div>
          <div className="contact-form-container">
            <h3>Envianos tu Consulta</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
              <select
                name="nivel"
                value={formData.nivel}
                onChange={handleChange}
                required
              >
                <option value="">Nivel de interés</option>
                <option value="inicial">Nivel Inicial</option>
                <option value="primario">Nivel Primario</option>
                <option value="secundario">Nivel Secundario</option>
              </select>
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Enviar Consulta</button>
            </form>
            {status === 'success' && (
              <div className="form-message success">
                ¡Mensaje enviado exitosamente! Te contactaremos pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="form-message error">
                Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
