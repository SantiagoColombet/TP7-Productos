import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductosCard.css';
import useCart from '../context/useCart';
import type { Producto } from '../types';

type Props = { producto: Producto };
function ProductosCard({ producto }: Props) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: '' });

  const handleAdd = () => {
    addToCart(producto, 1);
    setToast({ visible: true, message: `${producto.title} agregado al carrito` });
  };

  useEffect(() => {
    if (!toast.visible) return;
    const t = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
    return () => clearTimeout(t);
  }, [toast.visible]);

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
          tabIndex={-1}
          role="dialog"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog" role="document" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
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

      <div
        className={`toast-fixed ${toast.visible ? 'toast-show' : 'toast-hidden'}`}
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        <div className="toast-body">
          {toast.message}
        </div>
      </div>
    </>
  );
}

export default ProductosCard;
