import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1 (click)=" contador = 0">{{ titulo }}</h1>
        <h3> La Base es: <strong>{{base}}</strong> </h3>

        <button (click)="acumular(base)"> + {{base}} </button>

        <span (click)="catapum()"> {{contador}} </span>

        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})

export class ContadorComponent {
titulo: string = 'Contador App';
  contador: number = 0;
  base: number = 5;

  sumar(){
    this.contador += this.base;
  }

  restar(){
    this.contador += this.base;
  }

  catapum(){
    this.titulo = "CATAPUM";
  }

  acumular( valor:number ){
    this.contador += valor;
  }
}