import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bsModalRef: BsModalRef
  constructor(private metodos: MetodosAuxiliares, private modalService: BsModalService) { }

  ngOnInit() {
  };

  navegar(proxima_tela: string): void {
    this.metodos.navegarTela(proxima_tela, 'home');
  }

  handleError(): void {
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Tela em construção'

    setTimeout(() => {
      this.bsModalRef.hide();
    }, 3000);
  };
}
