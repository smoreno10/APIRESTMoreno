import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionesModule } from '../inscripciones/inscripciones.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    InscripcionesModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [
    AlumnosComponent,
    AlumnoComponent
  ] 
})
export class AlumnosModule { }

