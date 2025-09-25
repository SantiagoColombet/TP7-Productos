import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemCarrito, setItemCarrito] = useState(() => {
    const itemsGuardados = localStorage.getItem('itemsGuardados');
    return itemsGuardados ? JSON.parse(itemsGuardados) : [];
  });

  const addToCart = (producto, cantidad = 1) => {
    setItemCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      let nuevoCarrito;
      if (existe) {
        nuevoCarrito = prev.map(p =>
          p.id === producto.id ? { ...p, quantity: p.quantity + cantidad } : p
        );
      } else {
        const productoParaGuardar = {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          thumbnail: producto.thumbnail,
          quantity: cantidad,
        };
        nuevoCarrito = [...prev, productoParaGuardar];
      }
      return nuevoCarrito;
    });
  };

  const removeFromCart = (id) => {
    setItemCarrito(prev => {
      const nuevoCarrito = prev.filter(item => item.id !== id);
      return nuevoCarrito;
    });
  };

  const updateQuantity = (id, quantity) => {
    setItemCarrito(prev => {
      let nuevoCarrito = prev.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      ).filter(item => item.quantity > 0); 
      return nuevoCarrito;
    });
  };

  const clearCart = () => {
    setItemCarrito([]);
    localStorage.setItem('itemsGuardados', JSON.stringify([]));
  };

  const getItemsCount = () =>
    itemCarrito.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const getTotal = () =>
    itemCarrito.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

  useEffect(() => {
    localStorage.setItem('itemsGuardados', JSON.stringify(itemCarrito));
  }, [itemCarrito]);

  return (
    <CartContext.Provider
      value={{
        itemCarrito,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemsCount,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

