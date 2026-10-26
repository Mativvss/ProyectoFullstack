import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalogo from './Catalogo';
import { productos } from '../data/productos';

describe('Catalogo', () => {
  // Prueba 9: manipulación del DOM. Al cambiar el filtro (estado), cambian las tarjetas que se ven.
  it('muestra todos los productos y los filtra al elegir una categoría', () => {
    render(<MemoryRouter><Catalogo onAgregar={() => {}} /></MemoryRouter>);
    expect(screen.getAllByText('Agregar al carrito').length).toBe(productos.length);

    fireEvent.change(screen.getByLabelText('Filtrar por categoría'), { target: { value: 'Consolas' } });
    expect(screen.getAllByText('Agregar al carrito').length).toBe(1);
    expect(screen.getByText('PlayStation 5')).toBeTruthy();
    expect(screen.queryByText('Catan')).toBeNull();
  });
});
