# PARTE 1 — Base del proyecto y catálogo  (la hace quien crea el repositorio)

**Va primero.** Las partes 2 y 3 se suben después de que esta esté en GitHub, porque aquí viene el `.gitignore`
(que evita subir `node_modules`) y la configuración de Karma y React.

## Qué archivos son tuyos (todo lo que está dentro de la carpeta `proyecto/`)
- Configuración: `package.json`, `package-lock.json`, `karma.conf.js`, `test-entry.js`, `.gitignore`
- Documentos: `README.md`, `COBERTURA_TESTING.md`
- `public/` completo: `index.html`, imágenes (`assets/img`) y video (`assets/video`)
- `src/index.js`, `src/index.css`
- `src/data/productos.js`
- `src/components/ProductCard.js` y `ProductCard.spec.js`
- `src/views/Catalogo.js` y `Catalogo.spec.js`, `Producto.js`, `Inicio.js`
- Pruebas que te tocan explicar: **7** (ProductCard) y **9** (Catálogo)

## Pasos
1. En GitHub: **New repository** → nombre `levelup-react` → **Public** → sin README ni .gitignore → Create.
2. En el repo: Settings → Collaborators → agrega a tus dos compañeros.
3. Clona el repo en tu PC (CMD o VS Code):
   ```
   git clone https://github.com/TU_USUARIO/levelup-react.git
   cd levelup-react
   ```
4. Copia **el contenido** de la carpeta `proyecto/` (no la carpeta en sí) dentro de `levelup-react/`.
5. Haz los commits de a poco, cada uno con su grupo de archivos (así se ve tu trabajo en GitHub):
   ```
   git add package.json package-lock.json .gitignore public/index.html src/index.js src/index.css
   git commit -m "chore: configuración inicial del proyecto React y tema gamer"

   git add public/assets
   git commit -m "feat: imágenes de productos, logo y video de la tienda en assets"

   git add src/data src/components/ProductCard.js
   git commit -m "feat: datos de productos y componente ProductCard"

   git add src/views/Catalogo.js src/views/Producto.js
   git commit -m "feat: catálogo con filtro por categoría y detalle de producto"

   git add src/views/Inicio.js
   git commit -m "feat: página de inicio con video embebido desde assets"

   git add karma.conf.js test-entry.js
   git commit -m "test: configuración de Karma y Jasmine con cobertura"

   git add src/components/ProductCard.spec.js src/views/Catalogo.spec.js
   git commit -m "test: pruebas de ProductCard y filtro del catálogo"

   git add README.md COBERTURA_TESTING.md
   git commit -m "docs: README con estructura del proyecto y documento de cobertura"
   ```
6. Sube todo: `git push origin main`
7. Avisa a tus compañeros que ya pueden clonar y subir sus partes.

> Con solo esta parte el proyecto **todavía no corre**: faltan `App.js` y los archivos de las partes 2 y 3.
> Corre completo cuando las tres partes estén en `main`.

## Al final (cuando estén las 3 partes)
```
git pull
npm install
npm start      # la tienda en http://localhost:3000
npm test       # debe decir: Executed 10 of 10 SUCCESS
```
