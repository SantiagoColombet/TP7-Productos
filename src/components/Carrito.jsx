import React from 'react';
import './Carrito.css';
import { Link } from 'react-router-dom';
import useCart from '../context/useCart.js';

const Carrito = () => {
  const { getItemsCount } = useCart();
  const totalCantidad = typeof getItemsCount === 'function' ? getItemsCount() : 0;

  return (
    <Link to="/carrito" className="position-relative text-decoration-none text-dark">
      <i className="fas fa-shopping-cart" />
      {totalCantidad > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: '0.7rem' }}
        >
          {totalCantidad}
        </span>
      )}
    </Link>
  );
};

export default Carrito;
