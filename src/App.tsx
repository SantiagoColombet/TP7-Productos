import './App.css';
import MainLayout from './layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductoDetalle from './pages/ProductoDetalle';
import Productos from './pages/Productos';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import CarritoPage from './pages/Carrito';


function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="productodetalle/:idProducto" element={<ProductoDetalle />} />
      <Route path="productos/:idCategoria" element={<Productos />} />
      <Route path="quienessomos" element={<QuienesSomos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="carrito" element={<CarritoPage />} />
      </Route>
    </Routes>
  </>
  );
}


export default App;