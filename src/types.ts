// Tipos compartidos para la app

export type ID = number | string;

export interface Producto {
  id: ID;
  title: string;
  description?: string;
  price: number;
  thumbnail?: string;
  rating?: number;
  availabilityStatus?: string;
}

export interface CartItem {
  id: ID;
  title: string;
  price: number;
  thumbnail?: string;
  quantity: number;
}

export interface Categoria {
  slug: string;
  name: string;
  url?: string;
}

export interface CartContextType {
  itemCarrito: CartItem[];
  addToCart: (producto: Producto, cantidad?: number) => void;
  removeFromCart: (id: ID) => void;
  updateQuantity: (id: ID, quantity: number) => void;
  clearCart: () => void;
  getItemsCount: () => number;
  getTotal: () => number;
}

export interface CartContextType {
  itemCarrito: CartItem[];
  addToCart: (producto: Producto, cantidad?: number) => void;
  removeFromCart: (id: ID) => void;
  updateQuantity: (id: ID, quantity: number) => void;
  clearCart: () => void;
  getItemsCount: () => number;
  getTotal: () => number;
}
