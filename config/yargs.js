const argv = require('yargs')
    .command('crear', 'crear un elmeento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descricpi de crear'
        }
    })
    .command('actualizar', 'actualiar todas las tare', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descricpi de crear'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}