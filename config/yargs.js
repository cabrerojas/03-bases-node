
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            demandOption: true,
            default: '5',
            type: 'number',
            describe: 'Es la base de la tabla de multiplicar'
        })
        .check( (argv, options)=> {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .option('l', {
            alias: 'listar',
            default: false ,
            type: 'boolean',
            describe: 'Muestra la tabla en consola'
        })
        .argv;

module.exports = argv;