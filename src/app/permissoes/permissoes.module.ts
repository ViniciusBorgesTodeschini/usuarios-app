import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissoesRoutingModule } from './permissoes-routing.module';
import { PermissoesFormComponent } from './permissoes-form/permissoes-form.component';
import { PermissoesListaComponent } from './permissoes-lista/permissoes-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PermissoesFormComponent, PermissoesListaComponent],
  imports: [
    CommonModule,
    PermissoesRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    PermissoesFormComponent,
    PermissoesListaComponent
  ]
})
export class PermissoesModule { }
