const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, err => {
        if (err) throw new Error(err);
    });
    
}

const cargarDB = () => {
    
    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
        
    }

}

const crear = descripcion => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = (all = 'all') => {

    cargarDB();

    if(all == 'false') {
        
        let listadoPorCompletar = listadoPorHacer.filter( tarea => tarea.completado === false );
    
        return listadoPorCompletar;

    } else if(all == 'true') {

        let listadoCompletado = listadoPorHacer.filter( tarea => tarea.completado === true );

        return listadoCompletado;

    } else {

        return listadoPorHacer;

    }
    

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let actualizar = false;

    listadoPorHacer.map( tarea => {

        if(tarea.descripcion === descripcion){

          tarea.completado = completado;
          actualizar = true;

        }

    });

    guardarDB();

    if(actualizar) 
        return true;
    else
        return false;  

}

const borrar = descripcion => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if(index >=0) {

        listadoPorHacer.splice(index, 1);

        guardarDB();

        return true;

    } else {

        return false;

    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}