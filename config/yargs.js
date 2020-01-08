const descripcion = {
    demand: true,
    alias: 'd',
    describe: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    describe: 'Marca como completado o pendiente una tarea'
};

const all = {
    alias: 'a',
    default: 'all',
    describe: 'Lista todas las tareas'
}

const { argv } = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion
                })
                .command('listar', 'Listar las tareas por hacer', {
                    all
                })
                .command('actualizar', 'Actualiza el estado de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borra una tarea de acuerdo a su descripción', {
                    descripcion
                })
                .help();

module.exports = {
    argv
};