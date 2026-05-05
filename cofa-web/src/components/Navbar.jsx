import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand">
          <div className="brand-logo-box">
            <img
              src="/images/logo/cofa-logo4.png"
              alt="Logo de COFA"
              className="brand-logo"
            />
          </div>

          <div className="brand-copy">
            <h1 className="brand-title">Centro de Orientacion Familiar</h1>
            <p className="brand-subtitle">COFA</p>
          </div>
        </Link>

        <nav className="main-nav">
          <NavLink to="/#ubicacion">Ubicacion</NavLink>

          <div className="nav-dropdown">
            <span className="nav-dropdown-trigger">Servicios</span>

            <div className="nav-dropdown-menu">
              <Link to="/servicios/hospedaje">Hospedaje</Link>
              <Link to="/servicios/alimentacion">Alimentacion</Link>
              <Link to="/servicios/salones">Salones</Link>
            </div>
          </div>

          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/dispensario">Dispensario</NavLink>

          <NavLink to="/contacto" className="nav-cta">
            Contacto
          </NavLink>

          <div className="nav-socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-social-btn"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" className="nav-social-icon" aria-hidden="true">
                <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.2-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.2H8v3.2h2.1V21h3.4z" />
              </svg>
            </a>

            <a
              href="https://wa.me/50200000000"
              target="_blank"
              rel="noreferrer"
              className="nav-social-btn"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg viewBox="0 0 32 32" className="nav-social-icon nav-social-icon-whatsapp" aria-hidden="true">
                <path d="M16.02 3C8.85 3 3.03 8.72 3.03 15.78c0 2.25.6 4.45 1.75 6.38L3 29l7.02-1.82A13.2 13.2 0 0 0 16.02 28C23.18 28 29 22.28 29 15.22C29 8.72 23.18 3 16.02 3Zm0 22.76c-1.86 0-3.68-.5-5.27-1.44l-.38-.22l-4.17 1.08l1.12-4.02l-.25-.41a10.4 10.4 0 0 1-1.59-5.5c0-5.78 4.74-10.48 10.56-10.48c5.82 0 10.56 4.7 10.56 10.48c0 5.78-4.74 10.51-10.58 10.51Zm5.8-7.85c-.32-.16-1.89-.92-2.18-1.02c-.29-.11-.5-.16-.71.16c-.21.31-.82 1.02-1 1.23c-.18.21-.37.24-.69.08c-.32-.16-1.35-.49-2.57-1.55c-.95-.84-1.59-1.88-1.77-2.2c-.18-.31-.02-.48.14-.64c.14-.14.32-.37.48-.55c.16-.18.21-.31.32-.52c.11-.21.05-.39-.03-.55c-.08-.16-.71-1.69-.98-2.31c-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39c-.29.31-1.1 1.07-1.1 2.62c0 1.55 1.13 3.04 1.29 3.25c.16.21 2.23 3.36 5.4 4.71c.75.32 1.34.51 1.8.65c.76.24 1.45.2 1.99.12c.61-.09 1.89-.76 2.16-1.49c.27-.73.27-1.36.19-1.49c-.08-.13-.29-.21-.61-.37Z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar