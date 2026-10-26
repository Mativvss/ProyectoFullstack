// Punto de entrada de las pruebas: le pide a webpack que cargue TODOS los archivos *.spec.js dentro de src/
const context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
