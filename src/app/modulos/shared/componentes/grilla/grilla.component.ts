import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  constructor() { 
  }

  @Input() titulo: string  
  @Input() datos: any;
  @Input() columnas: string[];
  @Input() verModificar: boolean  
  @Input() verEliminar: boolean 
  @Input() verDetalle: boolean 

  @Output() clickEvent = new EventEmitter<any>()
  
  ngOnInit(): void {

  }

  raiseClickModificar(td: any) {
    this.clickEvent.emit({...td, accion: "Modificar"})
  }

  raiseClickEliminar(td: any) {
    this.clickEvent.emit({...td, accion: "Eliminar"})
  }

  raiseClickDetalle(td: any) {
    this.clickEvent.emit({...td, accion: "Detalle"})
  }


  
}
