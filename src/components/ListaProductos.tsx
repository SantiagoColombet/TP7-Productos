import React, { useEffect, useState } from 'react';
import ProductosCard from './ProductosCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Producto } from '../../types/Producto'; 

type Props = {
  listaProductos?: Producto[];
};
function ListaProductos() {
  const { idCategoria } = useParams<{ idCategoria?: string }>(); 
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        <h1 className="text-primary text-center fw-bold mb-4">{idCategoria}</h1>
      </div>
      <div className="container my-4">
        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductosCard producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListaProductos;
