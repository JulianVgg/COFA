import { useEffect, useMemo, useState } from 'react'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

function HospedajePage() {
  useRevealOnScroll()

  const [generalIndex, setGeneralIndex] = useState(0)
  const [alaminosRoomIndex, setAlaminosRoomIndex] = useState(0)
  const [adveniatRoomIndex, setAdveniatRoomIndex] = useState(0)

  const generalSlides = useMemo(
    () => [
      '/images/hospedaje/general-1.jpg',
      '/images/hospedaje/general-2.jpg',
      '/images/hospedaje/general-3.jpg',
      '/images/hospedaje/general-4.jpg',
    ],
    [],
  )

  const alaminosRoomSlides = useMemo(
    () => [
      '/images/hospedaje/alaminos-room-1.jpg',
      '/images/hospedaje/alaminos-room-2.jpg',
      '/images/hospedaje/hospedaje-3.jpg',
    ],
    [],
  )

  const adveniatRoomSlides = useMemo(
    () => [
      '/images/hospedaje/adveniat-room-1.jpg',
      '/images/hospedaje/adveniat-room-2.jpg',
      '/images/hospedaje/adveniat-room-3.jpg',
      '/images/hospedaje/adveniat-room-4.jpg',
    ],
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setGeneralIndex((current) => (current + 1) % generalSlides.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [generalSlides])

  useEffect(() => {
    const timer = setInterval(() => {
      setAlaminosRoomIndex((current) => (current + 1) % alaminosRoomSlides.length)
    }, 4300)

    return () => clearInterval(timer)
  }, [alaminosRoomSlides])

  useEffect(() => {
    const timer = setInterval(() => {
      setAdveniatRoomIndex((current) => (current + 1) % adveniatRoomSlides.length)
    }, 4400)

    return () => clearInterval(timer)
  }, [adveniatRoomSlides])

  const prevGeneral = () => {
    setGeneralIndex((current) => (current - 1 + generalSlides.length) % generalSlides.length)
  }

  const nextGeneral = () => {
    setGeneralIndex((current) => (current + 1) % generalSlides.length)
  }

  const prevAlaminosRoom = () => {
    setAlaminosRoomIndex(
      (current) => (current - 1 + alaminosRoomSlides.length) % alaminosRoomSlides.length,
    )
  }

  const nextAlaminosRoom = () => {
    setAlaminosRoomIndex((current) => (current + 1) % alaminosRoomSlides.length)
  }

  const prevAdveniatRoom = () => {
    setAdveniatRoomIndex(
      (current) => (current - 1 + adveniatRoomSlides.length) % adveniatRoomSlides.length,
    )
  }

  const nextAdveniatRoom = () => {
    setAdveniatRoomIndex((current) => (current + 1) % adveniatRoomSlides.length)
  }

  return (
    <main className="lodging-page">
      <section
        className="service-hero-banner"
        style={{ backgroundImage: "url('/images/hospedaje/hero-hospedaje.jpg')" }}
      >
        <div className="service-hero-overlay" />
        <div className="container service-hero-content">
          <p className="service-hero-kicker hero-fade reveal-delay-1">COFA</p>
          <h1 className="hero-fade reveal-delay-2">Hospedaje</h1>
          <p className="hero-fade reveal-delay-3">
            Espacios de alojamiento pensados para grupos, encuentros y estancias
            en un ambiente cómodo, funcional y acogedor.
          </p>
        </div>
      </section>

      <section className="lodging-visual-hero reveal-up">
        <div className="container lodging-visual-header">
          <h2 className="reveal-up reveal-delay-1">Galería</h2>
        </div>

        <div className="lodging-visual-slider reveal-scale reveal-delay-2">
          {generalSlides.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Instalaciones de hospedaje de COFA"
              className={`lodging-visual-slide ${index === generalIndex ? 'active' : ''}`}
            />
          ))}

          <div className="lodging-visual-overlay" />

          <div className="container lodging-visual-copy">
            <p className="reveal-up reveal-delay-3">Un recorrido por las instalaciones de hospedaje</p>
          </div>

          <button
            type="button"
            className="lodging-slider-arrow lodging-slider-arrow-left"
            onClick={prevGeneral}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="lodging-slider-arrow lodging-slider-arrow-right"
            onClick={nextGeneral}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>
      </section>

      <section className="hotel-block hotel-block-alaminos reveal-up">
        <div className="container hotel-block-inner">
          <div className="hotel-block-copy reveal-left">
            <p className="lodging-label">Hotel Alaminos</p>
            <h2 className="hotel-block-title-main">Conócenos</h2>
            <p>
              El área de Alaminos forma parte de la propuesta de hospedaje de COFA,
              pensada para recibir grupos y personas que buscan una estancia funcional,
              accesible y en una ubicación conveniente dentro de Quetzaltenango.
            </p>
          </div>
        </div>
      </section>

      <section className="hotel-rooms-section hotel-rooms-section-light reveal-up">
        <div className="container hotel-rooms-grid">
          <div className="hotel-rooms-slider-wrap reveal-left">
            <p className="lodging-label">Habitaciones</p>

            <div className="hotel-rooms-slider reveal-scale">
              {alaminosRoomSlides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Habitaciones de Hotel Alaminos"
                  className={`hotel-room-slide ${index === alaminosRoomIndex ? 'active' : ''}`}
                />
              ))}

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-left"
                onClick={prevAlaminosRoom}
                aria-label="Habitación anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-right"
                onClick={nextAlaminosRoom}
                aria-label="Habitación siguiente"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hotel-rooms-copy reveal-right">
            <h2>Habitaciones pensadas para comodidad y organización.</h2>
            <p>
              COFA cuenta con espacios de hospedaje orientados a grupos y personas que
              necesitan una estancia práctica dentro de un ambiente tranquilo y funcional.
            </p>
            <p>
              La disponibilidad, distribución y asignación de habitaciones se maneja
              según el tipo de grupo, actividad y coordinación previa.
            </p>

            <a
              href="https://wa.me/50259357112"
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn reveal-up reveal-delay-2"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      <section className="hotel-block hotel-block-adveniat reveal-up">
        <div className="container hotel-block-inner">
          <div className="hotel-block-copy hotel-block-copy-dark hotel-block-copy-left reveal-left">
            <p className="lodging-label">Hotel Adveniat</p>
            <h2>Conócenos</h2>
            <p>
              Adveniat complementa la experiencia de hospedaje con espacios adecuados
              para actividades, encuentros y grupos que requieren organización previa
              y atención cercana.
            </p>
          </div>
        </div>
      </section>

      <section className="hotel-rooms-section hotel-rooms-section-cream reveal-up">
        <div className="container hotel-rooms-grid hotel-rooms-grid-reverse">
          <div className="hotel-rooms-copy reveal-left">
            <h2>Ambientes funcionales para grupos y estancias coordinadas.</h2>
            <p>
              El área de Adveniat ofrece otra alternativa de alojamiento dentro de COFA,
              manteniendo la idea de comodidad, organización y atención cercana.
            </p>
            <p>
              Estas habitaciones pueden adaptarse según la dinámica del grupo y la
              disponibilidad previamente coordinada.
            </p>

            <a
              href="https://wa.me/50259357112"
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn rooms-contact-btn-cream reveal-up reveal-delay-2"
            >
              Solicitar información
            </a>
          </div>

          <div className="hotel-rooms-slider-wrap reveal-right">
            <p className="lodging-label">Habitaciones</p>

            <div className="hotel-rooms-slider hotel-rooms-slider-cream reveal-scale">
              {adveniatRoomSlides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Habitaciones de Hotel Adveniat"
                  className={`hotel-room-slide ${index === adveniatRoomIndex ? 'active' : ''}`}
                />
              ))}

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-left"
                onClick={prevAdveniatRoom}
                aria-label="Habitación anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-right"
                onClick={nextAdveniatRoom}
                aria-label="Habitación siguiente"
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

export default HospedajePage