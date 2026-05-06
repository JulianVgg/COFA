import { useState } from 'react'
import Reveal from '../components/Reveal'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Alquiler de salones',
    actividad: 'Retiro',
    fecha: '',
    horario: '',
    personas: '',
    mensaje: '',
  })

  const whatsappCofa = '50259357112'

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const buildWhatsAppMessage = () => {
    const mensaje = `Hola, quisiera solicitar información para una reservación en COFA.

Nombre: ${formData.nombre || 'Andrea Morales'}
Teléfono: ${formData.telefono || '4215 7784'}
Servicio de interés: ${formData.servicio || 'Alquiler de salones'}
Tipo de actividad: ${formData.actividad || 'Retiro'}
Fecha aproximada: ${formData.fecha || 'No especificada'}
Horario aproximado: ${formData.horario || '8:00 a 16:00'}
Cantidad estimada de personas: ${formData.personas || '25'}

Mensaje adicional:
${formData.mensaje || 'Deseo información sobre disponibilidad, costos y servicios incluidos.'}`

    return encodeURIComponent(mensaje)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = buildWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappCofa}?text=${message}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <Reveal>
            <p className="contact-hero-kicker">Contacto</p>
            <h1>ENVÍA TU SOLICITUD</h1>
   
          </Reveal>
        </div>
      </section>

      {/* FORMULARIO + TARJETA AZUL */}
      <section className="contact-form-section" id="formulario-contacto">
        <div className="container contact-form-grid">
          <Reveal>
            <div className="contact-info-card">
              <h2>Cuéntanos qué necesitas.</h2>

              <div className="contact-info-list">
                <div>
                  <span>Teléfonos</span>
                  <a href="tel:+50277635579">7763 5579</a>
                  <a href="tel:+50277674226">7767 4226</a>
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
                  <p>Alquiler de salones, hospedaje y alimentación</p>
                </div>
              </div>

              <div className="contact-note">
                <strong>Importante</strong>
                <p>
                  Las reservaciones se coordinan según disponibilidad,
                  cantidad de personas y tipo de actividad.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="contact-form-head">
                <p>Formulario de solicitud</p>
                <h2>Datos de la actividad</h2>
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

              <div className="contact-form-row">
                <label>
                  Servicio de interés
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                  >
                    <option>Alquiler de salones</option>
                    <option>Hospedaje</option>
                    <option>Alimentación</option>
                    <option>Paquete completo / varios servicios</option>
                    <option>Otro</option>
                  </select>
                </label>

                <label>
                  Tipo de actividad
                  <select
                    name="actividad"
                    value={formData.actividad}
                    onChange={handleChange}
                  >
                    <option>Retiro</option>
                    <option>Reunión</option>
                    <option>Capacitación</option>
                    <option>Evento institucional</option>
                    <option>Actividad religiosa</option>
                    <option>Convivencia</option>
                    <option>Otro</option>
                  </select>
                </label>
              </div>

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
                    placeholder="Ej. 8:00 a 16:00"
                  />
                </label>
              </div>

              <label>
                Cantidad estimada de personas
                <input
                  type="number"
                  name="personas"
                  value={formData.personas}
                  onChange={handleChange}
                  placeholder="Ej. 25"
                  min="1"
                />
              </label>

              <label>
                Mensaje adicional
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Ej. Deseamos conocer disponibilidad, costo del salón y opción de alimentación."
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

export default Contacto