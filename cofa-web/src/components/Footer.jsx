import { contacts } from '../data/siteData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img
            src="/images/logo/cofa-logo2.png"
            alt="Logo de COFA"
            className="footer-brand-logo"
          />

          <div className="footer-brand-copy">
            <h2>COFA</h2>
            <p>Centro de Orientación Familiar</p>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-column">
            <h3>Contacto</h3>
            <p>Teléfonos: {contacts.cofa.phone1} / {contacts.cofa.phone2}</p>
            <p>WhatsApp: {contacts.cofa.whatsapp}</p>
            <p>Correo: {contacts.cofa.email}</p>
            <p>Dirección: {contacts.address}</p>
          </div>

          <div className="footer-column">
            <h3>Dispensario</h3>
            <p>Teléfono: {contacts.dispensario.phone}</p>
            <p>WhatsApp: {contacts.dispensario.whatsapp}</p>
          </div>

          <div className="footer-column">
            <h3>Horarios</h3>
            <p>{contacts.dispensario.schedule}</p>
            <p>
              COFA trabaja según reservaciones, horarios y actividades programadas
              de cada grupo.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Comunícate por WhatsApp para información y reservaciones.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer