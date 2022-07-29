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

  @Output() clickEvent = new EventEmitter<any>()
  
  ngOnInit(): void {

  }

  raiseClick(td: any) {
    this.clickEvent.emit(td)
  }
  
}
