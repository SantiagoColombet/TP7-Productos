import './App.css'

import MainLayout from '/src/layouts/MainLayout';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductoDetalle from './pages/ProductoDetalle'
import Productos from './pages/Productos'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'


function App() {


  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productodetalle/:idProducto" element={<ProductoDetalle />} />
        <Route path="/productos/:idCategoria" element={<Productos />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}


export default App