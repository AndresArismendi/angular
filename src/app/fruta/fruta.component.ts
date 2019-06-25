import { Component } from '@angular/core';

@Component({
    selector: 'fruta', //etiqueta de plantilla
    templateUrl: './fruta.component.html'
    // template: ` <h2>{{ nombre_componente }}</h2>
    //             <p>{{ listado_frutas }} </p>  `
    
})
export class FrutaComponent {
    public nombre_componente:string; 
    public listado_frutas:string;
    public nombre:string;
    public lista:Array<any>;
    comodin:any; 
    public edad:number;

    
    constructor(){
        this.nombre_componente = 'Componente de fruta';
        this.listado_frutas = 'Naranja, Manzana, Pera y Sandia';
        this.nombre  = '12';
        this.lista  = ['dato1',1,'dato2','dato3'];
        this.comodin = 'cualquier cosa';
        this.edad = 12;
        
    }
    ngOnInit(){
        this.holaMundo(this.comodin);
        //variables y alcance
        var uno = 8;
        var dos = 15;           //var funciona como variable global
        if(uno === 8){
            let uno = 3;        //let le da valor dentro del if no fuera, se considera una variable local
            var dos = 88;
            console.log('dentro del if: '+uno+' '+dos);
        }
        console.log('fuera del if: '+uno+ ' '+dos);     // considera el valor de variable global de uno 
                                                        // ya que se encuentra fuera del bloque por ser let
                                                        // por otro lado dos considera el valor de variable global

    }
    holaMundo(nombre){
        console.log('hola mundo: '+nombre);
    }
}

