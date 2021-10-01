import { Component, OnInit } from '@angular/core';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';

@Component({
  selector: 'app-agenda-consulta',
  templateUrl: './agenda-consulta.component.html',
  styleUrls: ['./agenda-consulta.component.scss']
})
export class AgendaConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  medicina(): void {
    alert('Medicina clinica')
  }

  odontologica():void {
    alert('Odontologia')
  }

  covid(): void {
    alert('Covid, deu bom não irmão!')
  }
}
