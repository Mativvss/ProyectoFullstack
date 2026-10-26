# Level-Up Gamer — Frontend en React

Proyecto de la asignatura **DSY1104 Desarrollo Full Stack II** (Evaluación Parcial 2).
Migración de la tienda online Level-Up Gamer (Parcial 1: HTML/CSS/JS) a **React**, con diseño responsivo en **React Bootstrap** y pruebas unitarias con **Jasmine + Karma**.

**Equipo:** Matías Franke · Florencia Ferrada · Matías Letelier

## Estructura del proyecto

```
levelup-react/
├── public/                        Archivos estáticos (se sirven tal cual)
│   ├── index.html                 Página base donde React dibuja la aplicación (fuentes Orbitron y Roboto)
│   └── assets/
│       ├── img/                   Imágenes de productos, logo y portada (poster) del video
│       └── video/                 Video de la tienda (comunidad-gamer.mp4 y .webm) que reproduce la página de inicio
├── src/                           Código fuente de la aplicación
│   ├── index.js                   Punto de entrada: carga Bootstrap, estilos y dibuja <App />
│   ├── index.css                  Tema gamer (negro, azul eléctrico #1E90FF, verde neón #39FF14)
│   ├── App.js                     Componente raíz: define las rutas y guarda el estado compartido (carrito, descuento)
│   ├── App.spec.js                Prueba de integración de la aplicación
│   ├── components/                Componentes reutilizables
│   │   ├── Header.js              Menú de navegación responsivo (hamburguesa en celular) con contador del carrito
│   │   ├── ProductCard.js         Tarjeta de producto (imagen, nombre, precio, botones)
│   │   └── ProductCard.spec.js
│   ├── views/                     Páginas (una por ruta)
│   │   ├── Inicio.js              /               Frase principal, video embebido y productos destacados
│   │   ├── Catalogo.js            /catalogo       Todos los productos con filtro por categoría
│   │   ├── Producto.js            /producto/:id   Detalle de un producto
│   │   ├── Carrito.js             /carrito        Resumen del carrito, cantidades, total y descuento
│   │   ├── Login.js               /login          Inicio de sesión con validación
│   │   ├── Registro.js            /registro       Registro con validación (mayor de 18 y descuento Duoc)
│   │   ├── Catalogo.spec.js       Prueba del filtro del catálogo
│   │   └── Registro.spec.js       Prueba del formulario de registro
│   ├── utils/                     Lógica pura (sin interfaz), fácil de probar
│   │   ├── validaciones.js        Edad, correo, validación de registro/login, formato de precio
│   │   ├── carrito.js             Agregar, eliminar, cambiar cantidad y calcular total
│   │   ├── carrito.spec.js
│   │   └── validaciones.spec.js
│   └── data/
│       └── productos.js           Lista de productos y categorías
├── karma.conf.js                  Configuración de Karma (Jasmine + webpack + babel + ChromeHeadless + cobertura)
├── test-entry.js                  Carga todos los archivos *.spec.js para Karma
├── package.json                   Dependencias y comandos (start, build, test, test:coverage)
├── COBERTURA_TESTING.md           Documento de cobertura de testing
└── README.md                      Este archivo
```

## Cómo correrlo

Requisitos: Node 18 o superior y Google Chrome instalado (Karma lo usa para correr las pruebas).

```bash
npm install            # instala las dependencias (una sola vez)
npm start              # levanta la tienda en http://localhost:3000
npm test               # corre las pruebas con Karma + Jasmine (ChromeHeadless)
npm run test:coverage  # pruebas + reporte de cobertura en coverage/index.html
npm run build          # genera la versión de producción en build/
```

Si Karma no encuentra Chrome, indicar su ruta:
`set CHROME_BIN=C:\Program Files\Google\Chrome\Application\chrome.exe` (Windows) o `export CHROME_BIN=/ruta/a/chrome` (Linux).

## Funcionalidades

- **Catálogo** con 10 productos en 7 categorías, con filtro por categoría y detalle de producto por URL (`/producto/:id`).
- **Carrito** de compras: agregar, aumentar/disminuir cantidad, eliminar, vaciar y total.
- **Registro** con validaciones (nombre, correo, **mayor de 18 años**, contraseña y confirmación). Con correo `@duoc.cl` o `@duocuc.cl` se obtiene **20% de descuento de por vida**, que se aplica al total del carrito.
- **Login** con validación de correo y contraseña.
- **Video embebido** en la página de inicio, reproducido desde `public/assets/video` (no depende de YouTube).
- **Diseño responsivo** con la grilla de Bootstrap (1, 2, 3 o 4 columnas según el ancho de pantalla) y menú hamburguesa en celular.

## Pruebas

10 pruebas unitarias y de integración en 6 archivos `*.spec.js`, escritas con **Jasmine** y ejecutadas con **Karma**. Detalle y cobertura en [COBERTURA_TESTING.md](COBERTURA_TESTING.md).

## Reparto del trabajo

| Parte | Contenido | Archivos principales |
|---|---|---|
| 1 — Base y catálogo | Configuración del proyecto, tema gamer, productos, tarjeta de producto, catálogo con filtro, detalle de producto, inicio con video | `package.json`, `karma.conf.js`, `public/`, `src/index.*`, `src/data/`, `ProductCard`, `Catalogo`, `Producto`, `Inicio` |
| 2 — Usuarios | Validaciones, formulario de registro (mayor de 18 y descuento Duoc) y login | `utils/validaciones.js`, `views/Registro.js`, `views/Login.js` |
| 3 — Carrito y aplicación | Lógica del carrito, vista del carrito, menú de navegación y componente raíz con rutas y estado | `utils/carrito.js`, `views/Carrito.js`, `components/Header.js`, `App.js` |
