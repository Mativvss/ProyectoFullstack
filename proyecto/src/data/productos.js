// Lista de productos de la tienda (los mismos de la entrega del Parcial 1).
// Cada producto tiene: id, categoría, nombre, precio (número, en CLP), imagen y descripción.
export const productos = [
  { id: 1, categoria: 'Juegos de Mesa', nombre: 'Catan', precio: 29990, img: '/assets/img/catan.jpg', descripcion: 'Juego de estrategia para 3 a 4 jugadores.' },
  { id: 2, categoria: 'Juegos de Mesa', nombre: 'Carcassonne', precio: 24990, img: '/assets/img/carcassonne.jpg', descripcion: 'Construye ciudades y caminos con losetas.' },
  { id: 3, categoria: 'Accesorios', nombre: 'Controlador Xbox Series X', precio: 59990, img: '/assets/img/xbox-control.jpg', descripcion: 'Control inalámbrico para Xbox y PC.' },
  { id: 4, categoria: 'Accesorios', nombre: 'Auriculares HyperX Cloud II', precio: 79990, img: '/assets/img/hyperx-cloud2.jpg', descripcion: 'Audífonos gamer con sonido envolvente 7.1.' },
  { id: 5, categoria: 'Consolas', nombre: 'PlayStation 5', precio: 549990, img: '/assets/img/ps5.jpg', descripcion: 'Consola de última generación de Sony.' },
  { id: 6, categoria: 'Computadores Gamers', nombre: 'PC Gamer ASUS ROG Strix', precio: 1299990, img: '/assets/img/pc-rog-strix.jpg', descripcion: 'Computador de alto rendimiento para juegos.' },
  { id: 7, categoria: 'Sillas Gamers', nombre: 'Silla Secretlab Titan', precio: 349990, img: '/assets/img/silla-secretlab.jpg', descripcion: 'Silla ergonómica para largas sesiones.' },
  { id: 8, categoria: 'Mouse y Mousepad', nombre: 'Mouse Logitech G502', precio: 49990, img: '/assets/img/mouse-logitech.webp', descripcion: 'Mouse gamer con sensor HERO de alta precisión.' },
  { id: 9, categoria: 'Mouse y Mousepad', nombre: 'Mousepad Razer Goliathus', precio: 29990, img: '/assets/img/mousepad-razer.jpg', descripcion: 'Mousepad extendido con iluminación Chroma.' },
  { id: 10, categoria: 'Poleras Personalizadas', nombre: 'Polera Level-Up', precio: 14990, img: '/assets/img/polera-levelup.jpg', descripcion: 'Polera gamer personalizada Level-Up.' },
];

// Lista de categorías sin repetir (se usa en el filtro del catálogo)
export const categorias = [...new Set(productos.map((p) => p.categoria))];
