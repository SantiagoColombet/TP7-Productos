import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ProductosCard from '../components/ProductosCard';

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=4')
      .then(response => setProductos(response.data.products))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container py-5 text-center">
      <h3 className="mb-4">Productos seleccionados para vos</h3>
      <div className="row g-4 justify-content-center">
        <div className="container my-4">
          <div className="row g-4">
            {productos.map((producto, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductosCard producto={producto} />
              </div>
            ))}
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Home;