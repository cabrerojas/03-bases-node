
const { crearArchivo } = require('./helper/multiplicar');
// Imprimir tabla del 5

console.clear();

const [,,arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');


//const base = 9;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));
