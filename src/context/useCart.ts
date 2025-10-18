import { useContext } from "react";
import { CartContext } from "./cartContext";
import type { CartContextType } from "../types";

const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};

export default useCart;