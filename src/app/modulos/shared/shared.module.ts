import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrillaComponent } from './componentes/grilla/grilla.component';


@NgModule({
  declarations: [
    GrillaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GrillaComponent
  ]
})
export class SharedModule { }
