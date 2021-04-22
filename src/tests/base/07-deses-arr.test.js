import { retornaArreglo } from '../../base/07-deses-arr';


describe('Pruebas en 07-desestructuración',() => {

  test('debe de retornar un string y un número',() => {
    const arr = retornaArreglo() //['ABC', 123]

    expect( arr ).toEqual(['ABC', 123]);
  });

  test('debe de retornar un string y un número',() => {
    const [ letras, numeros ] = retornaArreglo() //['ABC', 123]

    expect( letras ).toEqual('ABC');
    expect( typeof letras ).toEqual('string');
    expect( numeros ).toEqual( 123 );
    expect( typeof numeros ).toEqual('number');
  })

})