import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LiksPage from './pages/LinksPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LiksPage />
  </StrictMode>,
)
