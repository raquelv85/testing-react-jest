import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('pruebas con promesas', () => {

  // el argumento done se utiliza cuando hay asincronía, se esperará a que se ejecute, lo que hay dentro del then
  test('getHeroeByIdAsync debe de retornar un Heroe async', ( done ) => {
    const id = 1;

    getHeroeByIdAsync( id )
      .then( heroe => {
        expect( heroe ).toBe( heroes[0] )
        done(); // se pone para indicar que ya ha terminado el proceso
      })

  });

  test('debe retornar error si heroe no existe', ( done ) => {
    const id = 10;

    getHeroeByIdAsync( id )
      .catch( error => {
        expect( error ).toBe( 'No se pudo encontrar el héroe' );
        done();
      })

  });
  
})