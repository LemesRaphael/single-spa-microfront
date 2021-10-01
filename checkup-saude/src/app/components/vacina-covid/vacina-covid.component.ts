import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { VacinaCovidConst } from 'src/app/shared/constantes/vacina-covid';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';
import { VacinaCovidModel } from 'src/app/shared/models/vacina-covid-model';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-vacina-covid',
  templateUrl: './vacina-covid.component.html',
  styleUrls: ['./vacina-covid.component.scss']
})
export class VacinaCovidComponent implements OnInit {

  bsModalRef?: BsModalRef;
  agenda: VacinaCovidModel = VacinaCovidConst;
  arrayConsulta: VacinaCovidModel[] = new Array();
  nome = this.metodos.getGlobalValue('nome').toUpperCase();
  sobrenome = this.metodos.getGlobalValue('sobrenome').toUpperCase()
  email: string;
  
  constructor(private metodos: MetodosAuxiliares, private modalService: BsModalService) { }

  ngOnInit() {
    
  }

  agendar(): void {
    let agendamento: VacinaCovidModel;

    agendamento = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      data: VacinaCovidConst.data,
      dose: VacinaCovidConst.dose,
      email: this.email,
      localidade: VacinaCovidConst.localidade,
      telefone: VacinaCovidConst.localidade,
      especialidade: VacinaCovidConst.especialidade,
      profissional: VacinaCovidConst.profissional,
      situacao: VacinaCovidConst.situacao,
    };

    if(this.metodos.getGlobalValue('consultas')) {
      let aux = JSON.parse(this.metodos.getGlobalValue('consultas'));
      aux.push(agendamento);
      this.metodos.setGlobalValue('consultas', JSON.stringify(aux));
      } else {
        this.arrayConsulta.push(agendamento);
        this.metodos.setGlobalValue('consultas', JSON.stringify(this.arrayConsulta));
      }
    this.handlerSuccess();
  };

  handlerSuccess():void {
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.message = 'Agendamento realizado com sucesso!'

    setTimeout(() => {
      this.bsModalRef.hide();
    }, 5000);

    this.metodos.voltar();
  };
}
