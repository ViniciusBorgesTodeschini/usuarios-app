import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissoesFormComponent } from './permissoes-form/permissoes-form.component';
import { PermissoesListaComponent } from './permissoes-lista/permissoes-lista.component';


const routes: Routes = [
  {path: 'permissoesForm', component: PermissoesFormComponent},
  {path: 'permissoesForm/:id', component: PermissoesFormComponent},
  {path: 'permissoesLista',component: PermissoesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissoesRoutingModule { }
