
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
        
        this.arrysList.forEach( (tarea,index) => {
            if(tarea.completadoEn)
                console.log(`${index+1}. ${tarea.desc} :: ${'Completada'.green}`);
            else 
            console.log(`${index+1}. ${tarea.desc} :: ${'Pendiente'.red}`);
        });
    }

}

module.exports = Tareas;