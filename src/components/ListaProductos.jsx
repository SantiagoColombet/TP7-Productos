import React, { useEffect, useState } from 'react';
import ProductosCard from './ProductosCard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

function ListaProductos() {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = 'https://dummyjson.com/products/'; 

    if (idCategoria && idCategoria !== 'all') {
      url = `https://dummyjson.com/products/category/${idCategoria}`;
    }

    axios.get(url)
    .then(response => {
      setProductos(response.data.products);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });

  }, [idCategoria]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <h1><strong>{idCategoria}</strong></h1>
      </div>    
      <div className="container my-4">
        <div className="row g-4">
          {productos.map((producto, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductosCard producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListaProductos;