
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';


const cartContext = createContext();

const CarritoProvider = ((children) => {
    const [itemCarrito, setItemCarrito] = useState(() => {
        const itemsGuardados = localStorage.getItem("itemsGuardados");
        return itemsGuardados ? JSON.parse(itemsGuardados) : [];
    });
    const addToCart = (producto) => {
        setItemCarrito((itemCarrito) => ({...itemCarrito , producto}))
    }

    const clearCart = () => {
      setItemCarrito([]);
      localStorage.setItem("itemsGuardados", JSON.stringify([]));
    };


    const getTotal = itemCarrito.reduce((acumulador, producto) => {
      return acumulador + producto.price;
    }, 0);

    const removeFromCart = (id) => {
      const nuevoCarrito = itemCarrito.filter(item => item.id !== id);
      setItemCarrito(nuevoCarrito);
    };
    useEffect(() => {
    
        return () => {
          console.log('Cleaning up effect');
        };
      }, [itemCarrito]);


    return (
        <cartContext.Provider value={{
            addToCart,
            itemCarrito,
            clearCart,
            getTotal,
            removeFromCart

        }}>
          {children}
        </cartContext.Provider>
      );
});
export {cartContext}
export default CarritoProvider;