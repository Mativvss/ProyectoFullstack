// Funciones de validación. Están separadas de los componentes para poder probarlas con Jasmine.

// Patrón de correo: texto@texto.texto
export const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Calcula la edad en años a partir de una fecha de nacimiento (texto "AAAA-MM-DD")
export function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  // Si el cumpleaños de este año todavía no llega, resta 1 año
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

// Los correos Duoc dan 20% de descuento de por vida
export function esCorreoDuoc(email) {
  return email.endsWith('@duoc.cl') || email.endsWith('@duocuc.cl');
}

// Recibe los datos del formulario y devuelve un objeto con los errores encontrados.
// Si el objeto viene vacío ({}), el formulario es válido.
export function validarRegistro({ nombre, email, fecha, password, confirmar }) {
  const errores = {};
  if (nombre.length < 2 || nombre.length > 100) {
    errores.nombre = 'El nombre debe tener entre 2 y 100 caracteres.';
  }
  if (!FORMATO_EMAIL.test(email)) {
    errores.email = 'Ingresa un correo válido.';
  }
  if (!fecha || calcularEdad(fecha) < 18) {
    errores.fecha = 'Debes tener 18 años o más.';
  }
  if (password.length < 6) {
    errores.password = 'La contraseña debe tener al menos 6 caracteres.';
  }
  if (confirmar === '' || confirmar !== password) {
    errores.confirmar = 'Las contraseñas no coinciden.';
  }
  return errores;
}

// Validación del login: correo válido y contraseña no vacía
export function validarLogin({ email, password }) {
  const errores = {};
  if (!FORMATO_EMAIL.test(email)) {
    errores.email = 'Ingresa un correo válido.';
  }
  if (password.length === 0) {
    errores.password = 'Ingresa tu contraseña.';
  }
  return errores;
}

// Da formato chileno al precio: 549990 -> "$549.990 CLP"
export function formatearPrecio(precio) {
  return '$' + Number(precio).toLocaleString('es-CL') + ' CLP';
}
