import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LinksPage from './pages/LinksPage'
import CatalogoPage from './pages/CatalogoPage'
import PromocionesPage from './pages/PromocionesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinksPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/promociones" element={<PromocionesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
