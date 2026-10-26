# Prueba_DSY_Ev1
# Level-Up Gamer
Sitio web de la tienda online Level-Up Gamer, hecho para la Evaluación Parcial 1 de Desarrollo Fullstack II.

# Descripción
Level-Up Gamer es una tienda chilena de productos para gamers (consolas, accesorios, computadores, sillas, etc). Este proyecto es el front-end del sitio, hecho con HTML, CSS y JavaScript.

levelup-react/
├── public/                          Archivos estáticos (se sirven tal cual)
│   ├── index.html                   Página base donde React dibuja la app
│   └── assets/
│       ├── img/                     Fotos de productos, logo y portada del video
│       └── video/                   comunidad-gamer.mp4 y .webm
├── src/                             Código de la aplicación
│   ├── index.js                     Punto de entrada: carga Bootstrap y dibuja <App />
│   ├── index.css                    Tema gamer (colores y fuentes)
│   ├── App.js                       Rutas y estado compartido (carrito, descuento)
│   ├── App.spec.js                  Prueba 10 (integración)
│   ├── components/                  Piezas reutilizables
│   │   ├── Header.js                Menú responsivo con contador del carrito
│   │   ├── ProductCard.js           Tarjeta de producto
│   │   └── ProductCard.spec.js      Prueba 7
│   ├── views/                       Una página por ruta
│   │   ├── Inicio.js                /
│   │   ├── Catalogo.js              /catalogo
│   │   ├── Catalogo.spec.js         Prueba 9
│   │   ├── Producto.js              /producto/:id
│   │   ├── Carrito.js               /carrito
│   │   ├── Login.js                 /login
│   │   ├── Registro.js              /registro
│   │   └── Registro.spec.js         Prueba 8
│   ├── utils/                       Lógica sin pantalla
│   │   ├── validaciones.js          Edad, correo Duoc, validación de formularios, formato de precio
│   │   ├── validaciones.spec.js     Pruebas 1, 2, 3 y 4
│   │   ├── carrito.js               Agregar, eliminar, cantidades y total
│   │   └── carrito.spec.js          Pruebas 5 y 6
│   └── data/
│       └── productos.js             Los 10 productos y las categorías
├── karma.conf.js                    Configuración de Karma (Jasmine + webpack + Chrome sin ventana)
├── test-entry.js                    Carga todos los *.spec.js para Karma
├── package.json                     Dependencias y comandos (start, test, test:coverage, build)
├── package-lock.json                Versiones exactas de las dependencias (se genera solo)
├── .gitignore                       Excluye node_modules, build y coverage
├── README.md                        Descripción, estructura y cómo correrlo
└── COBERTURA_TESTING.md     

# Páginas
index.html - Página de inicio
catalogo.html - Catálogo de productos por categoría
producto.html - Detalle de un producto (imagen, nombre y precio)
contacto.html - Formulario de contacto
registro.html - Formulario para crear una cuenta
login.html - Formulario de inicio de sesión

# Tecnologías usadas
- HTML5
- CSS3
- JavaScript (validación de formularios)

# Funcionalidades
Formularios con validación en JavaScript (nombre, email, teléfono, contraseña, edad mínima de 18 años para registrarse)
Descuento del 20% para quienes se registran con correo Duoc
Cada producto del catálogo lleva a su propia página de detalle
Video embebido de YouTube
Diseño responsivo básico con los colores de la marca (negro, azul y verde)

# Integrantes
Matias Letelier

Matias Franke

Florencia Ferrada


# Asignatura
DSY1104 - Desarrollo Fullstack II
# Declaracion de IA:
Para el desarrollo de este proyecto (tienda online Level-Up Gamer, Evaluación Parcial 1 de DSY1104), se utilizó la herramienta de inteligencia artificial Claude (Anthropic) como apoyo en las siguientes tareas:
hojas de estilo CSS y funciones de validación en JavaScript del sitio.
Elaboración de material de apoyo para el estudio y preparación de la presentación oral del proyecto.
