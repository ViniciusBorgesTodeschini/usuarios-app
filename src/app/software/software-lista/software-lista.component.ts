import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftwareService } from 'src/app/software.service';
import { Software } from '../software';

@Component({
  selector: 'app-software-lista',
  templateUrl: './software-lista.component.html',
  styleUrls: ['./software-lista.component.css']
})
export class SoftwareListaComponent implements OnInit {

  softwares : Software[] = [];
  softwareSelecionado: Software;
  mensagemSucesso: string;
  mensagemErro : string;

  constructor(private service : SoftwareService,
              private router : Router) { }

  ngOnInit(): void {
    this.service
      .getSoftwares()
      .subscribe(respostaSucesso => this.softwares = respostaSucesso);
  }

  novoCadastro(){
    this.router.navigate(['/softwareForm']);
  }

  preparaDelecao(software : Software){
    this.softwareSelecionado = software;
  }

  deletarSoftware(){
    this.service
      .deletar(this.softwareSelecionado)
      .subscribe(
        respostaSucesso =>{
          this.mensagemSucesso = 'Software deletado com sucesso!';
          this.mensagemErro = null;
          this.ngOnInit();
        }, repostaErro =>{
          this.mensagemErro = "Ocorreu um erro ao deletar o Software!";
          this.mensagemSucesso = null;
        }
      )
  }

}
