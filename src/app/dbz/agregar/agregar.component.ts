import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo={nombre:'',poder:0};

  // @Output() onNuevoPers: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService){}

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){return;}

    // this.onNuevoPers.emit(this.nuevo)
    this.dbzService.addPers(this.nuevo)

    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

}
