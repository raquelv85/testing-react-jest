import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import ComponentTest from '../ComponentTest';
 


describe('Pruebas en <ComponentTest/>',() => {
  // test('debe de mostrar el mensaje "Hola soy Raquel"',() => {

  //   const saludo = "Hola soy Raquel";

  //   const wrapper = render( <ComponentTest saludo={ saludo } /> );

  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();

  // })

  test('debe de mostrar <ComponentTest/> correctamente', () => {
    const saludo = "Hola soy Raquel";
    const wrapper = shallow(<ComponentTest saludo={saludo}/>);

    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = "Hola soy Raquel";
    const subtitulo = "subtitulo"
    const wrapper = shallow(<ComponentTest saludo={saludo} subtitulo={subtitulo}/>);
    const textoParrafo = wrapper.find('p').text();
   
    expect( textoParrafo ).toBe( subtitulo );
  })
})