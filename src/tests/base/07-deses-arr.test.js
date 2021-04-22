import { retornaArreglo } from '../../base/07-deses-arr';


describe('Pruebas en 07-desestructuración',() => {

  test('debe de retornar un string y un número',() => {
    const arr = retornaArreglo() //['ABC', 123]

    expect( arr ).toEqual(['ABC', 123]);
  })

})