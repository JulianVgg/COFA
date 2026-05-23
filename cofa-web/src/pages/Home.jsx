import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { heroSlides } from '../data/siteData'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  const [activeSlide, setActiveSlide] = useState(0)

  const [serviceSlides, setServiceSlides] = useState({
    hospedaje: 0,
    alimentacion: 0,
    salones: 0,
  })


  const animationKey = location.key


  useEffect(() => {
    setActiveSlide(0)

    setServiceSlides({
      hospedaje: 0,
      alimentacion: 0,
      salones: 0,
    })

    window.scrollTo(0, 0)
  }, [location.key])


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [location.key])

  const cofaServices = useMemo(
    () => [
      {
        id: 'hospedaje',
        title: 'Hospedaje',
        description:
        'Estancias cómodas para grupos y personas que buscan un ambiente tranquilo y acogedor.',
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
        'Servicio de alimentación con productos de calidad para sus actividades.',
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

  /*
    Slider de las cards de servicios.
    También se reinicia al volver al Home.
  */
  useEffect(() => {
    const timer = setInterval(() => {
      setServiceSlides((current) => ({
        hospedaje: (current.hospedaje + 1) % 3,
        alimentacion: (current.alimentacion + 1) % 3,
        salones: (current.salones + 1) % 3,
      }))
    }, 4000)

    return () => clearInterval(timer)
  }, [location.key])

  const goPrev = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const goNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  const handleSlideClick = (slide) => {
    navigate(slide.targetPrimary)
  }

  return (
    <main className="home-page" key={animationKey}>
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <article
              key={`${slide.id}-${animationKey}`}
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

              <div className="hero-inner">
                <div className="container hero-stage">
                  <div className="hero-brand-corner">{slide.eyebrow}</div>

                  <div className="hero-message-center">
                    <div
                      className="hero-message-box"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h1>{slide.title}</h1>

                      {slide.text && (
                        <p className="hero-text">{slide.text}</p>
                      )}

                      <div className="hero-actions hero-actions-centered">
                        <Link
                          to={slide.targetPrimary}
                          className="btn btn-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {slide.ctaPrimary}
                        </Link>

                        <Link
                          to={slide.targetSecondary}
                          className="btn btn-secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {slide.ctaSecondary}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="hero-arrow hero-arrow-left"
          onClick={goPrev}
          aria-label="Slide anterior"
        >
          ‹
        </button>

        <button
          type="button"
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

<section className="about-preview-section" id="nosotros">
  <div className="about-preview-grid">
    <Reveal className="about-preview-reveal-left">
      <div className="about-preview-copy">
        <p className="about-preview-kicker">QUIÉNES SOMOS</p>

        <h2 className="about-preview-title">Servicio y atención de calidad</h2>

        <p className="about-preview-text">
        COFA es un espacio orientado a brindar un ambiente acogedor,
        accesible y confiable para grupos, organizaciones, personas
        particulares y entidades religiosas.
        </p>

        <Link to="/nosotros" className="about-preview-btn">
          Más información
        </Link>
      </div>
    </Reveal>

    <Reveal className="about-preview-reveal-right" delay={140}>
      <div className="about-preview-image">
        <img
          src="/images/about/about-cofa.jpeg"
          alt="Instalaciones de COFA"
        />
      </div>
    </Reveal>
  </div>
</section>

      <section className="section-shell services-cofa-section" id="servicios">
        <div className="container">
          <Reveal key={`services-head-${animationKey}`}>
            <div className="services-cofa-head">
              <h2 className="services-cofa-title">Servicios</h2>
              <p className="services-cofa-intro">
               Ofrecemos espacios y servicios en un ambiente tranquilo,
                acogedor y accesible.
              </p>
            </div>
          </Reveal>

          <div className="services-cofa-grid">
            {cofaServices.map((service, index) => (
              <Reveal key={`${service.id}-${animationKey}`} delay={index * 120}>
                <Link
                  to={`/servicios/${service.id}`}
                  className="service-cofa-card"
                >
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section" id="ubicacion">
        <div className="container location-shell">
          <div className="location-heading">
            <p className="location-kicker"></p>
            <h2>Visítanos</h2>
          </div>

          <div className="location-actions">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=23+avenida+9-60+zona+3,+Quetzaltenango,+Guatemala"
              target="_blank"
              rel="noreferrer"
              className="location-btn location-btn-primary"
            >
              Abrir en Google Maps
            </a>

            <a
              href="https://waze.com/ul?q=23%20avenida%209-60%20zona%203%20Quetzaltenango%20Guatemala&navigate=yes"
              target="_blank"
              rel="noreferrer"
              className="location-btn location-btn-secondary"
            >
              Abrir en Waze
            </a>
          </div>

          <div className="location-map-card">
            <iframe
              title="Ubicación de COFA"
              src="https://www.google.com/maps?q=23%20avenida%209-60%20zona%203,%20Quetzaltenango&z=16&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home