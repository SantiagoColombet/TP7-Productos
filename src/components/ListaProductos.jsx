import React from 'react'
import ProductosCard from './ProductosCard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function ListaProductos({ listaProductos }) {
  return (
    <div className="container my-4">
      <div className="row g-4">
      {listaProductos.map((producto, index) => (
        
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <ProductosCard producto={producto} />
      </div>
      ))}
      </div>
    </div>
  )
}

export default ListaProductos 