import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/modulos/autenticacion/servicios/usuarios.service';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
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
    public usuarioSs: UsuariosService,
    public router: Router
  ) { }

  @Input() curso: any;
  public filtros: Filtro[] = [];
  public cursos: any;
  public columnas: string[] = ['id', 'nombre']
  
  ngOnInit(): void {
    if (this.curso) {
      this.filtros.push(new Filtro('curso', this.curso))     
    }
    this.cursosSs.getCursos(this.filtros)
    .subscribe(data => { 
      this.cursos = data.datos 
    })
   }

  clickListener(curso: Curso) {
    this.router.navigateByUrl(`curso/${curso.id}/${curso.accion}`)  }
}
