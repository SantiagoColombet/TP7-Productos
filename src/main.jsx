import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CarritoProvider from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/TP7-PRODUCTOS">
    <StrictMode>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </StrictMode>
  </BrowserRouter>
)
