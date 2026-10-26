import { render, screen, fireEvent } from '@testing-library/react';
import Registro from './Registro';

describe('Registro (formulario)', () => {
  // Escribe en un campo buscándolo por su etiqueta (así lo usaría una persona)
  const escribir = (etiqueta, valor) =>
    fireEvent.change(screen.getByLabelText(etiqueta), { target: { value: valor } });

  // Prueba 8: formulario completo con correo Duoc muestra el descuento y avisa a App (spy)
  it('crea la cuenta y muestra el 20% de descuento con un correo @duocuc.cl', () => {
    const onRegistro = jasmine.createSpy('onRegistro');
    render(<Registro onRegistro={onRegistro} />);

    escribir('Nombre completo', 'Matías Franke');
    escribir('Correo electrónico', 'matias@duocuc.cl');
    escribir('Fecha de nacimiento', '2000-01-15');
    escribir('Contraseña', 'clave123');
    escribir('Confirmar contraseña', 'clave123');
    fireEvent.click(screen.getByText('Registrarse'));

    expect(screen.getByText('¡Cuenta creada con éxito!')).toBeTruthy();
    expect(screen.getByText(/20% de descuento de por vida/)).toBeTruthy();
    expect(onRegistro).toHaveBeenCalledWith({ email: 'matias@duocuc.cl', descuento: true });
  });
});
