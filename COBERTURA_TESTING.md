# Documento de cobertura de testing — Level-Up Gamer (Frontend React)

**Herramientas:** Jasmine 5 (pruebas) · Karma 6 (ejecutor, ChromeHeadless) · Testing Library para React (render y eventos del DOM) · karma-coverage + Istanbul (cobertura).
**Comandos:** `npm test` (ejecutar) · `npm run test:coverage` (ejecutar + reporte en `coverage/index.html`).

## 1. Resultado de la última ejecución

| Métrica | Resultado |
|---|---|
| Pruebas ejecutadas | 10 de 10 exitosas |
| Archivos de prueba | 6 (`*.spec.js`) |
| Cobertura de líneas | 61.16% (63/103) |
| Cobertura de sentencias | 58.06% (72/124) |
| Cobertura de ramas | 50.70% (36/71) |
| Cobertura de funciones | 50.98% (26/51) |

## 2. Pruebas realizadas

| N° | Archivo | Qué verifica | Técnica |
|---|---|---|---|
| 1 | `utils/validaciones.spec.js` | Cálculo de edad según fecha de nacimiento | Reloj falso (`jasmine.clock().mockDate`) |
| 2 | `utils/validaciones.spec.js` | Correos `@duoc.cl` y `@duocuc.cl` reconocidos; otros dominios rechazados | Lógica pura |
| 3 | `utils/validaciones.spec.js` | Un menor de 18 años es rechazado en el registro | Regla de negocio |
| 4 | `utils/validaciones.spec.js` | Contraseñas que no coinciden dan error | Lógica pura |
| 5 | `utils/carrito.spec.js` | Agregar producto nuevo y sumar cantidad si ya estaba | Lógica pura |
| 6 | `utils/carrito.spec.js` | Total del carrito y descuento Duoc del 20% | Lógica pura |
| 7 | `components/ProductCard.spec.js` | Muestra nombre y precio; clic en "Agregar al carrito" llama a `onAgregar` con el producto | Spy (mock) + evento de clic |
| 8 | `views/Registro.spec.js` | Formulario completo con correo Duoc crea la cuenta, muestra el 20% y avisa a App | Eventos + spy |
| 9 | `views/Catalogo.spec.js` | Muestra todos los productos y los filtra por categoría | Manipulación del DOM + estado |
| 10 | `App.spec.js` | Al agregar un producto sube el contador del carrito del menú | Integración (App + Header + Catálogo) |

## 3. Cobertura por archivo

| Archivo | Líneas | Comentario |
|---|---|---|
| `components/ProductCard.js` | 100% | Cubierto por la prueba 7 |
| `components/Header.js` | 100% | Cubierto por la prueba de integración 10 |
| `views/Catalogo.js` | 100% | Cubierto por la prueba 9 |
| `data/productos.js` | 100% | Cubierto indirectamente |
| `App.js` | 100% de líneas | Los manejadores de eliminar, cambiar cantidad y vaciar se definen pero no se invocan |
| `views/Registro.js` | 89.47% | Falta el camino de formulario con errores |
| `utils/carrito.js` | 72.72% | Faltan eliminar, cambiar cantidad y contar productos |
| `utils/validaciones.js` | 67.85% | Faltan la validación de login y algunas ramas de error del registro (nombre, correo y contraseña inválidos) |
| `views/Inicio.js`, `views/Producto.js`, `views/Login.js`, `views/Carrito.js` | 0% | Sin pruebas en esta entrega |

## 4. Análisis

- Las pruebas cubren las reglas de negocio principales del caso: **mayor de 18 años, descuento del 20% con correo Duoc, cálculo del carrito**, además de un componente con evento, un formulario completo, un filtro que cambia el DOM y una prueba de integración.
- Las vistas Login, Carrito, Producto e Inicio no tienen pruebas propias, lo que explica la cobertura global cercana al 60%. Son el siguiente paso natural para ampliar la suite.
- Se comprobó que las pruebas detectan errores: al alterar a propósito la edad mínima o el dominio Duoc, las pruebas correspondientes fallan.
- No se prueban la reproducción del video ni los estilos visuales (CSS).
