import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" aria-label="Ir al inicio de COFA">
          <img
            src="/images/logo/cofa-logo.png"
            alt="Logo de COFA"
            className="brand-logo"
          />

          <div className="brand-copy">
            <p className="brand-title">COFA</p>
            <p className="brand-subtitle">Centro de Orientación Familiar</p>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href={isHome ? '#ubicacion' : '/#ubicacion'}>Ubicación</a>
          <a href={isHome ? '#servicios' : '/#servicios'}>Servicios</a>
          <a href={isHome ? '#nosotros' : '/#nosotros'}>Nosotros</a>
          <NavLink to="/dispensario">Dispensario</NavLink>
          <NavLink to="/contacto" className="nav-cta">
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar