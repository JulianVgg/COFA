import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <h1 className="logo">COFA</h1>

        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/dispensario">Dispensario</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar