import Home from '../pages/Home.jsx';
import ProductoDetalle from '../pages/ProductoDetalle';
import Productos from '../pages/Productos';
import QuienesSomos from '../pages/QuienesSomos';
import { Routes, Route, Link,  } from 'react-router-dom'
import React from 'react';

function NavBar() {
  return (
    <>    
    <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productodetalle">Producto Detalle</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/quienessomos">Quienes Somos</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productodetalle" element={<ProductoDetalle />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
    </Routes>
    </>
  )
}

export default NavBar