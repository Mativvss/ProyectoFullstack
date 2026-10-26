import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/validaciones';

// Tarjeta de un producto. Recibe el producto y una función onAgregar por props.
// El componente no sabe qué pasa al agregar: solo avisa que se hizo clic (así se puede reutilizar y probar).
function ProductCard({ producto, onAgregar }) {
  return (
    <Card className="card-gamer text-white h-100">
      <Card.Img variant="top" src={producto.img} alt={producto.nombre} className="img-producto" />
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text className="fs-5">{formatearPrecio(producto.precio)}</Card.Text>
        <Button as={Link} to={`/producto/${producto.id}`} variant="outline-info" className="mb-2 mt-auto">
          Ver detalle
        </Button>
        <Button className="btn-neon" onClick={() => onAgregar(producto)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
