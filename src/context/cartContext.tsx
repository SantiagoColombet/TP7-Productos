import React, { createContext, useState, useEffect, ReactNode } from 'react';
import type { CartItem, Producto, ID, CartContextType } from '../types';

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [itemCarrito, setItemCarrito] = useState<CartItem[]>(() => {
    const itemsGuardados = localStorage.getItem('itemsGuardados');
    return itemsGuardados ? (JSON.parse(itemsGuardados) as CartItem[]) : [];
  });

  const addToCart = (producto: Producto, cantidad: number = 1) => {
    setItemCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      let nuevoCarrito: CartItem[];
      if (existe) {
        nuevoCarrito = prev.map(p =>
          p.id === producto.id ? { ...p, quantity: p.quantity + cantidad } : p
        );
      } else {
        const productoParaGuardar: CartItem = {
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

  const removeFromCart = (id: ID) => {
    setItemCarrito(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: ID, quantity: number) => {
    setItemCarrito(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity } : item
        )
        .filter(item => item.quantity > 0)
    );
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

