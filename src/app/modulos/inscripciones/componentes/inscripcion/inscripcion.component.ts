import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from 'src/app/modulos/alumnos/servicios/alumnos.service';
import { CursosService } from 'src/app/modulos/cursos/servicios/cursos.service';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
import { Inscripcion } from '../../interfaces/inscripcion';
import { InscripcionesService } from '../../servicios/inscripciones.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css'],
  providers: [ DatePipe ],
})
export class InscripcionComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public inscripcionesSs: InscripcionesService,
    public alumnosSs: AlumnosService,
    public cursosSs: CursosService,
    private route: ActivatedRoute,
    public router: Router,
    private datePipe: DatePipe
  ) { }

  public id:any;
  public accion:any; 
  public filtros: Filtro[] = [];
  public alumnos: any;
  public cursos: any;

  inscripcionForm: FormGroup = this.fb.group({
    id: [null],
    fecha: [null, [Validators.required]],
    alumno: [null, [Validators.required]],
    curso: [null, [Validators.required]] 
  });


  ngOnInit(): void {
    this.obtenerAlumnos();
    this.obtenerCursos();
    this.obtenerInscripcion();
  }

  obtenerInscripcion() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.accion = this.route.snapshot.paramMap.get("accion");  
    if (this.id) {
      this.filtros.push(new Filtro('id', this.id))
      this.inscripcionesSs.getInscipcion(this.filtros)
      .subscribe(res => this.setForm(res.datos))    
    }
  }

  obtenerAlumnos() {
    let filtro: Filtro[] = []
    this.alumnosSs.getAlumnos(filtro)
    .subscribe(res => {
      this.alumnos = res.datos
    })
  }

  obtenerCursos() {
    this.cursosSs.getCursos([])
    .subscribe(res => {
      this.cursos = res.datos
    })
  }

  setForm(inscripcion: Inscripcion) {
    this.inscripcionForm.patchValue({
      id: inscripcion.id,
      fecha: this.datePipe.transform(inscripcion.fecha, 'yyyy-MM-dd'), 
      alumno: inscripcion.alumno,
      curso: inscripcion.curso
    })
  }

  onSubmit() {
    this.inscripcionesSs.saveInscripcion(this.inscripcionForm.value)
    .subscribe(i => {
      this.volver()
    })
  }

  eliminar() {
    this.inscripcionesSs.deleteInscripcion(this.inscripcionForm.value)
    .subscribe(i => {
      this.volver()
    })
  }

  volver() {
    this.limpiar()
    this.router.navigateByUrl('/inscripciones') 
  }

  limpiar() {
    this.inscripcionForm.reset()
  }

  getFormu() {
    return JSON.stringify(this.inscripcionForm.value)
  }



}
