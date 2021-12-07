import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios : Usuarios[] = [];
  usuarioSelecionado : Usuarios;
  mensagemSucesso : string;
  mensagemErro : string;

  constructor(private service: UsuariosService,
              private router: Router) { }

  ngOnInit(): void {
    this.service
    .getUsuarios()
    .subscribe(resposta => this.usuarios = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/usuariosForm']);
  }

  preparaDelecao(usuario:Usuarios){
    this.usuarioSelecionado = usuario;
  }

  deletarUsuario(){
    this.service
      .deletar(this.usuarioSelecionado)
      .subscribe(repostaSucesso => {
        this.mensagemSucesso = 'Usuário deletado com sucesso!'
        this.mensagemErro = null;
        this.ngOnInit();
      }, respostaErro => {
        this.mensagemSucesso = null;
        this.mensagemErro = "Ocorreu um erro ao deletar o Usuário!"
      })
  }  


}
