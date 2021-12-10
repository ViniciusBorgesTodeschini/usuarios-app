import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './usuarios.service';
import { PermissoesModule } from './permissoes/permissoes.module';
import { SoftwareModule } from './software/software.module';
import { SoftwareService } from './software.service';
import { PermissoesService } from './permissoes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UsuariosModule,    
    SoftwareModule,
    PermissoesModule
  ],
  providers: [
    UsuariosService,
    SoftwareService,
    PermissoesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
