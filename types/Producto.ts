export type Producto = {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    availabilityStatus?: string;
  };