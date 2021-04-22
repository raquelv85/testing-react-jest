import { getImagen } from '../../base/11-async-await';


describe('Pruebas con async-await y fetch', () => {

  test('debe retornar el url de la imagen', async() => {

    const url = await getImagen(); // getImagen() retorna una promesa

    expect( url.includes('https://') ).toBe( true )

  })

})