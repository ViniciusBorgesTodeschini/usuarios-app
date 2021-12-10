import { Component, OnInit } from '@angular/core';
import { PermissoesService } from 'src/app/permissoes.service';
import { permissoesBusca } from './permissoesBusca';

@Component({
  selector: 'app-permissoes-lista',
  templateUrl: './permissoes-lista.component.html',
  styleUrls: ['./permissoes-lista.component.css']
})
export class PermissoesListaComponent implements OnInit {

  nome : string;
  lista: permissoesBusca[];
  message: string;

  constructor(private service: PermissoesService) { }

  ngOnInit(): void {
  }

  consultar(){
    this.message = null;
    this.service
    .buscar(this.nome)
    .subscribe(respostaSucesso =>{
      this.lista = respostaSucesso;
      if(this.lista.length <= 0){
        this.message = 'Nenhum registro encontrado.'
      }
    });
  }

}
