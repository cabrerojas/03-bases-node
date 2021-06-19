
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('yargs').argv;

console.clear();

// // argumentos por consola por posicion
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);


//const base = 9;

// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err));
