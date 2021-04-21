


const nombre   = 'Raquel';
const apellido = 'V';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;


export function getSaludo(nombre = 'Alba') {
    return 'Hola ' + nombre;
}
