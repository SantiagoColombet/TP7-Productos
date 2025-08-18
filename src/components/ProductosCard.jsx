import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductosCard.css';
import useCart from '../context/useCart.js';

function ProductosCard({ producto }) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    addToCart(producto, 1); // agregamos 1 unidad
  };

  return (
    <>
      <div className="card h-100">
        <img src={producto.thumbnail} className="card-img-top" alt={producto.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text text-truncate">{producto.description}</p>
          <div className="mt-auto">
            <p className="card-text fw-bold">${producto.price}</p>
            <button className="btn btn-outline-primary w-100 mb-2" onClick={() => setShowModal(true)}>
              Ver detalle
            </button>
            <button className="btn btn-primary w-100" onClick={handleAdd}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          onClick={() => setShowModal(false)} // backdrop click
        >
          <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{producto.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <img src={producto.thumbnail} alt={producto.title} className="img-fluid mb-3" />
                <p>{producto.description}</p>
                <div className='d-flex flex-row justify-content-between w-100'>
                  <p>Precio: ${producto.price}</p>
                  <p>⭐{producto.rating}</p>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-between w-100">
                <p>{producto.availabilityStatus || ''}</p>
                <div>
                  <button className="btn btn-secondary me-2" onClick={() => setShowModal(false)}>Cerrar</button>
                  <button className="btn btn-primary" onClick={() => { handleAdd(); setShowModal(false); }}>Agregar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductosCard;
