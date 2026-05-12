import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'

function Dispensario() {
  const location = useLocation()
  const [activeSlide, setActiveSlide] = useState(0)

  const [serviceSlides, setServiceSlides] = useState({
    medicina: 0,
    odontologia: 0,
    farmacia: 0,
    enfermeria: 0,
  })

  const animationKey = location.key

  const heroSlides = useMemo(
    () => [
      {
        id: 1,
        title: 'Atención médica accesible.',
        image: '/images/hero/Dispensario.jpg',
      },
      {
        id: 2,
        title: 'Servicios con sentido humano.',
        image: '/images/hero/Clinica.jpg',
      },
      {
        id: 3,
        title: 'Salud para la comunidad.',
        image: '/images/dispensario/odonto.jpg',
      },
    ],
    [],
  )

  const dispensarioServices = useMemo(
    () => [
      {
        id: 'medicina-general',
        key: 'medicina',
        title: 'Medicina General',
        description:
          'Atención presencial para consultas generales con precios accesibles.',
        images: [
          '/images/hero/Clinica.jpg',
          '/images/hero/Clinica 2.jpg',
          '/images/hero/Clinica 3.jpg',
        ],
      },
      {
        id: 'odontologia',
        key: 'odontologia',
        title: 'Odontología',
        description:
          'Servicio odontológico para el público en general con atención cercana.',
        images: [
          '/images/hero/Odontologia persona.jpg',
          '/images/hero/Slaon Odonto.jpg',
          '/images/hero/Clinica 4.jpg',
        ],
      },
      {
        id: 'farmacia',
        key: 'farmacia',
        title: 'Farmacia',
        description:
          'Medicamentos originales de casas farmacéuticas oficiales a precios accesibles.',
        images: [
          '/images/hero/Dispensario Farmacia.jpg',
          '/images/hero/Pasillo Dispensario.jpg',
          '/images/hero/Dispensario.jpg',
        ],
      },
      {
        id: 'enfermeria',
        key: 'enfermeria',
        title: 'Enfermería',
        description:
          'Apoyo en servicios básicos de enfermería y orientación presencial.',
        images: [
          '/images/hero/Pasillo Dispensario.jpg',
          '/images/hero/Banios Dispensario.jpg',
          '/images/hero/Clinica 2.jpg',
        ],
      },
    ],
    [],
  )

  const serviceImagePreloadList = useMemo(() => {
    return dispensarioServices.flatMap((service) => service.images)
  }, [dispensarioServices])

  useEffect(() => {
    setActiveSlide(0)

    setServiceSlides({
      medicina: 0,
      odontologia: 0,
      farmacia: 0,
      enfermeria: 0,
    })

    if (location.hash) {
      const section = document.querySelector(location.hash)

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.key, location.hash])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroSlides.length, location.key])

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceSlides((current) => ({
        medicina: (current.medicina + 1) % 3,
        odontologia: (current.odontologia + 1) % 3,
        farmacia: (current.farmacia + 1) % 3,
        enfermeria: (current.enfermeria + 1) % 3,
      }))
    }, 4000)

    return () => clearInterval(timer)
  }, [location.key])

  useEffect(() => {
    serviceImagePreloadList.forEach((src) => {
      const image = new Image()
      image.src = src
    })
  }, [serviceImagePreloadList])

  const goPrev = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    )
  }

  const goNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  return (
    <main className="dispensario-page" key={animationKey}>
      <section className="dispensario-hero-section">
        <div className="dispensario-hero-slider">
          {heroSlides.map((slide, index) => (
            <article
              key={`${slide.id}-${animationKey}`}
              className={`dispensario-hero-slide ${
                index === activeSlide ? 'active' : ''
              }`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="dispensario-hero-layer" />

              <div className="container dispensario-hero-inner">
                <div className="dispensario-hero-brand">Dispensario</div>

                <div className="dispensario-hero-message">
                  <h1>{slide.title}</h1>

                  <div className="dispensario-hero-actions">
                    <a href="#dispensario-servicios" className="btn btn-primary">
                      Ver servicios
                    </a>

                    <Link to="/dispensario/contacto" className="btn btn-secondary">
                      Contacto
                    </Link>
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

        <div className="hero-controls" aria-label="Cambiar slide del dispensario">
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

      <section className="dispensario-about-section" id="dispensario-nosotros">
        <div className="dispensario-about-grid">
          <Reveal className="dispensario-about-reveal-left">
            <div className="dispensario-about-image">
              <img
                src="/images/hero/Dispensario.jpg"
                alt="Dispensario Sagrada Familia"
                loading="eager"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal className="dispensario-about-reveal-right" delay={140}>
            <div className="dispensario-about-copy">
              <p className="dispensario-about-main-title">QUIÉNES SOMOS</p>

              <h2>Atención accesible con sentido humano</h2>

              <p>
                El Dispensario Sagrada Familia es la cara social del Movimiento
                Familiar Cristiano. Brinda servicios de salud con atención
                presencial, precios accesibles y una orientación cercana para la
                comunidad.
              </p>

              <p>
                Actualmente ofrece medicina general, odontología, farmacia y
                enfermería, procurando que las personas puedan acceder a servicios
                básicos de salud de forma más económica que en un centro privado.
              </p>

              <Link to="/dispensario/contacto" className="dispensario-about-btn">
                Más información
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dispensario-services-section" id="dispensario-servicios">
        <div className="container">
          <Reveal key={`dispensario-services-head-${animationKey}`}>
            <div className="dispensario-services-head">
              <p className="dispensario-kicker">SERVICIOS</p>
              <h2>Servicios de salud para el público.</h2>
              <p>
                Atención presencial en áreas esenciales del dispensario, con
                horarios establecidos y orientación informativa por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="dispensario-services-grid">
            {dispensarioServices.map((service, index) => {
              const activeImageIndex = serviceSlides[service.key] ?? 0
              const activeImage = service.images[activeImageIndex] || service.images[0]

              return (
                <Reveal key={`${service.id}-${animationKey}`} delay={index * 120}>
                  <Link
                    to={`/dispensario/servicios/${service.id}`}
                    className="dispensario-service-card"
                    aria-label={`Ver servicio de ${service.title}`}
                  >
                    <div
                      className="dispensario-service-image-wrap"
                      style={{
                        backgroundImage: `url("${activeImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      {service.images.map((image, imgIndex) => (
                        <img
                          key={image}
                          src={image}
                          alt={service.title}
                          loading="eager"
                          decoding="async"
                          fetchPriority={index === 0 && imgIndex === 0 ? 'high' : 'auto'}
                          className={`dispensario-service-image ${
                            imgIndex === activeImageIndex ? 'active' : ''
                          }`}
                          onError={(event) => {
                            event.currentTarget.style.display = 'none'
                          }}
                        />
                      ))}

                      <div className="dispensario-service-overlay" />
                    </div>

                    <div className="dispensario-service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="dispensario-location-section" id="dispensario-ubicacion">
        <div className="container location-shell">
          <div className="location-heading">
            <h2>Visítanos</h2>
          </div>

          <div className="location-actions">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=RFXF%2BVGV%2C%2023%20avenida%209-60%20zona%203%20y%209na%20calle%2022-44%20zona%203%2C%20Quetzaltenango"
              target="_blank"
              rel="noreferrer"
              className="location-btn location-btn-primary"
            >
              Abrir en Google Maps
            </a>

            <a
              href="https://waze.com/ul?q=RFXF%2BVGV%2C%2023%20avenida%209-60%20zona%203%20y%209na%20calle%2022-44%20zona%203%2C%20Quetzaltenango&navigate=yes"
              target="_blank"
              rel="noreferrer"
              className="location-btn location-btn-secondary"
            >
              Abrir en Waze
            </a>
          </div>

          <div className="location-map-card">
            <iframe
              title="Ubicación del Dispensario Sagrada Familia"
              src="https://www.google.com/maps?q=RFXF%2BVGV,%2023%20avenida%209-60%20zona%203%20y%209na%20calle%2022-44%20zona%203,%20Quetzaltenango&z=17&output=embed"
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

export default Dispensario