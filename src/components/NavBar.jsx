import Home from '../pages/Home.jsx';
import ProductoDetalle from '../pages/ProductoDetalle';
import Productos from '../pages/Productos';
import QuienesSomos from '../pages/QuienesSomos';
import Contacto from '../pages/Contacto.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NavBar.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategorias(response.data))
      .catch(error => console.error("Error al obtener las categorías:", error));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="nav-link" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>H
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/quienessomos">Quienes Somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  {categorias.map((categoria) => (
                        <li key={categoria.slug}>
                          <Link className="dropdown-item" to={`/productos/${categoria.slug}`}>{categoria.name}</Link>
                        </li>
                      ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productodetalle/:idProducto" element={<ProductoDetalle />} />
        <Route path="/productos/:idCategoria" element={<Productos />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default NavBar;
