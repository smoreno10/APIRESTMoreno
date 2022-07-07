import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  @Input() datos: any[] = [{}] 
  @Output() clickEvent = new EventEmitter<any>()

  columnas: string[] = []
  
  constructor() { 
  }

  ngOnInit(): void {
    this.columnas = Object.getOwnPropertyNames(this.datos[0])
  }

  raiseClick(td: any) {
    this.clickEvent.emit(td)
  }
  
}
