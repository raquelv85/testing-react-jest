import React from 'react';
import { render } from '@testing-library/react';
import ComponentTest from '../ComponentTest';


describe('Pruebas en <ComponentTest/>',() => {
  test('debe de mostrar el mensaje "Hola soy Raquel"',() => {

    const saludo = "Hola soy Raquel";

    const wrapper = render( <ComponentTest saludo={ saludo } /> );

    expect(wrapper.getByText(saludo)).toBeInTheDocument();

  })
})