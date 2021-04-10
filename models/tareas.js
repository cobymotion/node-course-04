
const Tarea = require('./tarea')

class Tareas{

    _listado = {};

    get arrysList(){
        const listadoTareas =[];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]; 
            listadoTareas.push(tarea);
        })

        return listadoTareas;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc='') {                        
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea; 
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach( datos => {            
            this._listado[datos.id] = datos; 
        })

    }

    listadoCompleto(){
        console.log();        
        this.arrysList.forEach(this.muestraTareas);
    }

    listadoPendientesOrComplentadas(completadas = true){
        console.log();
        let cont = 0; 
        this.arrysList.forEach((tarea) => {
            if(completadas && tarea.completadoEn) 
            {
                this.muestraTareas(tarea,cont); 
                cont +=1; 
            } else if(!tarea.completadoEn && !completadas){
                this.muestraTareas(tarea,cont); 
                cont +=1;
            }
        });         
    }

    muestraTareas(tarea, index) {
        const idx = `${index + 1}`.blue; 
        const {desc, completadoEn} = tarea; 
        const estado = (completadoEn)?`${completadoEn}`.green:'Pendiente'.red;        
        console.log(`${idx}. ${desc} :: ${estado}`);
    }

}

module.exports = Tareas;