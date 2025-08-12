// cartContext.js
import { createContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Componente proveedor del carrito
const CarritoProvider = ({ children }) => {
  const [itemCarrito, setItemCarrito] = useState(() => {
    const itemsGuardados = localStorage.getItem('itemsGuardados');
    return itemsGuardados ? JSON.parse(itemsGuardados) : [];
  });

  // Agregar producto al carrito
  const addToCart = (producto) => {
    setItemCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito, producto];
      localStorage.setItem('itemsGuardados', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  // Limpiar el carrito
  const clearCart = () => {
    setItemCarrito([]);
    localStorage.setItem('itemsGuardados', JSON.stringify([]));
  };

  // Eliminar producto por ID
  const removeFromCart = (id) => {
    setItemCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito.filter(item => item.id !== id);
      localStorage.setItem('itemsGuardados', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  // Calcular total del carrito
  const getTotal = itemCarrito.reduce((acc, item) => acc + item.price, 0);

  // Actualizar localStorage cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem('itemsGuardados', JSON.stringify(itemCarrito));
  }, [itemCarrito]);

  return (
    <CartContext.Provider value={{ itemCarrito, addToCart, clearCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CarritoProvider;
