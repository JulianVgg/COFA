import Reveal from '../components/Reveal'

function Nosotros() {
  return (
    <main className="about-page">
      <section className="about-hero-page">
        <div className="about-hero-overlay" />

        <div className="container about-hero-content">
          <Reveal>
            <h1>Historia y Propósito</h1>
          </Reveal>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="container about-intro-grid">
          <Reveal>
            <div className="about-intro-copy">
              <p>
                El Centro de Orientación Familiar, COFA, es sede del Movimiento
                Familiar Cristiano en Quetzaltenango. Sus instalaciones se abren
                a grupos eclesiales, entidades privadas, organizaciones y
                personas individuales que desean hacer uso de sus espacios y
                servicios.
              </p>

              <p>
                COFA fue pensado inicialmente como una casa de retiros para
                personas del Movimiento, con el propósito de contar con un
                ambiente propio para encuentros, formación y actividades. Con el
                tiempo, sus servicios se abrieron al público para ofrecer
                hospedaje, alimentación y alquiler de salones con previa
                reservación.
              </p>

              <p>
                Su ubicación céntrica en Quetzaltenango es uno de sus mayores
                valores, especialmente para grupos, instituciones y
                organizaciones que buscan un lugar accesible para realizar sus
                actividades.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="about-intro-image-card">
              <img
                src="/images/about/Jesus.jpg"
                alt="Instalaciones de COFA"
              />
            </div>
          </Reveal>
        </div>
      </section>

<section className="about-purpose-section">
  <div className="container">
    <Reveal>
      <div className="about-purpose-heading">
        <p className="about-section-label">Visión y misión</p>
        <h2>El propósito que orienta el servicio de COFA.</h2>
      </div>
    </Reveal>

    <div className="about-purpose-editorial">
      <Reveal>
        <article className="about-purpose-panel about-purpose-panel-vision">
          <h3>VISIÓN</h3>

          <p>
            Ser líderes en el Sur Occidente al proveer servicios de alta
            calidad y un ambiente agradable que coadyuven al
            fortalecimiento espiritual de sus miembros y usuarios.
          </p>
        </article>
      </Reveal>

      <Reveal delay={120}>
        <article className="about-purpose-panel about-purpose-panel-mission">
          <h3>MISIÓN</h3>

          <p>
            Proveer servicios de alimentación, hospedaje y espacios
            físicos para retiros, reuniones, convenciones, foros y
            eventos de formación del Movimiento Familiar Cristiano,
            grupos eclesiales, instituciones de servicios y empresas
            privadas.
          </p>
        </article>
      </Reveal>
    </div>
  </div>
</section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <Reveal>
            <div className="about-story-heading">
              <p className="about-section-label about-story-label">
                Nuestra historia
              </p>

              <h2>De una casa de retiros a un espacio abierto al público.</h2>

            </div>
          </Reveal>

          <div className="about-timeline">
            <Reveal delay={80}>
              <article className="about-timeline-item">
                <span>1948</span>

                <div>
                  <h3>Nacimiento del MFC en Latinoamérica</h3>

                  <p>
                    El Movimiento Familiar Cristiano nació en Buenos Aires,
                    Argentina, por iniciativa del Padre Richard y el matrimonio
                    Llorente. Posteriormente se difundió por distintos países de
                    América Latina.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={160}>
              <article className="about-timeline-item">
                <span>1961</span>

                <div>
                  <h3>Fundación en Guatemala</h3>

                  <p>
                    El MFC fue fundado en Guatemala por el matrimonio Fritz y
                    Hortencia Sonería y el Padre Richard. En 1963 recibió el
                    carácter de Movimiento Nacional.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={240}>
              <article className="about-timeline-item">
                <span>1962</span>

                <div>
                  <h3>Inicio en Quetzaltenango</h3>

                  <p>
                    En Quetzaltenango se iniciaron reuniones familiares en el
                    Colegio Liceo Guatemala. En 1963 se formó la primera
                    directiva local y se realizó el primer retiro conyugal.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={320}>
              <article className="about-timeline-item">
                <span>COFA</span>

                <div>
                  <h3>Una sede para servir</h3>

                  <p>
                    COFA surge como una sede propia para retiros y encuentros.
                    Luego se abrió al público para ofrecer salones,
                    alimentación y hospedaje con previa reservación.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Nosotros