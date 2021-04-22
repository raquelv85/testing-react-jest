import { getHeroeById } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('pruebas en funciones de heroes', () => {

  test('debe de retornar un heroe por id', () => {

    const id = 1;

    const heroe = getHeroeById(id);

    const  heroeData = heroes.find(h => h.id === id);

    expect( heroe ).toEqual( heroeData );

  });

  test('debe de retornar un undefined si heroe no existe', () => {

    const id = 10;

    const heroe = getHeroeById(id);

    expect( heroe ).toBe( undefined );

  });

})