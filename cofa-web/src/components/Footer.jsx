import { contacts } from '../data/siteData'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>COFA</h3>
          <p>Teléfonos: {contacts.cofa.phone1} / {contacts.cofa.phone2}</p>
          <p>WhatsApp: {contacts.cofa.whatsapp}</p>
        </div>

        <div>
          <h3>Dispensario</h3>
          <p>Teléfono: {contacts.dispensario.phone}</p>
          <p>WhatsApp: {contacts.dispensario.whatsapp}</p>
          <p>Horario: {contacts.dispensario.schedule}</p>
        </div>

        <div>
          <h3>Ubicación</h3>
          <p>Quetzaltenango, Guatemala</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer