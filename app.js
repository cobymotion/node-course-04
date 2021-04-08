require('colors')

const { inquirerMenu, inquirerPause } = require('./helpers/inquirer');

console.clear();

const main = async() =>{
    console.log("Hola mundo"); 

    let opt = ''; 

    do{

        opt = await inquirerMenu();  
        console.log('');       
        if(opt.opcion!=='0') await inquirerPause();

    }while(opt.opcion!=='0')

}


main(); 