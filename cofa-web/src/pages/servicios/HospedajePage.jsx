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

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera solicitar información sobre hospedaje en COFA.',
  )

  const whatsappUrl = `https://wa.me/50259357112?text=${whatsappMessage}`

  return (
    <main className="lodging-page">
      <section
        className="service-hero-banner hospedaje-hero"
        style={{ backgroundImage: "url('/images/hospedaje/hero-hospedaje.jpg')" }}
      >
        <div className="service-hero-overlay" />

        <div className="container service-hero-content">
          <h1 className="hero-fade reveal-delay-1">Hospedaje</h1>

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
            <p className="reveal-up reveal-delay-3">
              Un recorrido por las instalaciones de hospedaje
            </p>
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

      {/* HOTEL ALAMINOS */}
     <section className="hotel-intro-split hotel-intro-split-blue reveal-up">
  <div className="hotel-intro-copy reveal-left">
    <h2>Hotel Alaminos</h2>
    <p>
      Hospedaje pensado para grupos, retiros y encuentros con una estancia
      cómoda, accesible y coordinada.
    </p>
  </div>

  <div className="hotel-intro-media reveal-right">
    <img
      src="/images/about/alaminos.jpeg"
      alt="Hotel Alaminos"
    />
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
            <p className="hotel-small-label">Hotel Alaminos</p>

            <h2>Habitaciones pensadas para comodidad y organización.</h2>

            <div className="hotel-info-card">
              <div className="hotel-info-header">
                <span>Nivel</span>
                <span>Dobles</span>
                <span>Triples</span>
              </div>

              <div className="hotel-info-row">
                <span>Alaminos 1er Nivel</span>
                <strong>—</strong>
                <strong>12</strong>
              </div>

              <div className="hotel-info-row">
                <span>Alaminos 2do Nivel</span>
                <strong>—</strong>
                <strong>12</strong>
              </div>

              <div className="hotel-info-total">
                <span>Total disponible</span>
                <strong>24 habitaciones triples</strong>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn reveal-up reveal-delay-2"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* HOTEL ADVENIAT */}
     <section className="hotel-intro-split hotel-intro-split-cream hotel-intro-split-reverse reveal-up">
  <div className="hotel-intro-media reveal-left">
    <img
      src="/images/about/adveniat.jpg"
      alt="Hotel Adveniat"
    />
  </div>

  <div className="hotel-intro-copy hotel-intro-copy-right reveal-right">
    <h2>Hotel Adveniat</h2>
    <p>
      Una opción complementaria de hospedaje para grupos y personas que
      buscan una estancia práctica y organizada.
    </p>
  </div>
</section>

      <section className="hotel-rooms-section hotel-rooms-section-cream reveal-up">
        <div className="container hotel-rooms-grid hotel-rooms-grid-reverse">
          <div className="hotel-rooms-copy reveal-left">
            <p className="hotel-small-label">Hotel Adveniat</p>

            <h2>Ambientes funcionales para grupos y estancias coordinadas.</h2>

            <div className="hotel-info-card hotel-info-card-cream">
              <div className="hotel-info-header">
                <span>Hotel</span>
                <span>Dobles</span>
                <span>Triples</span>
              </div>

              <div className="hotel-info-row">
                <span>Adveniat</span>
                <strong>5</strong>
                <strong>4</strong>
              </div>

              <div className="hotel-info-total">
                <span>Total disponible</span>
                <strong>5 dobles · 4 triples</strong>
              </div>
            </div>

            <a
              href={whatsappUrl}
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