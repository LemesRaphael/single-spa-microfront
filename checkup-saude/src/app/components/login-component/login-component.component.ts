import { Component, Input, OnInit } from '@angular/core';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  email: string;
  password: string;
  hide = true;
  show = false;

  constructor(private metodos: MetodosAuxiliares) { }

  ngOnInit() {
  }

  login(): void {
    let login = JSON.parse(this.metodos.getGlobalValue('dadosLogin'));
    if(login) {
      for (let i = 0; i < login.length; i++) {
        const element = login[i];
        this.validaEmailSenha(element.email, element.senha, element.nome, element.sobrenome, element.data_nascimento, element.cpf);
      }
    } else {
      this.show = true;
    }
  }

  validaEmailSenha(email: string, senha: string, nome: string, sobrenome:string, data_nascimento: string, cpf: string): void {
  if(this.email == email && this.password == senha) {
    this.metodos.setGlobalValue('nome', nome);
    this.metodos.setGlobalValue('sobrenome', sobrenome);
    this.metodos.setGlobalValue('data_nascimento', data_nascimento);
    this.metodos.setGlobalValue('cpf', cpf);
    this.metodos.navegarTela('home', '');
    } else {
      this.show = true;
    }
  }

  cadastro(): void {
    this.metodos.navegarTela('cadastro', '');
  }
}
