import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCart from '../context/useCart.js';

function CarritoPage() {
  const { itemCarrito, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className="container py-4">
      <h2 className="mb-4">Tu carrito</h2>

      {itemCarrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="list-group mb-3">
            {itemCarrito.map((item) => (
              <div key={item.id} className="list-group-item list-group-item-action d-flex align-items-center gap-3">
                {item.thumbnail && (
                  <img src={item.thumbnail} alt={item.title} width={60} height={60} style={{ objectFit: 'cover' }} />
                )}
                <div className="flex-grow-1">
                  <div className="fw-semibold">{item.title}</div>
                  <div className="text-muted">${item.price}</div>
                </div>
                <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Total: ${getTotal}</h5>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary" onClick={clearCart}>Vaciar carrito</button>
              <button className="btn btn-primary" disabled={itemCarrito.length === 0}>Finalizar compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CarritoPage;


