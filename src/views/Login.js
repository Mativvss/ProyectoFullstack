import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { validarLogin } from '../utils/validaciones';

// Formulario de inicio de sesión con validación (mismo patrón que el Registro)
function Login() {
  const [datos, setDatos] = useState({ email: '', password: '' });
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  // Un solo handler para todos los campos: usa el atributo "name" del input para saber cuál actualizar
  const handleChange = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que el navegador recargue la página
    const nuevosErrores = validarLogin(datos);
    setErrores(nuevosErrores);
    setExito(Object.keys(nuevosErrores).length === 0);
  };

  return (
    <Container className="py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4">Iniciar sesión</h1>
      {exito && <Alert variant="success">¡Inicio de sesión exitoso!</Alert>}

      <Form onSubmit={handleSubmit} noValidate className="p-4 rounded card-gamer">
        <Form.Group className="mb-3" controlId="login-email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" name="email" value={datos.email} onChange={handleChange} />
          {errores.email && <small className="text-danger">{errores.email}</small>}
        </Form.Group>

        <Form.Group className="mb-4" controlId="login-password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" value={datos.password} onChange={handleChange} />
          {errores.password && <small className="text-danger">{errores.password}</small>}
        </Form.Group>

        <Button type="submit" className="btn-neon w-100">Ingresar</Button>
      </Form>
    </Container>
  );
}

export default Login;
