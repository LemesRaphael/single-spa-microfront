import { Component, OnInit } from '@angular/core';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metodos: MetodosAuxiliares) { }

  ngOnInit() {
  };

  navegar(proxima_tela: string): void {
    this.metodos.navegarTela('checkup-saude/' + proxima_tela, 'home');
  }

  avaliacao(): void {
    alert('Tela em construção');
  };

  cartao(): void {
    alert('Tela em construção');
  };

  carteiraVacinacao(): void {
    alert('Tela em construção');
  };
  
  historicoAtendimento():void {
    alert('Tela em construção');
  };  
}
