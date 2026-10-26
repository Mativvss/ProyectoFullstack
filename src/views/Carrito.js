import { Container, Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/validaciones';
import { calcularTotal } from '../utils/carrito';

// Resumen del carrito. Recibe el carrito y las funciones para modificarlo por props (el estado vive en App).
// "descuento" viene de App: 0.2 si el usuario se registró con correo Duoc.
function Carrito({ carrito, descuento, onCambiarCantidad, onEliminar, onVaciar }) {
  if (carrito.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h1>Carrito de compras</h1>
        <p className="text-secundario">Tu carrito está vacío.</p>
        <Button as={Link} to="/catalogo" className="btn-neon">Ir al catálogo</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Carrito de compras</h1>

      {/* table-responsive: en celular la tabla se puede deslizar de lado en vez de romper la página */}
      <div className="table-responsive">
        <Table variant="dark" className="align-middle">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{formatearPrecio(item.precio)}</td>
                <td>
                  <Button size="sm" variant="outline-light" aria-label={`Disminuir ${item.nombre}`}
                    onClick={() => onCambiarCantidad(item.id, item.cantidad - 1)}>-</Button>
                  <span className="mx-2">{item.cantidad}</span>
                  <Button size="sm" variant="outline-light" aria-label={`Aumentar ${item.nombre}`}
                    onClick={() => onCambiarCantidad(item.id, item.cantidad + 1)}>+</Button>
                </td>
                <td>{formatearPrecio(item.precio * item.cantidad)}</td>
                <td>
                  <Button size="sm" variant="danger" onClick={() => onEliminar(item.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {descuento > 0 && (
        <Alert variant="info">Descuento Duoc UC aplicado: {descuento * 100}%</Alert>
      )}
      <h3 className="text-end">Total: {formatearPrecio(calcularTotal(carrito, descuento))}</h3>
      <div className="text-end mt-3">
        <Button variant="outline-light" onClick={onVaciar}>Vaciar carrito</Button>
      </div>
    </Container>
  );
}

export default Carrito;
