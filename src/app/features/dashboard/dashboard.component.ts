import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  sidebarItems= [
    {label: "Alumnos",icon:"chevron_left" ,url:"/dashboard/alumnos"},
    {label: "Cursos",icon:"chevron_left" ,url:"/dashboard/cursos"},
    {label: "Inscripciones",icon:"chevron_left" ,url:"/dashboard/inscripciones"},
  ]
  

}
