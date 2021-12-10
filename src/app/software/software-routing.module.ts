import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoftwareFormComponent } from './software-form/software-form.component';
import { SoftwareListaComponent } from './software-lista/software-lista.component';


const routes: Routes = [
  {path:'softwareForm', component: SoftwareFormComponent},
  {path:'softwareForm/:id', component: SoftwareFormComponent},
  {path:'softwareLista', component: SoftwareListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
