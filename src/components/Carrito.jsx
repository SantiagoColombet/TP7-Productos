import React from "react";
import { Link } from "react-router-dom";
import useCart from "../context/useCart";
import "./Carrito.css";


function Carrito({ isOpen, onClose }) {
  const { itemCarrito, removeFromCart, clearCart, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="carrito-modal shadow">
      <div className="carrito-header">
        <h6>Tu carrito</h6>
        <button className="btn-close" onClick={onClose}></button>
      </div>

      <div className="carrito-body">
        {itemCarrito.length === 0 ? (
          <p className="text-muted small">El carrito está vacío.</p>
        ) : (
          itemCarrito.map((item) => (
            <div key={item.id} className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <strong>{item.title}</strong>
                <div className="small text-muted">
                  {item.quantity} × ${item.price}
                </div>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      {itemCarrito.length > 0 && (
        <div className="carrito-footer">
          <div className="fw-bold mb-2">Total: ${getTotal().toFixed(2)}</div>
          
          <button className="btn btn-outline-secondary btn-sm w-100 mb-2" onClick={clearCart} >
            Vaciar carrito
          </button>
          
          <Link to="/carrito" className="btn btn-success btn-sm w-100" onClick={onClose}>
            Ir a pagar
          </Link>
        </div>
      )}
    </div>
  );
}

export default Carrito;
