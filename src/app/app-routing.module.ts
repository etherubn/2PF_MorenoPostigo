import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "dashboard",
    component:DashboardComponent,
    loadChildren: ()=> import("../app/features/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:"**",
    redirectTo:"dashboard"
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
