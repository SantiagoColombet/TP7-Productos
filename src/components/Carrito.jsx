import React from 'react';
import './Carrito.css';
import { Link } from 'react-router-dom';
import useCart from '../context/useCart.js';

const Carrito = () => {
  const { itemCarrito } = useCart();

  return (
    <Link to="/carrito" className="position-relative text-decoration-none text-dark">
      <i className="fas fa-shopping-cart" />
      {itemCarrito.length > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: '0.7rem' }}
        >
          {itemCarrito.length}
        </span>
      )}
    </Link>
  );
};

export default Carrito;
