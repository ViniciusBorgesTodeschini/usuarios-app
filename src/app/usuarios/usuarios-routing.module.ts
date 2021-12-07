import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';


const routes: Routes = [
  {path: 'usuariosForm', component: UsuariosFormComponent},
  {path: 'usuariosForm/:id', component: UsuariosFormComponent},
  {path: 'usuariosLista', component: UsuariosListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
