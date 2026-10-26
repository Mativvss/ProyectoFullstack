import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { productos, categorias } from '../data/productos';

// Catálogo con filtro por categoría.
// "categoria" es un estado: al cambiar el select, React vuelve a dibujar solo las tarjetas que corresponden.
function Catalogo({ onAgregar }) {
  const [categoria, setCategoria] = useState('Todas');

  const visibles =
    categoria === 'Todas' ? productos : productos.filter((p) => p.categoria === categoria);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Catálogo de productos</h1>

      <Form.Group className="mb-4 mx-auto" style={{ maxWidth: '320px' }}>
        <Form.Label htmlFor="filtro-categoria">Filtrar por categoría</Form.Label>
        <Form.Select id="filtro-categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="Todas">Todas</option>
          {categorias.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Grilla responsiva: 1 columna en celular, 2 en tablet, 3 en escritorio, 4 en pantallas grandes */}
      <Row>
        {visibles.map((p) => (
          <Col key={p.id} xs={12} md={6} lg={4} xl={3} className="mb-4">
            <ProductCard producto={p} onAgregar={onAgregar} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Catalogo;
