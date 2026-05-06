import { useEffect, useMemo, useState } from 'react'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

function AlimentacionPage() {
  useRevealOnScroll()

  const [slideIndex, setSlideIndex] = useState(0)

  const foodSlides = useMemo(
    () => [
      '/images/alimentacion/alimentacion-1.jpg',
      '/images/alimentacion/alimentacion-2.jpg',
      '/images/alimentacion/alimentacion-3.jpg',
      '/images/alimentacion/alimentacion-4.jpg',
      '/images/alimentacion/alimentacion-5.jpg',
    ],
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((current) => (current + 1) % foodSlides.length)
    }, 4300)

    return () => clearInterval(timer)
  }, [foodSlides])

  const prevSlide = () => {
    setSlideIndex((current) => (current - 1 + foodSlides.length) % foodSlides.length)
  }

  const nextSlide = () => {
    setSlideIndex((current) => (current + 1) % foodSlides.length)
  }

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera solicitar información sobre el servicio de alimentación de COFA. Me gustaría conocer disponibilidad, opciones para grupos y cómo se coordina el servicio.',
  )

  const whatsappUrl = `https://wa.me/50259357112?text=${whatsappMessage}`

  return (
    <main className="food-page">
      <section
        className="service-hero-banner food-hero-banner"
        style={{ backgroundImage: "url('/images/alimentacion/hero-alimentacion.jpg')" }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content food-hero-content">
          <h1 className="hero-fade reveal-delay-1">Alimentación</h1>

          <p className="hero-fade reveal-delay-2">
            Sabores tradicionales, atención organizada y opciones pensadas para
            acompañar eventos, reuniones y actividades grupales.
          </p>
        </div>
      </section>

      <section className="food-split-section">
        <div className="food-split-grid">
          <div className="food-split-copy reveal-left">
            <p className="food-kicker reveal-up reveal-delay-1">
              Servicio de alimentación
            </p>

            <h2 className="reveal-up reveal-delay-2">
              Nuestros
              <br />
              platillos
              <br />
              regionales
              <br />
              serán el
              <br />
              toque para
              <br />
              que su
              <br />
              evento sea
              <br />
              de éxito.
            </h2>

            <div className="food-services-list reveal-up reveal-delay-3">
              <div className="food-service-chip">Desayunos</div>
              <div className="food-service-chip">Refacciones AM y PM</div>
              <div className="food-service-chip">Almuerzos</div>
              <div className="food-service-chip">Cenas</div>
              <div className="food-service-chip">Cafetera permanente y agua pura</div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn reveal-up reveal-delay-4"
            >
              Solicitar información
            </a>
          </div>

          <div className="food-split-media reveal-right">
            <div className="food-slider">
              {foodSlides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Servicio de alimentación COFA"
                  className={`food-slide ${index === slideIndex ? 'active' : ''}`}
                />
              ))}

              <div className="food-slider-overlay" />

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-left"
                onClick={prevSlide}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-right"
                onClick={nextSlide}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AlimentacionPage