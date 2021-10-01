import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';
import { CadastroModel } from 'src/app/shared/models/cadastro-model';
import { CepModel } from 'src/app/shared/models/cep.model';
import { AlertComponent } from '../alert/alert.component';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  hide: boolean = true;
  show: boolean;
  arrayCadastro: CadastroModel[] = new Array();
  bsModalRef?: BsModalRef;

  cadastro: CadastroModel = {
    nome: '',
    sobrenome: '',
    cpf: '',
    data_nascimento: '',
    cep: '',
    localidade: '',
    logradouro: '',
    numero_casa: '',
    complemento: '',
    bairro: '',
    uf: '',
    ddd: '',
    celular: '',
    email: '',
    senha: '',
  };

  constructor(private cadastroService: CadastroService, private metodos: MetodosAuxiliares, private modalService: BsModalService) { }

  ngOnInit() {
  }

  getCep(): void {
    this.cadastroService.getCep(this.cadastro.cep).subscribe(
      response => {
        this.carregarEndereco(response);
      }
    )
  }

  carregarEndereco(response: HttpResponse<CepModel>) {
    this.cadastro.logradouro = response.body.logradouro;
    this.cadastro.bairro = response.body.bairro;
    this.cadastro.complemento = response.body.complemento;
    this.cadastro.localidade = response.body.localidade;
    this.cadastro.uf = response.body.uf;
  }

  cadastrar(): void {
    this.show = false;
    let dadosLogin: CadastroModel;

    dadosLogin = {
      nome: this.cadastro.nome,
      sobrenome: this.cadastro.sobrenome,
      cpf: this.cadastro.cpf,
      data_nascimento: this.cadastro.data_nascimento,
      cep: this.cadastro.cep,
      localidade: this.cadastro.localidade,
      logradouro: this.cadastro.logradouro,
      numero_casa: this.cadastro.numero_casa,
      complemento: this.cadastro.complemento,
      bairro: this.cadastro.bairro,
      uf: this.cadastro.uf,
      ddd: this.cadastro.ddd,
      celular: this.cadastro.celular,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
    };

    if (this.metodos.getGlobalValue('dadosLogin')) {
      let aux = JSON.parse(this.metodos.getGlobalValue('dadosLogin'));
      for (let index = 0; index < aux.length; index++) {
        const element = aux[index];
        if (element.email == dadosLogin.email) {
          this.show = true;
          this.handleError()
          break;
        }
      }
      if (!this.show) {
        aux.push(dadosLogin);
        this.metodos.setGlobalValue('dadosLogin', JSON.stringify(aux));
        this.metodos.voltar();
      }
    } else {
      this.arrayCadastro.push(dadosLogin);
      this.metodos.setGlobalValue('dadosLogin', JSON.stringify(this.arrayCadastro));
      this.metodos.voltar();
    }
  };

  handleError(): void {
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Email já cadastrado!'

    setTimeout(() => {
      this.bsModalRef.hide();
    }, 5000);
  };

  voltar(): void {
    this.metodos.voltar();
  }
}
