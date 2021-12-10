import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwareFormComponent } from './software-form/software-form.component';
import { FormsModule } from '@angular/forms';
import { SoftwareListaComponent } from './software-lista/software-lista.component';


@NgModule({
  declarations: [SoftwareFormComponent, SoftwareListaComponent],
  imports: [
    CommonModule,
    SoftwareRoutingModule,
    FormsModule
  ], exports: [
    SoftwareFormComponent,
    SoftwareListaComponent
  ]
})
export class SoftwareModule { }
