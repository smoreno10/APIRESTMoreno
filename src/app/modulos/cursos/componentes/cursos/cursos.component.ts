import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../interfaces/curso';
import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  constructor(
    public cursosSs: CursosService,
    public router: Router
  ) { }

  public cursos: any;
  public columnas: string[] = ['id', 'nombre']
  
  ngOnInit(): void {
    this.cursosSs.getCursos()
    .subscribe(data => { 
      this.cursos = data.datos 
    })
   }

  clickListener(curso: Curso) {
    this.router.navigateByUrl(`curso/${curso.id}`)
  }
}
