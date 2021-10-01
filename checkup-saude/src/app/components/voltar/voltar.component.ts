import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodosAuxiliares } from 'src/app/shared/metodos/metodos-auxiliares';

@Component({
  selector: 'app-voltar',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.scss']
})
export class VoltarComponent implements OnInit {

  constructor(private route: Router, private metodos: MetodosAuxiliares) { }

  ngOnInit() {
  }

  voltar():void {
    this.route.navigate([localStorage.getItem('voltar')]);
    this.metodos.voltar();
  }
}
