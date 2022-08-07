import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
import { Curso } from '../../interfaces/curso';
import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public cursosSs: CursosService,
    private route: ActivatedRoute,
    public router: Router
    ) { }

  public id:any;
  public accion: any; 
  public filtros: Filtro[] = [];

  cursoform: FormGroup = this.fb.group({
    id: [null],
    nombre: [null, [Validators.required]]
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.accion = this.route.snapshot.paramMap.get('accion'); 
    if (this.id) {
      this.filtros.push(new Filtro('id', this.id))
      this.cursosSs.getCurso(this.filtros)
      .subscribe(res => this.setForm(res.datos))    
    }
  }

  setForm(curso: Curso) {
    this.cursoform.patchValue({
      id: curso.id,
      nombre: curso.nombre
    })
  }

  onSubmit() {
    this.cursosSs.saveCurso(this.cursoform.value)
    .subscribe(c => {
      this.volver() 
    })
  }

  eliminar() {
    this.cursosSs.deleteCurso(this.cursoform.value)
    .subscribe(c => {
      this.volver()
    })
  }

  volver() {
    this.limpiar()
    this.router.navigateByUrl('cursos') 
  }

  limpiar() {
    this.cursoform.reset()
  }
}
