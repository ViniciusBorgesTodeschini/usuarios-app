import { Component, OnInit } from '@angular/core';
import { Software } from '../software';
import { SoftwareService } from 'src/app/software.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-software-form',
  templateUrl: './software-form.component.html',
  styleUrls: ['./software-form.component.css']
})
export class SoftwareFormComponent implements OnInit {

  software: Software;
  sucesso: boolean = false;
  errosApi: String[];
  id: number;

  constructor(private service: SoftwareService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.software = new Software();
    /*this.software.id = 1;
    this.software.nomeSoftware = "BethaCode System";
    this.software.nome = "Contábil";*/
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getSoftwareById(this.id)
          .subscribe(repostaSucesso => this.software = repostaSucesso,
            respostaErro => this.software = new Software());
      }
    })

  }

  gravarSoftware() {
    if (this.id) {
      this.service
        .atualizar(this.software)
        .subscribe(repostaSucesso => {
          this.sucesso = true;
          this.errosApi = null;
        }, respostaErro =>{
          this.errosApi = ['Erro ao atualizar o Software!']
        })
    } else {
      this
        .service
        .salvar(this.software)
        .subscribe(respostaSucesso => {
          this.sucesso = true;
          this.errosApi = null;
          this.software = respostaSucesso;
        }, respostaErro => {
          this.errosApi = respostaErro.error.erros;
          this.sucesso = false;
        })
    }
  }

  voltarListagem() {
    this.router.navigate(['/softwareLista']);
  }

}
