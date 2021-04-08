require('colors'); 

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear(); 
        console.log('=================================');
        console.log('          Menu de opciones');
        console.log('=================================\n');

        console.log(`${ '1'.blue }. Crear tareas`);
        console.log(`${ '2'.blue }. Listar tareas`);
        console.log(`${ '3'.blue }. Listar tareas completas`);
        console.log(`${ '4'.blue }. Listas tareas pendientes`);
        console.log(`${ '5'.blue }. Completar tareas(s)`);
        console.log(`${ '6'.blue }. Borrar tarea`);
        console.log(`${ '0'.blue }. Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opción: ' , (opt) =>{            
            readline.close();
            resolve(opt); 
        }); 
    })
}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presiona ${'ENTER'.blue} para continuar\n` , (opt) =>{        
            readline.close();
            resolve();
        });
    });   
}

module.exports = {
    mostrarMenu,
    pausa
}