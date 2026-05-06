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
        <Route path="/dispensario" element={<PlaceholderPage title="Dispensario" />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/hospedaje" element={<HospedajePage />} />
        <Route path="/servicios/alimentacion" element={<AlimentacionPage />} />
        <Route path="/servicios/salones" element={<SalonesPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App