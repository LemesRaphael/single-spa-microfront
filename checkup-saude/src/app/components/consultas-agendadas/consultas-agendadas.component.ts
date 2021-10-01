import { Component, OnInit } from '@angular/core';
import { ConsultasConst } from 'src/app/shared/constantes/consultas-constant';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';
import { ConsultasModel } from 'src/app/shared/models/consultas-model';

@Component({
  selector: 'app-consultas-agendadas',
  templateUrl: './consultas-agendadas.component.html',
  styleUrls: ['./consultas-agendadas.component.scss']
})
export class ConsultasAgendadasComponent implements OnInit {

  consultas: ConsultasModel[];
  carregarConsultas = JSON.parse(this.metodos.getGlobalValue('consultas'));
  conteudo = new Array<ConsultasModel[]>();
  nome = this.metodos.getGlobalValue('nome');
  
  consulta = true;

  constructor(private metodos: MetodosAuxiliares) { }

  ngOnInit() {
    if(this.carregarConsultas) {
      for (let consulta = 0; consulta < this.carregarConsultas.length; consulta++) {
        const element = this.carregarConsultas[consulta];
        if(element.nome == this.nome.toUpperCase()) {
          this.conteudo.push(element);
          this.consulta = false;
        }
      }
    }
  }
}
