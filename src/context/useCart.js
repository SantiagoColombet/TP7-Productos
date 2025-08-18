// /src/context/useCart.js
import { useContext } from 'react';
import { CartContext } from './CartContext'; // <-- ruta consistente y sensible a mayúsculas

const useCart = () => useContext(CartContext);

export default useCart;