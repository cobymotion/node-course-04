require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, inquirerPause, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() =>{
    console.log("Hola mundo"); 

    let opt = ''; 
    const tareas = new Tareas(); 

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        const {opcion} = await inquirerMenu();  
        opt = opcion;    
        switch(opt){
            case '1': 
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
            break; 
            case '2':
                tareas.listadoCompleto();  
            break;
            case '3':
                tareas.listadoPendientesOrComplentadas();  
            break;
            case '4':
                tareas.listadoPendientesOrComplentadas(false);
            break;
        }

        guardarDB(tareas.arrysList);

        if(opt!=='0') await inquirerPause();

    }while(opt!='0');

}


main(); 