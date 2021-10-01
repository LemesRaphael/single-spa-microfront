import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})

export class SuporteComponent implements OnInit {

  email: string;
  text: string;
  bsModalRef: BsModalRef;

  constructor(private metodos: MetodosAuxiliares, private modalService: BsModalService) { }

  ngOnInit(){

  }

  enviar(): void {
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.message = 'Email enviado com sucesso!';

    setTimeout(() => {
      this.metodos.voltar();
      this.bsModalRef.hide();
    }, 3000);

  }
}
