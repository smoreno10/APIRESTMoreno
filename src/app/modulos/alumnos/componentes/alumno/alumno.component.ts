import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Alumno }  from '../../interfaces/alumno'
import { ActivatedRoute, Router } from '@angular/router';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public alumnosSs: AlumnosService,
    private route: ActivatedRoute,
    public router: Router
    ) { }

  dni:any;

  Alumnoform: FormGroup = this.fb.group({
    dni: [null, [Validators.required]],
    nombre: [null, [Validators.required]],
    faixa: [null, [Validators.required]],
    edad: [null, [Validators.required]], 
  });

  ngOnInit(): void {
    this.dni = this.route.snapshot.paramMap.get("dni");
    if (this.dni) {
      this.Alumnoform.controls['dni'].disable();
      of(this.alumnosSs.alumnosDb)
      .pipe(
        map(res => res.find(a => a.dni == this.dni))
      ).subscribe(a => this.setForm(a))    
    } else {
      this.Alumnoform.controls['dni'].enable();
    }
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
    this.alumnosSs.guardar(this.Alumnoform.value)
    this.limpiar()
    this.router.navigateByUrl('')
  }

  eliminar() {
    this.alumnosSs.eliminar(this.dni)
    this.limpiar()
    this.router.navigateByUrl('')
  }

  limpiar() {
    this.Alumnoform.reset()
  }

}


