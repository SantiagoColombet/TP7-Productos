import Home from '../pages/Home.jsx';
import ProductoDetalle from '../pages/ProductoDetalle';
import Productos from '../pages/Productos';
import QuienesSomos from '../pages/QuienesSomos';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NavBar.css'

function NavBar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategorias(response.data))
      .catch(error => console.error("Error al obtener las categorías:", error));
  }, []);

  return (
    <>
      <nav className="navbar">
        <p>Fake Store API</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quienessomos">Quienes Somos</Link></li>
          <li className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/productos/all">Ver todos</Link>
              </li>
              {categorias.map((categoria) => (
                <li key={categoria}>
                  <Link className="dropdown-item" to={`/productos/${categoria}`}>{categoria}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productodetalle/:idProducto" element={<ProductoDetalle />} />
        <Route path="/productos/:idCategoria" element={<Productos />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
      </Routes>
    </>
  );
}

export default NavBar;
