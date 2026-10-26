// Lógica del carrito como funciones puras: reciben el carrito actual y devuelven uno nuevo.
// (En React nunca se modifica el estado directamente, siempre se crea una copia nueva.)
// Cada ítem del carrito es: { ...producto, cantidad }

// Agrega un producto; si ya estaba en el carrito, le suma 1 a la cantidad
export function agregarAlCarrito(carrito, producto) {
  const existe = carrito.find((item) => item.id === producto.id);
  if (existe) {
    return carrito.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
  }
  return [...carrito, { ...producto, cantidad: 1 }];
}

// Quita un producto del carrito por completo
export function eliminarDelCarrito(carrito, id) {
  return carrito.filter((item) => item.id !== id);
}

// Cambia la cantidad de un producto; si queda en 0 o menos, lo elimina
export function cambiarCantidad(carrito, id, cantidad) {
  if (cantidad <= 0) return eliminarDelCarrito(carrito, id);
  return carrito.map((item) => (item.id === id ? { ...item, cantidad } : item));
}

// Cantidad total de unidades (es el número que se muestra en el menú)
export function contarProductos(carrito) {
  return carrito.reduce((total, item) => total + item.cantidad, 0);
}

// Suma de precio x cantidad. Si hay descuento (0.2 = 20%) lo aplica al final.
export function calcularTotal(carrito, descuento = 0) {
  const subtotal = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  return Math.round(subtotal * (1 - descuento));
}
