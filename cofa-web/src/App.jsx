import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import HospedajePage from './pages/servicios/HospedajePage'
import AlimentacionPage from './pages/servicios/AlimentacionPage'
import SalonesPage from './pages/servicios/SalonesPage'
import Dispensario from './pages/Dispensario'
import MedicinaGeneralPage from './pages/dispensario/MedicinaGeneralPage'
import OdontologiaPage from './pages/dispensario/OdontologiaPage'
import FarmaciaPage from './pages/dispensario/FarmaciaPage'
import EnfermeriaPage from './pages/dispensario/EnfermeriaPage'
import ContactoDispensario from './pages/dispensario/ContactoDispensario'

function PlaceholderPage({ title }) {
  return (
    <main className="inner-page">
      <div className="container inner-hero">
        <h1>{title}</h1>
        <p>Esta página la trabajaremos después.</p>
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/nosotros" element={<Nosotros />} />
  <Route path="/dispensario" element={<Dispensario />} />
  <Route path="/contacto" element={<Contacto />} />

  <Route path="/servicios/hospedaje" element={<HospedajePage />} />
  <Route path="/servicios/alimentacion" element={<AlimentacionPage />} />
  <Route path="/servicios/salones" element={<SalonesPage />} />
  
  <Route path="/dispensario" element={<Dispensario />} />
<Route path="/dispensario/contacto" element={<ContactoDispensario />} />
<Route path="/contacto" element={<Contacto />} />

<Route
  path="/dispensario/servicios/medicina-general"
  element={<MedicinaGeneralPage />}
/>
<Route
  path="/dispensario/servicios/odontologia"
  element={<OdontologiaPage />}
/>
<Route
  path="/dispensario/servicios/farmacia"
  element={<FarmaciaPage />}
/>
<Route
  path="/dispensario/servicios/enfermeria"
  element={<EnfermeriaPage />}
/>
</Routes>

      <Footer />
    </>
  )
}

export default App