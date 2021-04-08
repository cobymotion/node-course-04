const inquirer = require('inquirer'); 
require('colors')

const menuOptions = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Qué quieres hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1'.blue }. Crear tareas`
            },
            {
                value: '2',
                name: `${ '2'.blue }. Listar tareas`
            },
            {
                value: '3',
                name: `${ '3'.blue }. Listar tareas completas`
            },
            {
                value: '4',
                name: `${ '4'.blue }. Listas tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5'.blue }. Completar tareas(s)`
            },
            {
                value: '6',
                name: `${ '6'.blue }. Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0'.blue }. Salir`
            }    
        ]
    }];

const inquirerMenu = async () => {

    console.clear(); 
    console.log('=================================');
    console.log('          Menu de opciones');
    console.log('=================================\n');

    const opt = await inquirer.prompt(menuOptions);

    return opt; 

}

const inquirerPause = async () =>{

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiona ${'ENTER'.blue} para continuar`
        }
    ];

    await inquirer.prompt(question); 
}


module.exports = {
    inquirerMenu,
    inquirerPause
}