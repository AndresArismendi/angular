import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { checkNoChanges } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'empleados', //etiqueta de plantilla
    templateUrl: './empleados.component.html'
   
})
export class EmpleadosComponent {
    public nombre_componente = 'Componente de Empleados';
//     public nombres_empleados = 'Mario, Oscar, Daniel, Pedro';
//     public nombres_apellidos = 'Gonzalez, Perez, Díaz, Sanchez';
//     public nombres_edades = '31, 42, 55, 27';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;
    constructor(){
        this.empleado = new Empleado('Andrés Arismendi', 28, 'Ingeniero', true);
        this.trabajador_externo = false;
        this.color = "blue";
        this.color_seleccionado = "#ccc";

        this.trabajadores = [
            new Empleado('Andrés Arismendi', 28, 'Ingeniero', false),
            new Empleado('Daniel Sepulveda', 35, 'Arquitecto', true),
            new Empleado('Victor Perez',43, 'Diseñador', true),
            new Empleado('Maria Juana',43, 'Médico', false)
        ];
    }

    ngOnInit(){        
        console.log(this.trabajadores);
    }
    cambiarExterno(valor){
        this.trabajador_externo = valor;

    }
    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }

}

