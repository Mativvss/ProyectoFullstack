import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productos } from '../data/productos';

// Página de inicio: frase principal, video y 3 productos destacados
function Inicio({ onAgregar }) {
  const destacados = productos.filter((p) => [5, 7, 8].includes(p.id));
  return (
    <Container className="py-5">
      <section className="text-center mb-5">
        <h1>¡Desafía tus límites con Level-Up Gamer!</h1>
        <p className="text-secundario fs-5">Tienda online de productos para gamers en todo Chile.</p>
        <Button as={Link} to="/catalogo" className="btn-neon">Ver catálogo</Button>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-3">Conoce nuestra comunidad gamer</h2>
        {/* Video embebido: se reproduce desde el archivo local public/assets/video (no desde YouTube).
            "controls" muestra play/pausa/volumen; "poster" es la imagen que se ve antes de reproducir;
            la clase ratio de Bootstrap mantiene la proporción 16:9 en cualquier pantalla. */}
        <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '720px' }}>
          <video controls preload="metadata" poster="/assets/img/video-poster.jpg" aria-label="Video Level-Up Gamer">
            <source src="/assets/video/comunidad-gamer.mp4" type="video/mp4" />
            <source src="/assets/video/comunidad-gamer.webm" type="video/webm" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </section>

      <section>
        <h2 className="text-center mb-4">Productos destacados</h2>
        <Row>
          {destacados.map((p) => (
            <Col key={p.id} xs={12} sm={6} lg={4} className="mb-4">
              <ProductCard producto={p} onAgregar={onAgregar} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Inicio;
