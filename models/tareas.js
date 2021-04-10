
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
        let arrayFiltradas = []; 
        if(completadas)
            arrayFiltradas = this.arrysList.filter((tarea,index) => {
                if(tarea.completadoEn)
                    this.muestraTareas(tarea,index);
                return tarea.completadoEn;
            });
        else 
            arrayFiltradas = this.arrysList.filter((tarea,index) => {
                if(tarea.completadoEn===null)
                    this.muestraTareas(tarea,index);
                return tarea.completadoEn===null;
           });         
    }

    muestraTareas(tarea, index) {
        const idx = `${index + 1}`.blue; 
        const {desc, completadoEn} = tarea; 
        const estado = (completadoEn)?'Completada'.green:'Pendiente'.red;        
        console.log(`${idx}. ${desc} :: ${estado}`);
    }

}

module.exports = Tareas;