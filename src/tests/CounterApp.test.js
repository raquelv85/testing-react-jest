import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

  test('debe de mostrar <CounterApp /> correctamente', () => {
    const wrapper = shallow( <CounterApp /> );
    expect( wrapper ).toMatchSnapshot();

  })

})