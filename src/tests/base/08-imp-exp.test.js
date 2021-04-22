import { getHeroeById } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('pruebas en funciones de heroes', () => {

  test('debe de retornar un heroe por id', () => {

    const id = 1;

    const heroe = getHeroeById(id);

    const  heroeData = heroes.find(h => h.id === id);

    expect( heroe ).toEqual( heroeData );

  });

})