import { contacts } from '../data/siteData'

function Contacto() {
  return (
    <main className="inner-page">
      <div className="container inner-hero">
        <p className="section-kicker">Contacto</p>
        <h1>Canales informativos</h1>

        <div className="contact-columns">
          <div className="soft-card">
            <h3>COFA</h3>
            <p>Tel. {contacts.cofa.phone1}</p>
            <p>Tel. {contacts.cofa.phone2}</p>
            <p>WhatsApp {contacts.cofa.whatsapp}</p>
          </div>

          <div className="soft-card">
            <h3>Dispensario</h3>
            <p>Tel. {contacts.dispensario.phone}</p>
            <p>WhatsApp {contacts.dispensario.whatsapp}</p>
            <p>{contacts.dispensario.schedule}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacto