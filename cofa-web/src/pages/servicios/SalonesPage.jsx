import { useEffect, useState } from 'react'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const salones = [
  {
    nombre: 'Salón Sesiones',
    imagenes: [
      '/images/SalonesCOFA/sesiones1.jpg',
      '/images/SalonesCOFA/sesiones2.jpg',
    ],
    mesasSillas: '18',
    soloSillas: '—',
    mensaje:
      'Hola, quisiera solicitar información sobre el Salón Sesiones de COFA. Me gustaría conocer disponibilidad, precios y cómo se coordina la reservación.',
  },
  {
    nombre: 'Salón Pedro Richard',
    imagenes: [
      '/images/SalonesCOFA/richard1.jpg',
      '/images/SalonesCOFA/richard2.jpg',
    ],
    mesasSillas: '30',
    soloSillas: '60',
    mensaje:
      'Hola, quisiera solicitar información sobre el Salón Pedro Richard de COFA. Me gustaría conocer disponibilidad, precios y cómo se coordina la reservación.',
  },
  {
    nombre: 'Salón Grijalva',
    imagenes: [
      '/images/SalonesCOFA/grijalva1.jpg',
      '/images/SalonesCOFA/grijalva2.jpg',
      '/images/SalonesCOFA/grijalva3.jpg',
    ],
    mesasSillas: '40',
    soloSillas: '75',
    mensaje:
      'Hola, quisiera solicitar información sobre el Salón Grijalva de COFA. Me gustaría conocer disponibilidad, precios y cómo se coordina la reservación.',
  },
  {
    nombre: 'Salón José María',
    imagenes: [
      '/images/SalonesCOFA/josemaria1.jpg',
      '/images/SalonesCOFA/josemaria2.jpg',
    ],
    mesasSillas: '100',
    soloSillas: '150',
    mensaje:
      'Hola, quisiera solicitar información sobre el Salón José María de COFA. Me gustaría conocer disponibilidad, precios y cómo se coordina la reservación.',
  },
  {
    nombre: 'Salón Richter',
    imagenes: [
      '/images/SalonesCOFA/richter1.jpg',
      '/images/SalonesCOFA/richter2.jpg',
    ],
    mesasSillas: '250',
    soloSillas: '350',
    mensaje:
      'Hola, quisiera solicitar información sobre el Salón Richter de COFA. Me gustaría conocer disponibilidad, precios y cómo se coordina la reservación.',
  },
]

function SalonesPage() {
  useRevealOnScroll()

  const [activeSlides, setActiveSlides] = useState(
    salones.reduce((acc, salon) => {
      acc[salon.nombre] = 0
      return acc
    }, {}),
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlides((current) => {
        const nextSlides = { ...current }

        salones.forEach((salon) => {
          nextSlides[salon.nombre] =
            (nextSlides[salon.nombre] + 1) % salon.imagenes.length
        })

        return nextSlides
      })
    }, 4300)

    return () => clearInterval(timer)
  }, [])

  const getWhatsappUrl = (mensaje) => {
    return `https://wa.me/50259357112?text=${encodeURIComponent(mensaje)}`
  }

  const prevSlide = (salon) => {
    setActiveSlides((current) => ({
      ...current,
      [salon.nombre]:
        (current[salon.nombre] - 1 + salon.imagenes.length) %
        salon.imagenes.length,
    }))
  }

  const nextSlide = (salon) => {
    setActiveSlides((current) => ({
      ...current,
      [salon.nombre]:
        (current[salon.nombre] + 1) % salon.imagenes.length,
    }))
  }

  return (
    <main className="halls-page">
      <section
        className="service-hero-banner halls-hero"
        style={{ backgroundImage: "url('/images/salones/hero-salones.jpg')" }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content halls-hero-content">
          <h1 className="hero-fade reveal-delay-1">Salones</h1>

        </div>
      </section>

      <section className="halls-intro-section">
        <div className="container halls-intro-content reveal-up">
          <p className="halls-kicker">Alquiler de salones</p>

          <h2>Espacios para diferentes tipos de grupos y actividades.</h2>
        </div>
      </section>

      <section className="halls-list-section">
        {salones.map((salon, index) => {
          const isReverse = index % 2 !== 0
          const activeIndex = activeSlides[salon.nombre] || 0

          return (
            <article
              key={salon.nombre}
              className={`hall-showcase ${isReverse ? 'hall-showcase-reverse' : ''}`}
            >
              <div className="container hall-showcase-grid">
                <div className="hall-showcase-copy reveal-left">
                  <h2>{salon.nombre}</h2>

                  <div className="hall-info-card">
                    <div className="hall-info-header">
                      <span>Capacidad</span>
                      <span>Personas</span>
                    </div>

                    <div className="hall-info-row">
                      <span>Mesas y sillas</span>
                      <strong>{salon.mesasSillas}</strong>
                    </div>

                    <div className="hall-info-row">
                      <span>Solo sillas</span>
                      <strong>{salon.soloSillas}</strong>
                    </div>
                  </div>

                  <a
                    href={getWhatsappUrl(salon.mensaje)}
                    target="_blank"
                    rel="noreferrer"
                    className="hall-contact-btn"
                  >
                    Solicitar información
                  </a>
                </div>

                <div className="hall-showcase-media hall-carousel reveal-right">
                  {salon.imagenes.map((imagen, imgIndex) => (
                    <img
                      key={imagen}
                      src={imagen}
                      alt={`${salon.nombre} ${imgIndex + 1}`}
                      className={`hall-carousel-slide ${
                        imgIndex === activeIndex ? 'active' : ''
                      }`}
                    />
                  ))}

                  <button
                    type="button"
                    className="hall-carousel-arrow hall-carousel-arrow-left"
                    onClick={() => prevSlide(salon)}
                    aria-label="Imagen anterior"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="hall-carousel-arrow hall-carousel-arrow-right"
                    onClick={() => nextSlide(salon)}
                    aria-label="Imagen siguiente"
                  >
                    ›
                  </button>

                  <div className="hall-carousel-dots">
                    {salon.imagenes.map((imagen, imgIndex) => (
                      <button
                        key={imagen}
                        type="button"
                        className={`hall-carousel-dot ${
                          imgIndex === activeIndex ? 'active' : ''
                        }`}
                        onClick={() =>
                          setActiveSlides((current) => ({
                            ...current,
                            [salon.nombre]: imgIndex,
                          }))
                        }
                        aria-label={`Ver imagen ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default SalonesPage