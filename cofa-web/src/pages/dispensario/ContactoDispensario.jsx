import { useState } from 'react'
import Reveal from '../../components/Reveal'

function ContactoDispensario() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Medicina General',
    fecha: '',
    horario: '',
    mensaje: '',
  })

  const whatsappDispensario = '50237908767'

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const buildWhatsAppMessage = () => {
    const mensaje = `Hola, quisiera solicitar información del Dispensario Sagrada Familia.

Nombre: ${formData.nombre || 'No especificado'}
Teléfono: ${formData.telefono || 'No especificado'}
Servicio de interés: ${formData.servicio || 'No especificado'}
Fecha aproximada: ${formData.fecha || 'No especificada'}
Horario aproximado: ${formData.horario || 'No especificado'}

Mensaje adicional:
${formData.mensaje || 'Deseo conocer disponibilidad, horarios y requisitos para recibir atención.'}`

    return encodeURIComponent(mensaje)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = buildWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappDispensario}?text=${message}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="contact-page dispensary-contact-page">
      <section className="contact-hero dispensary-contact-hero">
        <div className="container contact-hero-content">
          <Reveal>
            <p className="contact-hero-kicker">Dispensario</p>
            <h1>CONTACTA AL DISPENSARIO</h1>
          </Reveal>
        </div>
      </section>

      <section className="contact-form-section" id="formulario-contacto-dispensario">
        <div className="container contact-form-grid">
          <Reveal>
            <div className="contact-info-card dispensary-contact-info-card">
              <h2>Solicita información sobre atención médica.</h2>

              <div className="contact-info-list">
                <div>
                  <span>Teléfono</span>
                  <a href="tel:+50277669043">7766 9043</a>
                </div>

                <div>
                  <span>WhatsApp</span>
                  <a
                    href="https://wa.me/50237908767"
                    target="_blank"
                    rel="noreferrer"
                  >
                    3790 8767
                  </a>
                </div>

                <div>
                  <span>Ubicación</span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=23+avenida+9-60+zona+3,+Quetzaltenango,+Guatemala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    23 avenida 9-60 zona 3, Quetzaltenango
                  </a>
                </div>

                <div>
                  <span>Servicios disponibles</span>
                  <p>Medicina general, odontología, farmacia y enfermería</p>
                </div>

                <div>
                  <span>Horarios</span>
                  <p>Lunes a viernes de 8:00 a 17:00 · sábados de 8:00 a 12:00</p>
                </div>
              </div>

              <div className="contact-note">
                <strong>Importante</strong>
                <p>
                  La atención se coordina según disponibilidad, horario y tipo
                  de servicio solicitado.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="contact-form-head">
                <p>Formulario de solicitud</p>
                <h2>Datos de atención</h2>
              </div>

              <div className="contact-form-row">
                <label>
                  Nombre completo
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Andrea Morales"
                  />
                </label>

                <label>
                  Teléfono de contacto
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej. 4215 7784"
                  />
                </label>
              </div>

              <label>
                Servicio de interés
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                >
                  <option>Medicina General</option>
                  <option>Odontología</option>
                  <option>Farmacia</option>
                  <option>Enfermería</option>
                  <option>Consulta general</option>
                  <option>Otro</option>
                </select>
              </label>

              <div className="contact-form-row">
                <label>
                  Fecha aproximada
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Horario aproximado
                  <input
                    type="text"
                    name="horario"
                    value={formData.horario}
                    onChange={handleChange}
                    placeholder="Ej. 9:00 a 11:00"
                  />
                </label>
              </div>

              <label>
                Mensaje adicional
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Ej. Quisiera consultar disponibilidad para medicina general."
                  rows="5"
                />
              </label>

              <button type="submit" className="contact-submit-btn">
                Enviar solicitud por WhatsApp
              </button>

              <p className="contact-form-disclaimer">
                Al presionar el botón se abrirá WhatsApp con la información
                preparada. El mensaje no se envía automáticamente.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default ContactoDispensario