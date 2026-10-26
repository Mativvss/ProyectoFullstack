import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './views/Inicio';
import Catalogo from './views/Catalogo';
import Producto from './views/Producto';
import Carrito from './views/Carrito';
import Login from './views/Login';
import Registro from './views/Registro';
import {
  agregarAlCarrito, eliminarDelCarrito, cambiarCantidad, contarProductos,
} from './utils/carrito';

// App es el componente raíz. Aquí vive el ESTADO compartido (carrito y descuento)
// y se reparte a las páginas por props ("levantar el estado" al ancestro común).
// El Router se pasa como prop opcional para poder usar MemoryRouter en los tests.
function App({ Router = BrowserRouter }) {
  const [carrito, setCarrito] = useState([]);
  const [descuento, setDescuento] = useState(0);

  const onAgregar = (producto) => setCarrito((actual) => agregarAlCarrito(actual, producto));
  const onEliminar = (id) => setCarrito((actual) => eliminarDelCarrito(actual, id));
  const onCambiarCantidad = (id, cantidad) => setCarrito((actual) => cambiarCantidad(actual, id, cantidad));
  const onVaciar = () => setCarrito([]);
  const onRegistro = (usuario) => setDescuento(usuario.descuento ? 0.2 : 0);

  return (
    <Router>
      <Header cantidadCarrito={contarProductos(carrito)} />
      <Routes>
        <Route path="/" element={<Inicio onAgregar={onAgregar} />} />
        <Route path="/catalogo" element={<Catalogo onAgregar={onAgregar} />} />
        <Route path="/producto/:id" element={<Producto onAgregar={onAgregar} />} />
        <Route
          path="/carrito"
          element={
            <Carrito carrito={carrito} descuento={descuento}
              onCambiarCantidad={onCambiarCantidad} onEliminar={onEliminar} onVaciar={onVaciar} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro onRegistro={onRegistro} />} />
      </Routes>
      <footer className="text-center text-secundario py-4 border-top border-secondary mt-4">
        <p className="mb-1">Teléfono: +56 2 2244 556 | Antonio Varas #666, Santiago</p>
        <p className="mb-0">Horario: Lunes a Viernes de 09:00 a 18:00</p>
      </footer>
    </Router>
  );
}

export default App;
