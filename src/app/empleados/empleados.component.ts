import { Component } from '@angular/core';

@Component({
    selector: 'empleados', //etiqueta de plantilla
    templateUrl: './empleados.component.html'
   
})
export class EmpleadosComponent {
    public nombre_componente = 'Componente de Empleados';
    public nombres_empleados = 'Mario, Oscar, Daniel, Pedro';
    public nombres_apellidos = 'Gonzalez, Perez, Díaz, Sanchez';
    public nombres_edades = '31, 42, 55, 27';
}