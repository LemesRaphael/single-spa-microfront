import { Component, OnInit } from '@angular/core';
import { CartaoVirtualConst } from 'src/app/shared/constantes/cartao-virtual-constant';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';
import { UserModel } from 'src/app/shared/models/user-model';

@Component({
  selector: 'app-cartao-virtual',
  templateUrl: './cartao-virtual.component.html',
  styleUrls: ['./cartao-virtual.component.scss']
})
export class CartaoVirtualComponent implements OnInit {

  nome = this.metodos.getGlobalValue('nome').toUpperCase();
  sobrenome = this.metodos.getGlobalValue('sobrenome').toUpperCase();
  cpf = this.metodos.getGlobalValue('cpf');
  data_nascimento = this.metodos.getGlobalValue('data_nascimento');

  dados: UserModel = CartaoVirtualConst;
  
  constructor(private metodos: MetodosAuxiliares) { }

  ngOnInit() {
  }
}
