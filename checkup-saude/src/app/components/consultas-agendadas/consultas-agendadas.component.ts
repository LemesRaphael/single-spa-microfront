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
  
  consulta = true;

  constructor(private metodos: MetodosAuxiliares) { }

  ngOnInit() {
    if(this.carregarConsultas) {
      this.consulta = false;
      console.log(this.carregarConsultas)
    }
  }
}
