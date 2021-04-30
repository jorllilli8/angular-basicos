import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo={nombre:'',poder:0};

  @Output() onNuevoPers: EventEmitter<Personaje> = new EventEmitter();

    agregar(){
      if (this.nuevo.nombre.trim().length === 0){return;}
      console.log(this.nuevo)
      this.onNuevoPers.emit(this.nuevo)
      this.nuevo = {
        nombre: "",
        poder: 0
      }
    }

}
