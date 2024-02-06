import { CursosService } from './../cursos/service/cursos.service';
import { AlumnosService } from './service/alumnos.service';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { Alumno } from 'src/app/core/models/alumno.interface';
import { Curso } from 'src/app/core/models/curso.interface';


@Component({
  selector: 'alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos:Alumno[] = []
  cursos: Curso[] = []
  constructor(
    private dialog: MatDialog, 
    private alumnosService: AlumnosService
    ) 
    {}
  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(data=>{
      this.alumnos=data
    })
  }

  openDialog(student: Alumno | undefined): void {
    const dialogRef = this.dialog.open(AbmAlumnosComponent, {
      data: student
    });

    dialogRef.afterClosed().subscribe((result: Alumno) => {
      if (!result) return

      if (!result.id) {
        result['id'] = new Date().getTime()
        this.alumnosService.addAlumno(result).subscribe({
          next: (data)=> {
            this.alumnos = data
          }
        })
        return
      }

      this.alumnosService.editAlumno(result).subscribe({
        next: (data)=>{
          this.alumnos= data
        }
      })
    });
  }

  deleteStudent(index: number) {
    this.alumnosService.deleteStudent(index).subscribe({
      next:(data) => {
        this.alumnos= data
      }
    })
  }
}
