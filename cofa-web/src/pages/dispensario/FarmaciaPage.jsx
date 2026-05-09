import useRevealOnScroll from '../../hooks/useRevealOnScroll'

function FarmaciaPage() {
  useRevealOnScroll()

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera solicitar información sobre la Farmacia del Dispensario Sagrada Familia. Me gustaría consultar disponibilidad de medicamentos, horarios de atención y precios aproximados.',
  )

  const whatsappUrl = `https://wa.me/50237908767?text=${whatsappMessage}`

  return (
    <main className="pharmacy-page">
      <section
        className="service-hero-banner pharmacy-hero"
        style={{
          backgroundImage: "url('/images/dispensario/farmacia.jpg')",
        }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content pharmacy-hero-content">
          <h1 className="hero-fade reveal-delay-1">Farmacia</h1>

          <p className="hero-fade reveal-delay-2">
            Medicamentos disponibles dentro del Dispensario Sagrada Familia.
          </p>
        </div>
      </section>

      <section className="pharmacy-main-section">
        <div className="container pharmacy-main-grid">
          <div className="pharmacy-image-card reveal-left">
            <img
              src="/images/dispensario/farmacia2.jpg"
              alt="Farmacia del Dispensario Sagrada Familia"
            />
          </div>

          <div className="pharmacy-copy-card reveal-right">
            <p className="pharmacy-kicker">Farmacia del Dispensario</p>

            <h2>Medicina accesible para la comunidad.</h2>

            <p>
              Contamos con nuestra farmacia al interior del dispensario. En ella
              encontrará la medicina que busca con precios módicos y atención
              cercana.
            </p>

            <div className="pharmacy-highlight-box">
              <span>Información útil</span>
              <p>
                Para consultar disponibilidad de medicamentos, puede comunicarse
                por WhatsApp o presentarse directamente en el Dispensario.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="pharmacy-whatsapp-btn"
            >
              Solicitar información por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FarmaciaPage