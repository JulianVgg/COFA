import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { heroSlides } from '../data/siteData'

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [serviceSlides, setServiceSlides] = useState({
    hospedaje: 0,
    alimentacion: 0,
    salones: 0,
  })

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goPrev = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const goNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  const handleSlideClick = (slide) => {
    navigate(slide.targetPrimary)
  }

  const cofaServices = useMemo(
    () => [
      {
        id: 'hospedaje',
        title: 'Hospedaje',
        description:
          'Estancias cómodas para grupos y personas que buscan un ambiente acogedor y funcional.',
        images: [
          '/images/services/hospedaje-1.jpg',
          '/images/services/hospedaje-2.jpg',
          '/images/services/hospedaje-3.jpg',
        ],
      },
      {
        id: 'alimentacion',
        title: 'Alimentación',
        description:
          'Servicio de alimentación para actividades, convivencias y grupos con previa coordinación.',
        images: [
          '/images/services/alimentacion-1.jpg',
          '/images/services/alimentacion-2.jpg',
          '/images/services/alimentacion-3.jpg',
        ],
      },
      {
        id: 'salones',
        title: 'Salones',
        description:
          'Espacios para reuniones, eventos y actividades en una ubicación céntrica y accesible.',
        images: [
          '/images/services/salones-1.jpg',
          '/images/services/salones-2.jpg',
          '/images/services/salones-3.jpg',
        ],
      },
    ],
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceSlides((current) => ({
        hospedaje: (current.hospedaje + 1) % 3,
        alimentacion: (current.alimentacion + 1) % 3,
        salones: (current.salones + 1) % 3,
      }))
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <section className="hero-section">


        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <article
              key={slide.id}
              className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              onClick={() => handleSlideClick(slide)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSlideClick(slide)
                }
              }}
            >
              <div className="hero-layer" />

              <div className="container hero-inner hero-centered">
                <div
                  className="hero-copy hero-copy-centered"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="hero-eyebrow">{slide.eyebrow}</p>
                  <h1>{slide.title}</h1>
                  <p className="hero-text">{slide.text}</p>

                  <div className="hero-actions hero-actions-centered">
                    <a
                      href={slide.targetPrimary}
                      className="btn btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {slide.ctaPrimary}
                    </a>

                    <a
                      href={slide.targetSecondary}
                      className="btn btn-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {slide.ctaSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="hero-arrow hero-arrow-left"
          onClick={goPrev}
          aria-label="Slide anterior"
        >
          ‹
        </button>

        <button
          className="hero-arrow hero-arrow-right"
          onClick={goNext}
          aria-label="Slide siguiente"
        >
          ›
        </button>

        <div className="hero-controls" aria-label="Cambiar slide del hero">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={index === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="about-simple-section" id="nosotros">
        <div className="about-simple-grid">
          <Reveal>
            <div className="about-simple-copy">
              <p className="about-simple-kicker">QUIÉNES SOMOS</p>

              <h2 className="about-simple-title">
                Servicio y atención humana
              </h2>

              <p className="about-simple-text">
                COFA es un espacio orientado a brindar un ambiente acogedor,
                accesible y confiable para grupos, encuentros y actividades.
                Con el tiempo abrió sus puertas al público, ofreciendo servicios
                de hospedaje, alimentación y renta de salones en una ubicación
                céntrica de Quetzaltenango.
              </p>

              <a href="/nosotros" className="about-simple-button">
                Más información
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about-simple-image-shell">
              <img
                src="/images/about/about-cofa.jpeg"
                alt="Instalaciones de COFA"
                className="about-simple-image"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell services-cofa-section" id="servicios">
        <div className="container">
          <Reveal>
            <div className="services-cofa-head">
              <h2 className="services-cofa-title">Servicios</h2>
              <p className="services-cofa-intro">
                Ofrecemos espacios y servicios pensados para grupos,
                encuentros y actividades en un ambiente accesible y acogedor.
              </p>
            </div>
          </Reveal>

          <div className="services-cofa-grid">
            {cofaServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 120}>
                <a href="/servicios" className="service-cofa-card">
                  <div className="service-cofa-image-wrap">
                    {service.images.map((image, imgIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={service.title}
                        className={`service-cofa-image ${
                          imgIndex === serviceSlides[service.id] ? 'active' : ''
                        }`}
                      />
                    ))}
                    <div className="service-cofa-overlay" />
                  </div>

                  <div className="service-cofa-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell location-shell" id="ubicacion">
        <div className="container">
          <Reveal>
            <div className="section-head section-head-centered">
              <p className="section-kicker">Ubicación</p>
              <h2>Accesible, céntrico y fácil de encontrar.</h2>
              <p className="section-description">
                Muy cerca de la terminal central, una de las ventajas más mencionadas
                por quienes visitan el lugar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="map-shell">
              <iframe
                title="Mapa de ubicación de COFA"
                src="https://www.google.com/maps?q=23%20avenida%209-60%20zona%203,%20Quetzaltenango&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Home