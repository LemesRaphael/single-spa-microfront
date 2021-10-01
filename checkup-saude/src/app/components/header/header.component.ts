import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserConstant } from 'src/app/shared/constantes/user-constant';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';
import { UserModel } from 'src/app/shared/models/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cadastro: boolean = false;
  user: UserModel = UserConstant;
  nome = this.metodos.getGlobalValue('nome');
  sobrenome = this.metodos.getGlobalValue('sobrenome');

  constructor(private router: Router, private metodos: MetodosAuxiliares) { }

  ngOnInit() {
     this.user.nome = this.nome;
  }

  logout(): void {
    this.router.navigate(['checkup-saude']);
  }
}
