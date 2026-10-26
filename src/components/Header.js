import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Menú superior. Recibe por props la cantidad de productos del carrito.
// expand="lg": en pantallas grandes el menú se ve completo; en celular/tablet se colapsa en hamburguesa.
function Header({ cantidadCarrito }) {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{ borderBottom: '2px solid #39FF14' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/assets/img/logo.jpg" alt="Logo Level-Up Gamer" height="40" className="me-2 rounded" />
          LEVEL-UP GAMER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              Carrito <Badge bg="success" data-testid="contador-carrito">{cantidadCarrito}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
