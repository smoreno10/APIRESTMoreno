import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Alumno } from '../../interfaces/alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
import { InscripcionesService } from 'src/app/modulos/inscripciones/servicios/inscripciones.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})

export class AlumnoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public alumnosSs: AlumnosService,
    public inscripcionesSs: InscripcionesService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  public id: any;
  public accion: any; 
  public filtros: Filtro[] = [];

  Alumnoform: FormGroup = this.fb.group({
    id: [null],
    nombre: [null, [Validators.required]],
    faixa: [null, [Validators.required]],
    edad: [null, [Validators.required]],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accion = this.route.snapshot.paramMap.get('accion'); 
    if (this.id) {
      this.filtros.push(new Filtro('id', this.id))
      this.alumnosSs
        .getAlumno(this.filtros)
        .subscribe((res) => this.setForm(res.datos));
    }
  }

  setForm(alumno: Alumno) {
    this.Alumnoform.patchValue({
      id: alumno.id,
      nombre: alumno.nombre,
      faixa: alumno.faixa,
      edad: alumno.edad,
    });
  }

  onSubmit() {
    this.alumnosSs.saveAlumno(this.Alumnoform.value).subscribe((a) => {
      this.volver();
    });
  }

  eliminar() {
    this.alumnosSs.deleteAlumno(this.Alumnoform.value).subscribe((a) => {
      this.volver();
    });
  }

  volver() {
    this.limpiar();
    this.router.navigateByUrl('');
  }

  limpiar() {
    this.Alumnoform.reset();
  }
}
