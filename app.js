
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('./config/yargs');

console.clear();

// // argumentos por consola por posicion
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));
