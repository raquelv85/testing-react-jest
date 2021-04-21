import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('pruebas en 02-template-string', () => {
  test('getSaludo debe de retorar Hola raquel', () => {
    const nombre = 'Raquel';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe( `Hola ${nombre}`);
    
  })
})