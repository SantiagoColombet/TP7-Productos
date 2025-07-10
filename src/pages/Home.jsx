import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
        {productos.map(producto => (
          <div key={producto.id} className="col-12 col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm">
              <img src={producto.thumbnail} className="card-img-top" alt={producto.title} />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-truncate">{producto.title}</h6>
                <p className="text-primary fw-bold mt-auto">${producto.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;