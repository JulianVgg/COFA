import useRevealOnScroll from '../../hooks/useRevealOnScroll'

function MedicinaGeneralPage() {
  useRevealOnScroll()

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera solicitar información sobre el servicio de Medicina General del Dispensario Sagrada Familia.',
  )

  const whatsappUrl = `https://wa.me/50237908767?text=${whatsappMessage}`

  const serviciosMedicina = [
  'Servicio de Medicina General',
  'Consulta Médica',
  'Lavado de oído',
  'Suturas',
  'Retiro de métodos anticonceptivos',
  'Retiro de puntos',
  'Servicio de Papanicolaou',
  'Atención a niños y adultos',
]

  return (
    <main className="medical-page">
      <section
        className="service-hero-banner medical-hero"
        style={{
          backgroundImage: "url('/images/dispensario/medgeneral.jpg')",
        }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content medical-hero-content">
          <h1 className="hero-fade reveal-delay-1">Medicina General</h1>

          <p className="hero-fade reveal-delay-2">
            Atención médica general para el cuidado diario de tu salud.
          </p>
        </div>
      </section>

      <section className="medical-info-section">
        <div className="container medical-info-grid">
          <div className="medical-info-copy reveal-left">
            <p className="medical-kicker">Medicina General</p>

            <h2>Servicios disponibles</h2>

            <div className="medical-schedule-list">
              {serviciosMedicina.map((servicio) => (
                <div className="medical-schedule-item" key={servicio}>
                  <strong>{servicio}</strong>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="medical-whatsapp-btn"
            >
              Solicitar información por WhatsApp
            </a>
          </div>

          <div className="medical-schedule-card reveal-right">
            <p className="medical-card-label">Horarios</p>

            <h3>Consulta</h3>

            <div className="medical-schedule-list">
              <div className="medical-schedule-item">
                <span>Lunes a viernes</span>
                <strong>8:00 a 17:00</strong>
              </div>

              <div className="medical-schedule-item">
                <span>Sábados</span>
                <strong>8:00 a 12:00</strong>
              </div>
            </div>

            <div className="medical-note">
              <strong>Atención presencial</strong>
              <p>Las consultas se realizan en el Dispensario Sagrada Familia.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MedicinaGeneralPage