import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Prueba de integración: varios componentes trabajando juntos (App + Header + Catálogo).
describe('App (integración)', () => {
  // Pasamos un router en memoria que arranca en /catalogo (así no depende de la URL del navegador)
  const RouterCatalogo = ({ children }) => <MemoryRouter initialEntries={['/catalogo']}>{children}</MemoryRouter>;

  // Prueba 10: el estado del carrito vive en App y se refleja en el menú
  it('al agregar un producto en el catálogo, sube el contador del carrito en el menú', () => {
    render(<App Router={RouterCatalogo} />);
    expect(screen.getByTestId('contador-carrito').textContent).toBe('0');
    fireEvent.click(screen.getAllByText('Agregar al carrito')[0]);
    expect(screen.getByTestId('contador-carrito').textContent).toBe('1');
  });
});
