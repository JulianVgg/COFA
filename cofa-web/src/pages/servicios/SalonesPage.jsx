import { useEffect, useMemo, useState } from 'react'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

function SalonesPage() {
  useRevealOnScroll()

  const [grandesIndex, setGrandesIndex] = useState(0)
  const [medianosIndex, setMedianosIndex] = useState(0)
  const [pequenosIndex, setPequenosIndex] = useState(0)

  const grandesSlides = useMemo(
    () => [
      '/images/salones/grandes-1.jpg',
      '/images/salones/grandes-2.jpg',
      '/images/salones/grandes-3.jpg',
    ],
    [],
  )

  const medianosSlides = useMemo(
    () => [
      '/images/salones/medianos-1.jpg',
      '/images/salones/medianos-2.jpg',
      '/images/salones/medianos-3.jpg',
    ],
    [],
  )

  const pequenosSlides = useMemo(
    () => [
      '/images/salones/pequenos-1.jpg',
      '/images/salones/pequenos-2.jpg',
      '/images/salones/pequenos-3.jpg',
    ],
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setGrandesIndex((current) => (current + 1) % grandesSlides.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [grandesSlides])

  useEffect(() => {
    const timer = setInterval(() => {
      setMedianosIndex((current) => (current + 1) % medianosSlides.length)
    }, 4400)

    return () => clearInterval(timer)
  }, [medianosSlides])

  useEffect(() => {
    const timer = setInterval(() => {
      setPequenosIndex((current) => (current + 1) % pequenosSlides.length)
    }, 4600)

    return () => clearInterval(timer)
  }, [pequenosSlides])

  const prev = (setter, length) => {
    setter((current) => (current - 1 + length) % length)
  }

  const next = (setter, length) => {
    setter((current) => (current + 1) % length)
  }

  return (
    <main className="salones-page">
      <section
        className="service-hero-banner"
        style={{ backgroundImage: "url('/images/salones/hero-salones.jpg')" }}
      >
        <div className="service-hero-overlay" />
        <div className="container service-hero-content">
          <p className="service-hero-kicker hero-fade reveal-delay-1">COFA</p>
          <h1 className="hero-fade reveal-delay-2">Salones</h1>
          <p className="hero-fade reveal-delay-3">
            Contamos con 7 salones, con capacidad de 10 hasta 100 personas,
            pensados para reuniones, encuentros, capacitaciones y actividades especiales.
          </p>
        </div>
      </section>

      <section className="salones-intro reveal-up">
        <div className="container salones-intro-inner">
          <p className="food-kicker reveal-up reveal-delay-1">Alquiler de salones</p>
          <h2 className="reveal-up reveal-delay-2">Espacios para diferentes tipos de grupos y actividades.</h2>
          <p className="reveal-up reveal-delay-3">
            COFA ofrece salones grandes, medianos y pequeños para adaptarse al tamaño
            de cada encuentro, manteniendo un ambiente funcional, cómodo y accesible.
          </p>
        </div>
      </section>

      <section className="hall-section hall-section-blue reveal-up">
        <div className="container hall-grid">
          <div className="hall-slider-box reveal-left">
            <p className="lodging-label">Salones grandes</p>

            <div className="hall-slider reveal-scale">
              {grandesSlides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Salones grandes de COFA"
                  className={`hall-slide ${index === grandesIndex ? 'active' : ''}`}
                />
              ))}

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-left"
                onClick={() => prev(setGrandesIndex, grandesSlides.length)}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-right"
                onClick={() => next(setGrandesIndex, grandesSlides.length)}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hall-copy hall-copy-light reveal-right">
            <h2>Espacios amplios</h2>
            <p>
              Ideales para actividades con mayor cantidad de personas, reuniones extensas,
              eventos organizados y encuentros que requieren amplitud y mejor distribución.
            </p>

            <a
              href="https://wa.me/50259357112"
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn hall-btn-light reveal-up reveal-delay-2"
            >
              Solicitar info
            </a>
          </div>
        </div>
      </section>

      <section className="hall-section hall-section-cream reveal-up">
        <div className="container hall-grid hall-grid-reverse">
          <div className="hall-copy reveal-left">
            <p className="lodging-label">Salones medianos</p>
            <h2>Una opción equilibrada para reuniones y actividades.</h2>
            <p>
              Pensados para grupos intermedios que necesitan un espacio cómodo,
              ordenado y adaptable según el tipo de actividad.
            </p>
            <p>
              Funcionan muy bien para capacitaciones, convivencias, reuniones de trabajo,
              encuentros pastorales o actividades con una asistencia moderada.
            </p>

            <a
              href="https://wa.me/50259357112"
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn rooms-contact-btn-cream reveal-up reveal-delay-2"
            >
              Solicitar info
            </a>
          </div>

          <div className="hall-slider-box reveal-right">
            <div className="hall-slider hall-slider-cream reveal-scale">
              {medianosSlides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Salones medianos de COFA"
                  className={`hall-slide ${index === medianosIndex ? 'active' : ''}`}
                />
              ))}

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-left"
                onClick={() => prev(setMedianosIndex, medianosSlides.length)}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-right"
                onClick={() => next(setMedianosIndex, medianosSlides.length)}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="hall-section hall-section-white reveal-up">
        <div className="container hall-grid">
          <div className="hall-slider-box reveal-left">
            <p className="lodging-label">Salones pequeños</p>

            <div className="hall-slider hall-slider-small reveal-scale">
              {pequenosSlides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Salones pequeños de COFA"
                  className={`hall-slide ${index === pequenosIndex ? 'active' : ''}`}
                />
              ))}

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-left"
                onClick={() => prev(setPequenosIndex, pequenosSlides.length)}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="lodging-slider-arrow lodging-slider-arrow-right"
                onClick={() => next(setPequenosIndex, pequenosSlides.length)}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hall-copy reveal-right">
            <h2>Espacios más íntimos para grupos reducidos.</h2>
            <p>
              Son una alternativa práctica para reuniones pequeñas, asesorías,
              encuentros puntuales o actividades que necesitan un ambiente más reservado.
            </p>
            <p>
              Su tamaño permite mantener cercanía, mejor interacción y una dinámica
              más personalizada dentro del espacio.
            </p>

            <a
              href="https://wa.me/50259357112"
              target="_blank"
              rel="noreferrer"
              className="rooms-contact-btn reveal-up reveal-delay-2"
            >
              Solicitar info
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SalonesPage