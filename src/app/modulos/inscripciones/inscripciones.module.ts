import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './componentes/inscripciones/inscripciones.component';
import { InscripcionComponent } from './componentes/inscripcion/inscripcion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';

@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    InscripcionesComponent,
    InscripcionComponent
  ],
})
export class InscripcionesModule { }
