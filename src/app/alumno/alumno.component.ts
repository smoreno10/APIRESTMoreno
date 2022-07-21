import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../servicios/alumnos.service';
import { Alumno }  from './alumno'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public alumnosSs: AlumnosService
    ) { }

  @Output() guardarEvent = new EventEmitter<Alumno>()
  @Output() eliminarEvent = new EventEmitter<Alumno>()
  
  Alumnoform: FormGroup = this.fb.group({
    dni: [null, [Validators.required]],
    nombre: [null, [Validators.required]],
    faixa: [null, [Validators.required]],
    edad: [null, [Validators.required]], 
  });

  ngOnInit(): void {
   
  }

  setForm(alumno: Alumno) {
    this.Alumnoform.patchValue({
      dni: alumno.dni,
      nombre: alumno.nombre,
      faixa: alumno.faixa,
      edad: alumno.edad
    })
  }

  onSubmit() {
    this.guardar()
  }

  guardar() {
    this.guardarEvent.emit(this.Alumnoform.value)
    this.limpiar()
  }

  eliminar() {
    this.eliminarEvent.emit(this.Alumnoform.value)
    this.limpiar()
  }

  limpiar() {
    this.Alumnoform.reset()
  }

}


