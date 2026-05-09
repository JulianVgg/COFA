import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const tratamientos = [
  'Rellenos dentales (resina)',
  'Limpieza dental y aplicación de flúor',
  'Extracciones dentales',
  'Tratamiento de canales',
  'Coronas dentales',
  'Prótesis total y prótesis removible',
  'Blanqueamiento dental',
  'Consulta',
]

function OdontologiaPage() {
  useRevealOnScroll()

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera solicitar información sobre el servicio de Odontología del Dispensario Sagrada Familia.',
  )

  const whatsappUrl = `https://wa.me/50237908767?text=${whatsappMessage}`

  return (
    <main className="dental-page">
      <section
        className="service-hero-banner dental-hero"
        style={{
          backgroundImage: "url('/images/dispensario/odonto.jpg')",
        }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content dental-hero-content">
          <h1 className="hero-fade reveal-delay-1">Odontología</h1>

          <p className="hero-fade reveal-delay-2">
            Servicios odontológicos para el cuidado de tu salud dental.
          </p>
        </div>
      </section>

      <section className="dental-info-section">
        <div className="container dental-modern-grid">
          <div className="dental-visual-card reveal-left">
            <img
              src="/images/dispensario/personaodonto.jpg"
              alt="Servicio de odontología"
              className="dental-visual-img"
            />

            <div className="dental-visual-overlay">
              <p className="dental-kicker">Odontología</p>

              <h2>Servicios disponibles</h2>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="dental-whatsapp-btn"
              >
                Solicitar información
              </a>
            </div>
          </div>

          <div className="dental-services-panel reveal-right">
            <p className="dental-card-label">Tratamientos</p>

            <h3>Atención dental</h3>

            <div className="dental-treatment-grid">
              {tratamientos.map((tratamiento, index) => (
                <div key={tratamiento} className="dental-treatment-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{tratamiento}</p>
                </div>
              ))}
            </div>

            <div className="dental-mini-note">
              Atención presencial en el Dispensario Sagrada Familia.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OdontologiaPage