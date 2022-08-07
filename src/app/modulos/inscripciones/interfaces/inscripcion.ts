///item.id, item.fecha, item.alumno, alumnoNombre, item.curso, cursoNombre
export interface Inscripcion {
    id: number | null,
    fecha: Date | null,
    alumno: number | null,
    curso: number | null,
    alumnoNombre: string | null,
    cursoNombre: string | null,
    accion: string | null
  }