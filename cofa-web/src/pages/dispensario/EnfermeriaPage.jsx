import { useEffect, useMemo, useState } from 'react'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const serviciosEnfermeria = [
  {
    title: 'Toma de signos vitales',
    image: '/images/enfermeriaservicios/signosvitales.jpg',
  },
  {
    title: 'Aplicación de medicamentos',
    image:  '/images/enfermeriaservicios/aplicarmeds.jpg',
  },
  {
    title: 'Prueba rápida de glucosa',
    image:  '/images/enfermeriaservicios/glucosa.jpg',
  },
  {
    title: 'Curaciones',
    image:  '/images/enfermeriaservicios/curaciones.jpg',
  },
  {
    title: 'Lavado de oído',
    image:  '/images/enfermeriaservicios/oido.jpg',
  },
  {
    title: 'Colocación de suero',
    image:  '/images/enfermeriaservicios/suero.jpg',
  },
  {
    title: 'Retiro de puntos',
    image:  '/images/enfermeriaservicios/puntos.jpg',
  },
]

function EnfermeriaPage() {
  useRevealOnScroll()

  const [activeSlide, setActiveSlide] = useState(0)

  const activeService = useMemo(
    () => serviciosEnfermeria[activeSlide],
    [activeSlide],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviciosEnfermeria.length)
    }, 4300)

    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + serviciosEnfermeria.length) % serviciosEnfermeria.length,
    )
  }

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % serviciosEnfermeria.length)
  }

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera solicitar información sobre el servicio de Enfermería del Dispensario Sagrada Familia. Me gustaría conocer horarios, disponibilidad y requisitos para recibir atención.',
  )

  const whatsappUrl = `https://wa.me/50237908767?text=${whatsappMessage}`

  return (
    <main className="nursing-page">
      <section
        className="service-hero-banner nursing-hero"
        style={{
          backgroundImage:
            "url('/images/dispensario/enfermeria.jpg')",
        }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content nursing-hero-content">
          <h1 className="hero-fade reveal-delay-1">Enfermería</h1>

          <p className="hero-fade reveal-delay-2">
            Atención personalizada con respeto, amabilidad y profesionalismo.
          </p>
        </div>
      </section>

      <section className="nursing-clean-section">
        <div className="container nursing-clean-grid">
          <div className="nursing-clean-title reveal-left">
            <h2>Atención cercana para el cuidado de la salud.</h2>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="nursing-whatsapp-btn"
            >
              Solicitar información
            </a>
          </div>

          <div className="nursing-service-slider reveal-right">
            <div className="nursing-service-slide">
              {serviciosEnfermeria.map((service, index) => (
                <img
                  key={service.title}
                  src={service.image}
                  alt={service.title}
                  className={`nursing-service-slide-img ${
                    index === activeSlide ? 'active' : ''
                  }`}
                />
              ))}

              <div className="nursing-service-slide-overlay" />

              <div className="nursing-service-slide-content">
                <span>{String(activeSlide + 1).padStart(2, '0')}</span>

                <h3>{activeService.title}</h3>
              </div>

              <button
                type="button"
                className="nursing-service-arrow nursing-service-arrow-left"
                onClick={prevSlide}
                aria-label="Servicio anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="nursing-service-arrow nursing-service-arrow-right"
                onClick={nextSlide}
                aria-label="Servicio siguiente"
              >
                ›
              </button>
            </div>

            <div className="nursing-service-dots">
              {serviciosEnfermeria.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  className={index === activeSlide ? 'active' : ''}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ver ${service.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EnfermeriaPage