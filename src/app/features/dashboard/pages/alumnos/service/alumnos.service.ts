import { CursosService } from './../../cursos/service/cursos.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.interface';

let alumnos:Alumno[]= [
  {
    id: 1,
    nombre: 'Ruben Antonio',
    apellido: 'Moreno Postigo',
    email: 'moreno@gmail.com',
    fechaNacimiento: new Date(1998, 4, 23),
    course: 'Angular'
  },
  {
    id: 2,
    nombre: 'Jose Manuel',
    apellido: 'Raggio Bend',
    email: 'ebend@gmail.com',
    fechaNacimiento: new Date(1996, 9, 8),
    course: 'Rabbit'
  },
  {
    id: 3,
    nombre: 'Raquel Manuela',
    apellido: 'Morales Rosario',
    email: 'raqmor@hotmail.com',
    fechaNacimiento: new Date(1995, 5, 15),
    course: 'React'
  },
  {
    id: 4,
    nombre: 'Jimena Alexandra',
    apellido: 'Mareq Del',
    email: 'rator@hotmail.com',
    fechaNacimiento: new Date(2000, 10, 15),
    course: 'Angular'
  },
  {
    id: 5,
    nombre: 'Pedro Alejandro',
    apellido: 'Suarez Postigo',
    email: 'morsuar@gmail.com',
    fechaNacimiento: new Date(1992, 5, 29),
    course: 'Angular'
  },
  {
    id: 6,
    nombre: 'Jimena Alexandra',
    apellido: 'Mareq Del',
    email: 'rator@hotmail.com',
    fechaNacimiento: new Date(2000, 10, 15),
    course: 'Vue'
  },
  {
    id: 7,
    nombre: 'Pedro Alejandro',
    apellido: 'Suarez Postigo',
    email: 'morsuar@gmail.com',
    fechaNacimiento: new Date(1992, 5, 29),
    course: 'Rabbit'
  }
]

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  

  constructor() { }

  getAlumnos(): Observable<Alumno[]> {
    return of(alumnos)
  }

  

  addAlumno(alumno:Alumno):Observable<Alumno[]>{
    alumnos = [...alumnos,alumno]
    return this.getAlumnos()
  }

  editAlumno(alumnoEditado:Alumno){
    alumnos = alumnos.map(alumno=>{
      return alumno.id === alumnoEditado.id ? alumnoEditado : alumno
    }
    )
    return this.getAlumnos()
  }

  deleteStudent(index:number):Observable<Alumno[]>{
    alumnos= alumnos.filter((student)=> student.id!==index)
    return this.getAlumnos()
  }
  
}
