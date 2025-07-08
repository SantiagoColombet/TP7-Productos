import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductosCard.css';

function ProductosCard({ producto }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card h-100">
        <img src={producto.thumbnail} className="card-img-top" alt={producto.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text text-truncate">{producto.description}</p>
          <div className="mt-auto">
            <p className="card-text fw-bold">${producto.price}</p>
            <button className="btn btn-primary w-100" onClick={() => setShowModal(true)}>
              Ver detalle
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => setShowModal(false)}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{producto.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <img src={producto.thumbnail} alt={producto.title} className="img-fluid mb-3" />
                <p>{producto.description}</p>
                <div className='d-flex flex-row justify-content-between w-10"'>
                  <p><strong>Precio:</strong> ${producto.price}</p>
                  <p>⭐{producto.rating}</p>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-between w-100">
                <p><strong>{producto.availabilityStatus}</strong></p>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductosCard;
