
describe('pruebas en el archivo demot.test.js', () => {
  test('deben de ser iguales lo string', () => {

    //1- inicialización 
    const mensaje = 'Hola mundo'
  
    //2- estímulo
    const mensaje2 = `Hola mundo`
  
    //3- observar el comportamiento
    expect(mensaje).toBe(mensaje2) // comprueba tanto tipo como contenido sean iguales
  })
})

