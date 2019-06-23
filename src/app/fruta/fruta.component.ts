import { Component } from '@angular/core';

@Component({
    selector: 'fruta', //etiqueta de plantilla
    templateUrl: './fruta.component.html'
    // template: ` <h2>{{ nombre_componente }}</h2>
    //             <p>{{ listado_frutas }} </p>  `
    
})
export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
    public nombre:string = '12';
    public lista:Array<any> = ['dato1',1,'dato2','dato3'];
    comodin:any = 'cualquier cosa';
}