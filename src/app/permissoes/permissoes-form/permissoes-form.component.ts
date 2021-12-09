import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuarios } from 'src/app/usuarios/usuarios';

@Component({
  selector: 'app-permissoes-form',
  templateUrl: './permissoes-form.component.html',
  styleUrls: ['./permissoes-form.component.css']
})
export class PermissoesFormComponent implements OnInit {

  usuarios : Usuarios[] = [];
  constructor(private serviceUsuario : UsuariosService) { }

  ngOnInit(): void {
    this.serviceUsuario
      .getUsuarios()
      .subscribe(
        respostaSucesso => this.usuarios = respostaSucesso);
  }

  onSubmit(){
    console.log("Executou submit!");
  }

}
