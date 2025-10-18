import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NavBar.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as z from "zod";

const CategoriasEsquema = z.object({
  name: z.string(),
  slug: z.string(),
  url: z.string()
});

const Categorias = z.array(CategoriasEsquema);
type CategoriaItem = z.infer<typeof CategoriasEsquema>;
function NavBar() {
  const [categorias, setCategorias] = useState<CategoriaItem[]>([]);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then(({ data }) => {
        const parsed = Categorias.parse(data);
        setCategorias(parsed);
      })
      .catch((error: unknown) => {
        console.error("Error al obtener las categorías:", error);
      });
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
    </>
  );
}

export default NavBar;
