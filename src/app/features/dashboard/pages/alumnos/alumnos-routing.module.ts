import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';


const routes: Routes = [
  { path: '', 
    component:AlumnosComponent,
    children:[{
      path:"listaAlumnos",
      component:ListaAlumnosComponent
    }] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
