import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()

  const isDispensario = location.pathname.includes('/dispensario')

  const mapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=23+avenida+9-60+zona+3,+Quetzaltenango,+Guatemala'

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand-row">
          <div className="footer-brand">
            <img
              src="/images/logo/cofa-logo2.png"
              alt="Logo de COFA"
              className="footer-brand-logo"
            />

            <div className="footer-brand-copy">
              <h3>
                {isDispensario
                  ? 'Dispensario Sagrada Familia'
                  : 'Centro de Orientación Familiar'}
              </h3>

              <p>{isDispensario ? 'Salud y servicio' : 'COFA'}</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Contacto</h4>

            <p>
              <a href="tel:+50277635579">Teléfono: 7763 5579</a>
              <br />
              <a href="tel:+50277674226">Teléfono: 7767 4226</a>
            </p>

            <p>
              <a
                href="https://wa.me/50259357112"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: 5935 7112
              </a>
            </p>

            <p>
              <a href="mailto:cofaquetzaltenango@yahoo.com">
                Correo: cofaquetzaltenango@yahoo.com
              </a>
            </p>

            <p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Dirección: 23 avenida 9-60 zona 3, Quetzaltenango
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h4>Dispensario</h4>

            <p>
              <a href="tel:+50277669043">Teléfono: 7766 9043</a>
            </p>

            <p>
              <a
                href="https://wa.me/50237908767"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: 3790 8767
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h4>Horarios</h4>

            <p>Lunes a viernes de 8:00 a 17:00 · sábados de 8:00 a 12:00</p>

            <p>
              COFA trabaja según reservaciones, horarios y actividades
              programadas de cada grupo.
            </p>
          </div>
        </div>

        <div className="footer-bottom-note">
          <a
            href="https://wa.me/50259357112"
            target="_blank"
            rel="noreferrer"
          >
            Comunícate por WhatsApp para información y reservaciones.
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer