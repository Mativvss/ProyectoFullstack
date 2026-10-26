import { agregarAlCarrito, calcularTotal } from './carrito';

describe('carrito.js', () => {
  const mouse = { id: 8, nombre: 'Mouse Logitech G502', precio: 49990 };
  const ps5 = { id: 5, nombre: 'PlayStation 5', precio: 549990 };

  // Prueba 5
  it('agrega un producto nuevo y suma 1 a la cantidad si ya estaba en el carrito', () => {
    const unaVez = agregarAlCarrito([], mouse);
    expect(unaVez.length).toBe(1);
    expect(unaVez[0].cantidad).toBe(1);

    const dosVeces = agregarAlCarrito(unaVez, mouse);
    expect(dosVeces.length).toBe(1);
    expect(dosVeces[0].cantidad).toBe(2);
  });

  // Prueba 6
  it('calcula el total y aplica el 20% de descuento Duoc', () => {
    const carrito = [{ ...mouse, cantidad: 2 }, { ...ps5, cantidad: 1 }];
    expect(calcularTotal(carrito)).toBe(649970);       // 2 x 49.990 + 549.990
    expect(calcularTotal(carrito, 0.2)).toBe(519976);  // con 20% menos
  });
});
