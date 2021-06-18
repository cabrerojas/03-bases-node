
const { crearArchivo } = require('./helper/multiplicar');
// Imprimir tabla del 5

console.clear();

const base = 9;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));
