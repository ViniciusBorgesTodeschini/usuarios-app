import { Component, OnInit } from '@angular/core';
import { PermissoesService } from 'src/app/permissoes.service';
import { SoftwareService } from 'src/app/software.service';
import { Software } from 'src/app/software/software';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuarios } from 'src/app/usuarios/usuarios';
import { Permissoes } from '../permissoes';

@Component({
  selector: 'app-permissoes-form',
  templateUrl: './permissoes-form.component.html',
  styleUrls: ['./permissoes-form.component.css']
})
export class PermissoesFormComponent implements OnInit {

  usuarios : Usuarios[] = [];
  software : Software[] = [];
  permissoes : Permissoes;
  sucesso : boolean = false;
  errosApi : String[];

  constructor(private serviceUsuario : UsuariosService,
              private servicoSoftware : SoftwareService,
              private servicoPermissoes : PermissoesService) { 
    this.permissoes = new Permissoes();
  }

  ngOnInit(): void {
    this.serviceUsuario
      .getUsuarios()
      .subscribe(
        respostaSucesso => this.usuarios = respostaSucesso);

    this.servicoSoftware
    .getSoftwares()
    .subscribe(
      respostaSucesso => this.software = respostaSucesso);
  }

  onSubmit(){
    this.servicoPermissoes
      .salvar(this.permissoes)
      .subscribe(respostaSucesso => {
        this.sucesso = true;
        this.errosApi = null;
        this.permissoes = new Permissoes();        
      }), respostaErro =>{
        this.errosApi = respostaErro.error.erros;
        this.sucesso = false;
      }

  }

}
