
const { options } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            demandOption: true,
            default: '5',
            type: 'number'
        })
        .check( (argv, options)=> {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .option('l', {
            alias: 'listar',
            demandOption: true,
            default: false ,
            type: 'boolean'
        })
        .argv;

console.clear();

// // argumentos por consola por posicion
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));
